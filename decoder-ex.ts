let __mcDecoder_group_deep = 0;

class mcDecoder {

	public static async decode(encryptedString): Promise<OrderInfo> {
		// 9999-9999-9999 is officially testing code
		this.logTransform("Inserted code", encryptedString);

		encryptedString = encryptedString.replace(/-/ig, "");
		this.logTransform("Dedashed code", encryptedString);

		// Online check if alreasy used
		await this.codeCheckUsed(encryptedString);

		let storeId: string;
		let posId: string;
		let day: string;
		let month: string;
		let hour: string;
		let minutes: string;
		let orderID: string;

		let inputCodeBase = encryptedString.replace(new RegExp("[^0-9A-Z]+", "ig"), "").toLowerCase();
		this.logTransform("Cleaning code", inputCodeBase);

		let s1 = "oqiljzyvuxw";
		let s2 = "00111ijlloq";

		for (let i = 0; i < 11; i++) {
			while (inputCodeBase.indexOf(s1[i], 0) >= 0) {
				inputCodeBase = inputCodeBase.replace(s1[i], s2[i]);
			}
		}

		this.logTransform("Recovered base-30", inputCodeBase);

		inputCodeBase = ("0000000000000000" + inputCodeBase);

		// First part
		this.group("First halfpart");

		let inputCodeBase10 = inputCodeBase.substring(inputCodeBase.length - 12, inputCodeBase.length - 5);
		this.logTransform("Code base 10 part", inputCodeBase10);

		let storenumberpartnum = parseInt(inputCodeBase10, 30);
		this.logTransform("Code base 30", storenumberpartnum);
		storenumberpartnum = storenumberpartnum * 243;
		this.logTransform("Code base 30 * 243", storenumberpartnum);

		let storenumberpart = "00000000000" + storenumberpartnum.toString();
		storenumberpart = storenumberpart.substring(storenumberpart.length - 13, storenumberpart.length - 5);
		this.logTransform("Code base 30 part", storenumberpart);

		this.ungroup();


		// Second part
		this.group("Second halfpart");
		inputCodeBase10 = inputCodeBase.substring(inputCodeBase.length - 10, inputCodeBase.length);
		this.logTransform("Code base 10 part", inputCodeBase10);

		let idecodedCodeBase10 = parseInt(inputCodeBase10, 30);
		this.logTransform("Code base 30", idecodedCodeBase10);

		let decodedCodeBase10 = idecodedCodeBase10.toString();
		decodedCodeBase10 = decodedCodeBase10.substring(decodedCodeBase10.length - 10, decodedCodeBase10.length);
		this.logTransform("Code base 30 part", decodedCodeBase10);

		this.ungroup();


		// Join parts
		this.logTransform("Combine", storenumberpart + " + " + decodedCodeBase10);
		decodedCodeBase10 = storenumberpart + decodedCodeBase10;

		// Result
		this.logTransform("Decoded", decodedCodeBase10);

		let checksum = decodedCodeBase10.substring(decodedCodeBase10.length - 2, decodedCodeBase10.length);
		decodedCodeBase10 = decodedCodeBase10.substring(decodedCodeBase10.length - 18, decodedCodeBase10.length - 2);


		// CRC
		this.group("CRC");

		let CRC = this.crc(decodedCodeBase10);
		this.logTransform("Full CRC", CRC);

		CRC = CRC.substring(CRC.length - 2, CRC.length);
		this.logTransform("Used CRC", CRC);


		this.logTransform("Checksum / CRC", checksum + " / " + CRC);
		if (CRC != checksum) {
			throw new Error("Kontrolní součet neodpovídá");
		}
		this.ungroup();

		//checking of data validity
		storeId = decodedCodeBase10.substring(0, 4);
		this.logTransform("storeId", storeId);

		posId = decodedCodeBase10.substring(12, 14);
		this.logTransform("posId", posId);

		let istoreId = parseInt(storeId, 10);
		let iposId = parseInt(posId, 10);

		if (istoreId < 1 || istoreId > 1000) {
			// wrong store number = error
		}
		if (iposId < 1 || iposId > 38) {
			// wrong pos number = error
		}


		// DATE
		let calendarDate = decodedCodeBase10.substring(4, 8);
		this.logTransform("Calendar date", calendarDate);

		day = calendarDate.substring(0, 2);
		month = calendarDate.substring(2, 4);

		// Check Date range ?
		// date not bigger than today !
		// date not earlier than 30 days ?

		// time
		let timeOfSale = decodedCodeBase10.substring(8, 12);
		this.logTransform("Time", timeOfSale);

		hour = timeOfSale.substring(0, 2);
		minutes = timeOfSale.substring(2, 4);


		orderID = decodedCodeBase10.substring(14, 16);
		this.logTransform("orderID", orderID);


		// Date
		let surveyyear = new Date().getFullYear();
		let surveydate = surveyyear + "-" + month + "-" + day;


		let surveydate2 = day + "/" + month + "/" + surveyyear;

		////Region: Difference between current date and given date
		let currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); //set hour,minutes,seconds,miliseconds
		let millisecondsPerDay = 24 * 60 * 60 * 1000;
		let givenDateString = month + "/" + day + "/" + surveyyear; //// month/day/year

		let codeDate = new Date(givenDateString);

		currentDate.setMinutes(currentDate.getMinutes() - currentDate.getTimezoneOffset()); //adjust to UTC
		codeDate.setMinutes(codeDate.getMinutes() - codeDate.getTimezoneOffset()); //adjust to UTC

