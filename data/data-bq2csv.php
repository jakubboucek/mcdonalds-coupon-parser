<?php

declare(strict_types=1);


class NdJsonFileReader implements IteratorAggregate
{
    private string $file;
    private bool $gzip;

    public function __construct(string $file, bool $gzip = false)
    {
        if (is_file($file) === false || is_readable($file) === false) {
            throw new InvalidArgumentException("File {$file} is not readable file");
        }

        $this->file = $file;
        $this->gzip = $gzip;
    }

    private function openFile()
    {
        if ($this->gzip) {
            $handle = gzopen($this->file, 'rb');
        } else {
            $handle = fopen($this->file, 'rb');
        }

        if ($handle === false) {
            throw new InvalidArgumentException("Unable to read file {$this->file}");
        }

        return $handle;
    }

    private function closeFile($handle)
    {
        if ($this->gzip) {
            $handle = gzclose($handle);
        } else {
            $handle = fclose($handle);
        }
    }

    public function getIterator(): Generator
    {
        $handle = $this->openFile();
        while (($row = fgets($handle)) !== false) {
            yield json_decode($row, true, 512, JSON_THROW_ON_ERROR);
        }

        $this->closeFile($handle);
    }
}

$reader = new NdJsonFileReader('/Users/bukaj/www/mcd-cola-vouchers-2021-08-07T18-32-48-26389.json.gz', true);

$output = gzopen('/Users/bukaj/www/mcd-cola-vouchers-2021-08-07T18-32-48-26389.csv.gz', 'wb');

foreach ($reader as $i => $item) {
    $item = [
        'code' => $item['code'],
        'isValid' => $item['isValid'],
        'method' => $item['method'] ?? null,
        'used_method' => $item['used']['method'] ?? null,
        'created' => dateToLocal($item['created']),
        'expires' => dateToLocal($item['expires']),
        'used' => dateToLocal($item['used']['invalidated'] ?? null),
    ];

    if($i===0) {
        fputcsv($output, array_keys($item));
    }

    fputcsv($output, $item);
    echo ".";
}

gzclose($output);

function dateToLocal(?string $date) {
    if($date === null) {
        return null;
    }
    $date = new DateTime($date);
    $tz = new DateTimeZone('Europe/Prague');
    $date->setTimezone($tz);
    return $date->format(DateTimeInterface::RFC3339_EXTENDED);
}