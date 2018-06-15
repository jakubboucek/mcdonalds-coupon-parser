var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __mcDecoder_group_deep = 0;
var mcDecoder = /** @class */ (function () {
    function mcDecoder() {
    }
    mcDecoder.decode = function (encryptedString) {
        return __awaiter(this, void 0, void 0, function () {
            var storeId, posId, day, month, hour, minutes, orderID, inputCodeBase, s1, s2, i, inputCodeBase10, storenumberpart, idecodedCodeBase10, decodedCodeBase10, checksum, CRC, istoreId, iposId, calendarDate, timeOfSale, surveyyear, surveydate, surveydate2, currentDate, millisecondsPerDay, givenDateString, codeDate, order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // 9999-9999-9999 is officially testing code
                        this.logTransform("Inserted code", encryptedString);
                        encryptedString = encryptedString.replace(/-/ig, "");
                        this.logTransform("Dedashed code", encryptedString);
                        // Online check if alreasy used
                        return [4 /*yield*/, this.codeCheckUsed(encryptedString)];
                    case 1:
                        // Online check if alreasy used
                        _a.sent();
                        storeId = "";
                        posId = "";
                        day = "";
                        month = "";
                        hour = "";
                        minutes = "";
                        orderID = "";
                        inputCodeBase = encryptedString.replace(new RegExp("[^0-9A-Z]+", "ig"), "").toLowerCase();
                        this.logTransform("Cleaning code", inputCodeBase);
                        s1 = "oqiljzyvuxw";
                        s2 = "00111ijlloq";
                        for (i = 0; i < 11; i++) {
                            while (inputCodeBase.indexOf(s1[i], 0) >= 0) {
                                inputCodeBase = inputCodeBase.replace(s1[i], s2[i]);
                            }
                        }
                        this.logTransform("Recovered base-30", inputCodeBase);
                        inputCodeBase = ("0000000000000000" + inputCodeBase);
                        // First part
                        this.group("First halfpart");
                        inputCodeBase10 = inputCodeBase.substring(inputCodeBase.length - 12, inputCodeBase.length - 5);
                        this.logTransform("Code base 10 part", inputCodeBase10);
                        storenumberpart = parseInt(inputCodeBase10, 30);
                        this.logTransform("Code base 30", storenumberpart);
                        storenumberpart = storenumberpart * 243;
                        this.logTransform("Code base 30 * 243", storenumberpart);
                        storenumberpart = "00000000000" + storenumberpart;
                        storenumberpart = storenumberpart.substring(storenumberpart.length - 13, storenumberpart.length - 5);
                        this.logTransform("Code base 30 part", storenumberpart);
                        this.ungroup();
                        // Second part
                        this.group("Second halfpart");
                        inputCodeBase10 = inputCodeBase.substring(inputCodeBase.length - 10, inputCodeBase.length);
                        this.logTransform("Code base 10 part", inputCodeBase10);
                        idecodedCodeBase10 = parseInt(inputCodeBase10, 30);
                        this.logTransform("Code base 30", idecodedCodeBase10);
                        decodedCodeBase10 = idecodedCodeBase10.toString();
                        decodedCodeBase10 = decodedCodeBase10.substring(decodedCodeBase10.length - 10, decodedCodeBase10.length);
                        this.logTransform("Code base 30 part", decodedCodeBase10);
                        this.ungroup();
                        // Join parts
                        this.logTransform("Combine", storenumberpart + " + " + decodedCodeBase10);
                        decodedCodeBase10 = storenumberpart + decodedCodeBase10;
                        // Result
                        this.logTransform("Decoded", decodedCodeBase10);
                        checksum = decodedCodeBase10.substring(decodedCodeBase10.length - 2, decodedCodeBase10.length);
                        decodedCodeBase10 = decodedCodeBase10.substring(decodedCodeBase10.length - 18, decodedCodeBase10.length - 2);
                        // CRC
                        this.group("CRC");
                        CRC = this.crc(decodedCodeBase10);
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
                        istoreId = parseInt(storeId, 10);
                        iposId = parseInt(posId, 10);
                        if (istoreId < 1 || istoreId > 1000) {
                            // wrong store number = error
                        }
                        if (iposId < 1 || iposId > 38) {
                            // wrong pos number = error
                        }
                        calendarDate = decodedCodeBase10.substring(4, 8);
                        this.logTransform("Calendar date", calendarDate);
                        day = calendarDate.substring(0, 2);
                        month = calendarDate.substring(2, 4);
                        timeOfSale = decodedCodeBase10.substring(8, 12);
                        this.logTransform("Time", timeOfSale);
                        hour = timeOfSale.substring(0, 2);
                        minutes = timeOfSale.substring(2, 4);
                        orderID = decodedCodeBase10.substring(14, 16);
                        this.logTransform("orderID", orderID);
                        surveyyear = new Date().getFullYear();
                        surveydate = surveyyear + "-" + month + "-" + day;
                        surveydate2 = day + "/" + month + "/" + surveyyear;
                        currentDate = new Date();
                        currentDate.setHours(0, 0, 0, 0); //set hour,minutes,seconds,miliseconds
                        millisecondsPerDay = 24 * 60 * 60 * 1000;
                        givenDateString = month + "/" + day + "/" + surveyyear;
                        codeDate = new Date(givenDateString);
                        currentDate.setMinutes(currentDate.getMinutes() - currentDate.getTimezoneOffset()); //adjust to UTC
                        codeDate.setMinutes(codeDate.getMinutes() - codeDate.getTimezoneOffset()); //adjust to UTC
                        if (((currentDate - codeDate) / millisecondsPerDay) < 0) { //check dec - jan issue
                            givenDateString = month + "/" + day + "/" + (surveyyear - 1);
                            codeDate = new Date(givenDateString);
                            codeDate.setMinutes(codeDate.getMinutes() - codeDate.getTimezoneOffset());
                        }
                        if (((currentDate - codeDate) / millisecondsPerDay) > 3 && storeId != "9999") {
                            //throw new Error("Bohužel není možné abyste vyplnili dotazník, protože jste navštívili restauraci před více jak 72 hodinami.");
                        }
                        if (day > 31 || month > 12 || hour > 24 || minutes > 60 || posId > 33) {
                            throw new Error("Date, time od POS id are invalid.");
                        }
                        if (storeId !== "" && !this.isValidIwrCode(storeId)) {
                            throw new Error("Invalid store Id");
                        }
                        order = new OrderInfo;
                        order.timeSegment = this.getTimeSegment(hour, minutes);
                        order.date = surveydate;
                        order.time = hour + ":" + minutes;
                        order.id = orderID;
                        order.posId = posId;
                        order.posType = this.getPosType(posId);
                        order.storeId = storeId;
                        order.code = encryptedString;
                        //order.coupon = await this.getNewCoupon(storeId, posId);
                        return [2 /*return*/, order];
                }
            });
        });
    };
    mcDecoder.codeCheckUsed = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.xhrGetResponseText("https://survey.fast-insight.com/mcd/cz/codecheck.php?code=" + code)];
                    case 1:
                        response = _a.sent();
                        if (response.toLowerCase() !== "yes") {
                            throw new Error("Kód již byl použit");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    mcDecoder.getNewCoupon = function (storeId, posId) {
        return __awaiter(this, void 0, void 0, function () {
            var code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.xhrGetResponseText("https://survey.fast-insight.com/mcd/cz/coupon_new.php?store_id=" + storeId + "&posid=" + posId)];
                    case 1:
                        code = _a.sent();
                        return [2 /*return*/, code.replace(/\n/g, "")];
                }
            });
        });
    };
    mcDecoder.crc = function (input) {
        {
            var crci = void 0, crcj = void 0;
            var crcc = void 0;
            var iRC = 0;
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
    };
    mcDecoder.getTimeSegment = function (hour, minutes) {
        var time = parseInt(hour.toString() + minutes.toString());
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
    };
    mcDecoder.getPosType = function (posId) {
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
    };
    mcDecoder.isValidIwrCode = function (storeId) {
        var valid = ["9999", "0015", "0075", "0007", "0060", "0105", "0055", "0068", "0034", "0110", "0022", "0082", "0094", "0064", "0107", "0021", "0104", "0032", "0092", "0014", "0044", "0098", "0057", "0087", "0024", "0097", "0070", "0036", "0106", "0101", "0039", "0100", "0086", "0081", "0063", "0066", "0019", "0095", "0093", "0029", "0089", "0013", "0065", "0108", "0074", "0052", "0090", "0079", "0043", "0011", "0103", "0088", "0099", "0072", "0056", "0004", "0049", "0018", "0091", "0012", "0053", "0001", "0111", "0080", "0058", "0069", "0073", "0038", "0041", "0083", "0109", "0003", "0067", "0076", "0050", "0035", "0027", "0037", "0051", "0028", "0102", "0045", "0048", "0071", "0020", "0096", "0026", "0046", "0009", "0084", "0042", "0085", "0016", "0017", "0010", "0078", "0062", "0047"];
        return valid.includes(storeId);
    };
    mcDecoder.logTransform = function (phase, code) {
        var message = phase + ": ";
        var len = 30;
        while (len > message.length) {
            message = message + " ";
        }
        console.debug(message + "%c" + code, "color: white;");
    };
    mcDecoder.xhrGetResponseText = function (url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onloadend = function (data) {
                if (data.target.status == 200) {
                    resolve(xhr.responseText);
                }
                else {
                    reject("Unable to fetch. Status code: " + data.target.status);
                }
            };
            xhr.send();
        });
    };
    mcDecoder.group = function (name) {
        console.group(name);
        __mcDecoder_group_deep++;
    };
    mcDecoder.ungroup = function () {
        console.groupEnd();
        __mcDecoder_group_deep--;
    };
    mcDecoder.cleanGroup = function () {
        while (__mcDecoder_group_deep > 0) {
            this.ungroup();
        }
    };
    return mcDecoder;
}());
var OrderInfo = /** @class */ (function () {
    function OrderInfo() {
    }
    return OrderInfo;
}());