		if (((currentDate.getTime() - codeDate.getTime()) / millisecondsPerDay) < 0) { //check dec - jan issue
			givenDateString = month + "/" + day + "/" + (surveyyear - 1);
			codeDate = new Date(givenDateString);
			codeDate.setMinutes(codeDate.getMinutes() - codeDate.getTimezoneOffset());
		}

		if (((currentDate.getTime() - codeDate.getTime()) / millisecondsPerDay) > 3 && storeId != "9999") {
			throw new Error("Bohužel není možné abyste vyplnili dotazník, protože jste navštívili restauraci před více jak 72 hodinami.");
		}

		if (parseInt(day, 10) > 31 || parseInt(month, 10) > 12 || parseInt(hour, 10) > 24 || parseInt(minutes, 10) > 60 || parseInt(posId, 10) > 33) {
			throw new Error("Date, time od POS id are invalid.");
		}

		if (storeId !== "" && !this.isValidIwrCode(storeId)) {
			throw new Error("Invalid store Id");
		}


		let order = new OrderInfo;

		order.timeSegment = this.getTimeSegment(hour, minutes);
		order.date = surveydate;
		order.time = hour + ":" + minutes;
		order.id = parseInt(orderID, 10);
		order.posId = parseInt(posId, 10);
		order.posType = this.getPosType(posId);
		order.storeId = storeId;
		order.code = encryptedString;
		//order.coupon = await this.getNewCoupon(storeId, posId);

		return order;
	}

	protected static async codeCheckUsed(code: string): Promise<boolean> {
		let response: string = await this.xhrGetResponseText("https://survey.fast-insight.com/mcd/cz/codecheck.php?code=" + code);
		if (response.toLowerCase() !== "yes") {
			throw new Error("Kód již byl použit");
		}
		return true
	}

	protected static async getNewCoupon(storeId, posId) {
		let code = await this.xhrGetResponseText("https://survey.fast-insight.com/mcd/cz/coupon_new.php?store_id=" + storeId + "&posid=" + posId);
		return code.replace(/\n/g, "");
	}

	protected static crc(input) {
		{
			let crci, crcj;
			let crcc;
			let iRC = 0;
			for (crcj = 0; crcj < 16; crcj++) {
				crcc = input.charCodeAt(crcj);
				iRC ^= crcc;
				for (crci = 0; crci < 8; crci++)
					if (iRC & 0x80)
						iRC = (iRC << 1) ^ 0x07;
					else
						iRC <<= 1;
				iRC &= 0xff;
			}
			return "000" + iRC.toString();
		}
	}

	protected static getTimeSegment(hour, minutes) {
		let time = parseInt(hour.toString() + minutes.toString());

		if (time <= 100) {
			return 5;
		}
		if (time <= 600) {
			return 6;
		}
		if (time <= 1200) {
			return 1;
		}
		if (time <= 1500) {
			return 2;
		}
		if (time <= 1900) {
			return 3;
		}
		if (time <= 2100) {
			return 4;
		}
		return 5;
	}

	protected static getPosType(posId) {
		if (posId < 12) {
			return 1; // Bar
		}
		if (posId < 17) {
			return 2; // Table service
		}
		if (posId < 20) {
			return 3; // Drive
		}
		if (posId < 33) {
			return 4; // Self order
		}
		return 5; // Delivery
	}

	protected static isValidIwrCode(storeId) {
		let valid = ["9999", "0015", "0075", "0007", "0060", "0105", "0055", "0068", "0034", "0110", "0022", "0082", "0094", "0064", "0107", "0021", "0104", "0032", "0092", "0014", "0044", "0098", "0057", "0087", "0024", "0097", "0070", "0036", "0106", "0101", "0039", "0100", "0086", "0081", "0063", "0066", "0019", "0095", "0093", "0029", "0089", "0013", "0065", "0108", "0074", "0052", "0090", "0079", "0043", "0011", "0103", "0088", "0099", "0072", "0056", "0004", "0049", "0018", "0091", "0012", "0053", "0001", "0111", "0080", "0058", "0069", "0073", "0038", "0041", "0083", "0109", "0003", "0067", "0076", "0050", "0035", "0027", "0037", "0051", "0028", "0102", "0045", "0048", "0071", "0020", "0096", "0026", "0046", "0009", "0084", "0042", "0085", "0016", "0017", "0010", "0078", "0062", "0047"];
		return valid.includes(storeId);
	}

	protected static logTransform(phase: string, code: any): void {
		let message: string = phase + ": ";
		let len: number = 30;

		while (len > message.length) {
			message = message + " ";
		}

		console.debug(message + "%c" + code.toString(), "color: white;");
	}

	protected static xhrGetResponseText(url): Promise<string> {
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest();
			xhr.open("GET", url, true);

			xhr.onloadend = (data) => {
				if (xhr.status == 200) {
					resolve(xhr.responseText);
				} else {
					reject("Unable to fetch. Status code: " + xhr.status);
				}
			};

			xhr.send();
		});
	}

	protected static group(name: string): void {
		console.group(name);
		__mcDecoder_group_deep++;
	}

	protected static ungroup(): void {
		console.groupEnd();
		__mcDecoder_group_deep--;
	}

	protected static cleanGroup(): void {
		while (__mcDecoder_group_deep > 0) {
			this.ungroup();
		}
	}
}

class OrderInfo {
	timeSegment: number;
	date: string;
	time: string;
	id: number;
	posId: number;
	posType: number;
	storeId: string;
	code: string;
	coupon: string;
}