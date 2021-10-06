//import axios from 'axios';
//import bigInt from ("big-integer")
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _PhantasmaRPC_instances, _PhantasmaRPC_sendPost, _PhantasmaConnect_instances, _PhantasmaConnect_compileScript;
var MaxRegisterCount = 32;
var Opcode;
(function (Opcode) {
    Opcode[Opcode["NOP"] = 0] = "NOP";
    Opcode[Opcode["MOVE"] = 1] = "MOVE";
    Opcode[Opcode["COPY"] = 2] = "COPY";
    Opcode[Opcode["PUSH"] = 3] = "PUSH";
    Opcode[Opcode["POP"] = 4] = "POP";
    Opcode[Opcode["SWAP"] = 5] = "SWAP";
    Opcode[Opcode["CALL"] = 6] = "CALL";
    Opcode[Opcode["EXTCALL"] = 7] = "EXTCALL";
    Opcode[Opcode["JMP"] = 8] = "JMP";
    Opcode[Opcode["JMPIF"] = 9] = "JMPIF";
    Opcode[Opcode["JMPNOT"] = 10] = "JMPNOT";
    Opcode[Opcode["RET"] = 11] = "RET";
    Opcode[Opcode["THROW"] = 12] = "THROW";
    Opcode[Opcode["LOAD"] = 13] = "LOAD";
    Opcode[Opcode["CAST"] = 14] = "CAST";
    Opcode[Opcode["CAT"] = 15] = "CAT";
    Opcode[Opcode["SUBSTR"] = 16] = "SUBSTR";
    Opcode[Opcode["LEFT"] = 17] = "LEFT";
    Opcode[Opcode["RIGHT"] = 18] = "RIGHT";
    Opcode[Opcode["SIZE"] = 19] = "SIZE";
    Opcode[Opcode["COUNT"] = 20] = "COUNT";
    Opcode[Opcode["NOT"] = 21] = "NOT";
    Opcode[Opcode["AND"] = 22] = "AND";
    Opcode[Opcode["OR"] = 23] = "OR";
    Opcode[Opcode["XOR"] = 24] = "XOR";
    Opcode[Opcode["EQUAL"] = 25] = "EQUAL";
    Opcode[Opcode["LT"] = 26] = "LT";
    Opcode[Opcode["GT"] = 27] = "GT";
    Opcode[Opcode["LTE"] = 28] = "LTE";
    Opcode[Opcode["GTE"] = 29] = "GTE";
    Opcode[Opcode["INC"] = 30] = "INC";
    Opcode[Opcode["DEC"] = 31] = "DEC";
    Opcode[Opcode["SIGN"] = 32] = "SIGN";
    Opcode[Opcode["NEGATE"] = 33] = "NEGATE";
    Opcode[Opcode["ABS"] = 34] = "ABS";
    Opcode[Opcode["ADD"] = 35] = "ADD";
    Opcode[Opcode["SUB"] = 36] = "SUB";
    Opcode[Opcode["MUL"] = 37] = "MUL";
    Opcode[Opcode["DIV"] = 38] = "DIV";
    Opcode[Opcode["MOD"] = 39] = "MOD";
    Opcode[Opcode["SHL"] = 40] = "SHL";
    Opcode[Opcode["SHR"] = 41] = "SHR";
    Opcode[Opcode["MIN"] = 42] = "MIN";
    Opcode[Opcode["MAX"] = 43] = "MAX";
    Opcode[Opcode["THIS"] = 44] = "THIS";
    Opcode[Opcode["CTX"] = 45] = "CTX";
    Opcode[Opcode["SWITCH"] = 46] = "SWITCH";
    Opcode[Opcode["PUT"] = 47] = "PUT";
    Opcode[Opcode["GET"] = 48] = "GET";
})(Opcode || (Opcode = {}));
var Nexus;
(function (Nexus) {
    Nexus["GasContractName"] = "gas";
    Nexus["BlockContractName"] = "block";
    Nexus["StakeContractName"] = "stake";
    Nexus["SwapContractName"] = "swap";
    Nexus["AccountContractName"] = "account";
    Nexus["ConsensusContractName"] = "consensus";
    Nexus["GovernanceContractName"] = "governance";
    Nexus["StorageContractName"] = "storage";
    Nexus["ValidatorContractName"] = "validator";
    Nexus["InteropContractName"] = "interop";
    Nexus["ExchangeContractName"] = "exchange";
    Nexus["PrivacyContractName"] = "privacy";
    Nexus["RelayContractName"] = "relay";
    Nexus["RankingContractName"] = "ranking";
})(Nexus || (Nexus = {}));
var VMType;
(function (VMType) {
    VMType[VMType["None"] = 0] = "None";
    VMType[VMType["Struct"] = 1] = "Struct";
    VMType[VMType["Bytes"] = 2] = "Bytes";
    VMType[VMType["Number"] = 3] = "Number";
    VMType[VMType["String"] = 4] = "String";
    VMType[VMType["Timestamp"] = 5] = "Timestamp";
    VMType[VMType["Bool"] = 6] = "Bool";
    VMType[VMType["Enum"] = 7] = "Enum";
    VMType[VMType["Object"] = 8] = "Object";
})(VMType || (VMType = {}));
var ScriptBuilder = /** @class */ (function () {
    function ScriptBuilder() {
        this._labelLocations = {};
        this._jumpLocations = {};
        this.str = "";
    }
    ScriptBuilder.prototype.nullAddress = function () {
        return "S1111111111111111111111111111111111";
    };
    ;
    ScriptBuilder.prototype.beginScript = function () {
        this.str = "";
    };
    ScriptBuilder.prototype.getScript = function () {
        return this.str;
    };
    ScriptBuilder.prototype.endScript = function () {
        this.emit(Opcode.RET);
        return this.str;
    };
    ScriptBuilder.prototype.emit = function (opcode, bytes) {
        this.appendByte(opcode);
        if (bytes) {
            this.emitBytes(bytes);
        }
        return this;
    };
    ScriptBuilder.prototype.emitPush = function (reg) {
        this.emit(Opcode.PUSH);
        this.appendByte(reg);
        return this;
    };
    ScriptBuilder.prototype.emitPop = function (reg) {
        this.emit(Opcode.POP);
        this.appendByte(reg);
        return this;
    };
    ScriptBuilder.prototype.emitExtCall = function (method, reg) {
        if (reg === void 0) { reg = 0; }
        this.emitLoad(reg, method);
        this.emit(Opcode.EXTCALL);
        this.appendByte(reg);
        return this;
    };
    ScriptBuilder.prototype.rawString = function (value) {
        var data = [];
        for (var i = 0; i < value.length; i++) {
            data.push(value.charCodeAt(i));
        }
        return data;
    };
    ScriptBuilder.prototype.emitLoad = function (reg, obj) {
        switch (typeof obj) {
            case "string": {
                var bytes = this.rawString(obj);
                this.emitLoadBytes(reg, bytes, VMType.String);
                break;
            }
            case "boolean": {
                var bytes = [obj ? 1 : 0];
                this.emitLoadBytes(reg, bytes, VMType.Bool);
                break;
            }
            case "number": {
                // obj is BigInteger
                // var bytes = val.ToSignedByteArray();
                // this.emitLoadBytes(reg, bytes, VMType.Number);
                var bytes = this.rawString(BigInt(obj).toString());
                this.emitLoadBytes(reg, bytes, VMType.String);
                break;
            }
            case "object":
                if (Array.isArray(obj)) {
                    this.emitLoadBytes(reg, obj);
                }
                else if (obj instanceof Date) {
                    this.emitLoadTimestamp(reg, obj);
                }
                else
                    throw Error("Load type " + typeof obj + " not supported");
                break;
            default:
                throw Error("Load type " + typeof obj + " not supported");
        }
        return this;
    };
    ScriptBuilder.prototype.emitLoadBytes = function (reg, bytes, type) {
        if (type === void 0) { type = VMType.Bytes; }
        if (bytes.length > 0xffff)
            throw new Error("tried to load too much data");
        this.emit(Opcode.LOAD);
        this.appendByte(reg);
        this.appendByte(type);
        this.emitVarInt(bytes.length);
        this.emitBytes(bytes);
        return this;
    };
    ScriptBuilder.prototype.emitLoadEnum = function (reg, enumVal) {
        // var temp = Convert.ToUInt32(enumVal);
        // var bytes = BitConverter.GetBytes(temp);
        var bytes = [0, 0, 0, 0];
        for (var i = 0; i < bytes.length; i++) {
            var byte = enumVal & 0xff;
            bytes[i] = byte;
            enumVal = (enumVal - byte) / 256;
        }
        this.emitLoadBytes(reg, bytes, VMType.Enum);
        return this;
    };
    ScriptBuilder.prototype.emitLoadTimestamp = function (reg, obj) {
        var num = (obj.getTime() + obj.getTimezoneOffset() * 60 * 1000) / 1000;
        var a = (num & 0xff000000) >> 24;
        var b = (num & 0x00ff0000) >> 16;
        var c = (num & 0x0000ff00) >> 8;
        var d = num & 0x000000ff;
        var bytes = [d, c, b, a];
        this.emitLoadBytes(reg, bytes, VMType.Timestamp);
        return this;
    };
    ScriptBuilder.prototype.emitMove = function (src_reg, dst_reg) {
        this.emit(Opcode.MOVE);
        this.appendByte(src_reg);
        this.appendByte(dst_reg);
        return this;
    };
    ScriptBuilder.prototype.emitCopy = function (src_reg, dst_reg) {
        this.emit(Opcode.COPY);
        this.appendByte(src_reg);
        this.appendByte(dst_reg);
        return this;
    };
    ScriptBuilder.prototype.emitLabel = function (label) {
        this.emit(Opcode.NOP);
        this._labelLocations[label] = this.str.length;
        return this;
    };
    ScriptBuilder.prototype.emitJump = function (opcode, label, reg) {
        if (reg === void 0) { reg = 0; }
        switch (opcode) {
            case Opcode.JMP:
            case Opcode.JMPIF:
            case Opcode.JMPNOT:
                this.emit(opcode);
                break;
            default:
                throw new Error("Invalid jump opcode: " + opcode);
        }
        if (opcode != Opcode.JMP) {
            this.appendByte(reg);
        }
        var ofs = this.str.length;
        this.appendUshort(0);
        this._jumpLocations[ofs] = label;
        return this;
    };
    ScriptBuilder.prototype.emitCall = function (label, regCount) {
        if (regCount < 1 || regCount > MaxRegisterCount) {
            throw new Error("Invalid number of registers");
        }
        var ofs = this.str.length; //(int)stream.Position;
        ofs += 2;
        this.emit(Opcode.CALL);
        this.appendByte(regCount);
        this.appendUshort(0);
        this._jumpLocations[ofs] = label;
        return this;
    };
    ScriptBuilder.prototype.emitConditionalJump = function (opcode, src_reg, label) {
        if (opcode != Opcode.JMPIF && opcode != Opcode.JMPNOT) {
            throw new Error("Opcode is not a conditional jump");
        }
        var ofs = this.str.length;
        ofs += 2;
        this.emit(opcode);
        this.appendByte(src_reg);
        this.appendUshort(0);
        this._jumpLocations[ofs] = label;
        return this;
    };
    ScriptBuilder.prototype.insertMethodArgs = function (args) {
        var temp_reg = 0;
        for (var i = args.length - 1; i >= 0; i--) {
            var arg = args[i];
            this.emitLoad(temp_reg, arg);
            this.emitPush(temp_reg);
        }
    };
    ScriptBuilder.prototype.callInterop = function (method, args) {
        this.insertMethodArgs(args);
        var dest_reg = 0;
        this.emitLoad(dest_reg, method);
        this.emit(Opcode.EXTCALL, [dest_reg]);
        return this;
    };
    ScriptBuilder.prototype.callContract = function (contractName, method, args) {
        this.insertMethodArgs(args);
        var temp_reg = 0;
        this.emitLoad(temp_reg, method);
        this.emitPush(temp_reg);
        var src_reg = 0;
        var dest_reg = 1;
        this.emitLoad(src_reg, contractName);
        this.emit(Opcode.CTX, [src_reg, dest_reg]);
        this.emit(Opcode.SWITCH, [dest_reg]);
        return this;
    };
    //#region ScriptBuilderExtensions
    ScriptBuilder.prototype.allowGas = function (from, to, gasPrice, gasLimit) {
        if (!to) {
            to = this.nullAddress();
        }
        return this.callContract(Nexus.GasContractName, "AllowGas", [
            from,
            to,
            gasPrice,
            gasLimit,
        ]);
    };
    ScriptBuilder.prototype.spendGas = function (address) {
        return this.callContract(Nexus.GasContractName, "SpendGas", [address]);
    };
    ScriptBuilder.prototype.callRPC = function (methodName, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, "bla"];
            });
        });
    };
    ScriptBuilder.prototype.getAddressTransactionCount = function (address, chainInput) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [address, chainInput];
                        return [4 /*yield*/, this.callRPC("getAddressTransactionCount", params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#endregion
    ScriptBuilder.prototype.emitVarString = function (text) {
        var bytes = this.rawString(text);
        this.emitVarInt(bytes.length);
        this.emitBytes(bytes);
        return this;
    };
    ScriptBuilder.prototype.emitVarInt = function (value) {
        if (value < 0)
            throw "negative value invalid";
        if (value < 0xfd) {
            this.appendByte(value);
        }
        else if (value <= 0xffff) {
            var B = (value & 0x0000ff00) >> 8;
            var A = value & 0x000000ff;
            // TODO check if the endianess is correct, might have to reverse order of appends
            this.appendByte(0xfd);
            this.appendByte(A);
            this.appendByte(B);
        }
        else if (value <= 0xffffffff) {
            var C = (value & 0x00ff0000) >> 16;
            var B = (value & 0x0000ff00) >> 8;
            var A = value & 0x000000ff;
            // TODO check if the endianess is correct, might have to reverse order of appends
            this.appendByte(0xfe);
            this.appendByte(A);
            this.appendByte(B);
            this.appendByte(C);
        }
        else {
            var D = (value & 0xff000000) >> 24;
            var C = (value & 0x00ff0000) >> 16;
            var B = (value & 0x0000ff00) >> 8;
            var A = value & 0x000000ff;
            // TODO check if the endianess is correct, might have to reverse order of appends
            this.appendByte(0xff);
            this.appendByte(A);
            this.appendByte(B);
            this.appendByte(C);
            this.appendByte(D);
        }
        return this;
    };
    ScriptBuilder.prototype.emitBytes = function (bytes) {
        for (var i = 0; i < bytes.length; i++)
            this.appendByte(bytes[i]);
        // writer.Write(bytes);
        return this;
    };
    ScriptBuilder.prototype.byteToHex = function (byte) {
        var result = byte.toString(16).toUpperCase();
        if (result.length == 1) {
            result = "0" + result;
        }
        return result;
    };
    ScriptBuilder.prototype.appendByte = function (byte) {
        this.str += this.byteToHex(byte);
    };
    ScriptBuilder.prototype.appendBytes = function (values) {
        for (var i = 0; i < values.length; i++) {
            this.appendByte(values[i]);
        }
    };
    ScriptBuilder.prototype.appendVarInt = function (value) {
        if (value < 0)
            throw "negative value invalid";
        if (value < 0xFD) {
            this.appendByte(value);
        }
        else if (value <= 0xFFFF) {
            var B = (value & 0x0000ff00) >> 8;
            var A = (value & 0x000000ff);
            this.appendByte(0xFD);
            this.appendByte(A);
            this.appendByte(B);
        }
        else if (value <= 0xFFFFFFFF) {
            var C = (value & 0x00ff0000) >> 16;
            var B = (value & 0x0000ff00) >> 8;
            var A = (value & 0x000000ff);
            this.appendByte(0xFE);
            this.appendByte(A);
            this.appendByte(B);
            this.appendByte(C);
        }
        else {
            var D = (value & 0xff000000) >> 24;
            var C = (value & 0x00ff0000) >> 16;
            var B = (value & 0x0000ff00) >> 8;
            var A = (value & 0x000000ff);
            this.appendByte(0xFF);
            this.appendByte(A);
            this.appendByte(B);
            this.appendByte(C);
            this.appendByte(D);
        }
    };
    ScriptBuilder.prototype.appendMethodArgs = function (args) {
        var temp_reg = 0;
        for (var i = args.length - 1; i >= 0; i--) {
            var arg = args[i];
            this.emitLoad(temp_reg, arg);
            this.emitPush(temp_reg);
        }
    };
    ScriptBuilder.prototype.appendUshort = function (ushort) {
        this.str +=
            this.byteToHex(ushort & 0xff) + this.byteToHex((ushort >> 8) & 0xff);
    };
    ScriptBuilder.prototype.appendHexEncoded = function (bytes) {
        this.str += bytes;
        return this;
    };
    return ScriptBuilder;
}());
var Decoder = /** @class */ (function () {
    function Decoder(str) {
        this.str = str;
    }
    Decoder.prototype.readCharPair = function () {
        var res = this.str.substr(0, 2);
        this.str = this.str.slice(2);
        return res;
    };
    Decoder.prototype.readByte = function () {
        return parseInt(this.readCharPair(), 16);
    };
    Decoder.prototype.read = function (numBytes) {
        var res = this.str.substr(0, numBytes * 2);
        this.str = this.str.slice(numBytes * 2);
        return res;
    };
    Decoder.prototype.readString = function () {
        var len = this.readVarInt();
        return this.readStringBytes(len);
    };
    Decoder.prototype.readStringBytes = function (numBytes) {
        var res = '';
        for (var i = 0; i < numBytes; ++i) {
            res += String.fromCharCode(this.readByte());
        }
        return res;
    };
    Decoder.prototype.readVarInt = function () {
        var len = this.readByte();
        var res = 0;
        if (len === 0xfd) {
            __spreadArray([], this.read(2).match(/.{1,2}/g), true).reverse()
                .forEach(function (c) { return (res = res * 256 + parseInt(c, 16)); });
            return res;
        }
        else if (len === 0xfe) {
            __spreadArray([], this.read(4).match(/.{1,2}/g), true).reverse()
                .forEach(function (c) { return (res = res * 256 + parseInt(c, 16)); });
            return res;
        }
        else if (len === 0xff) {
            __spreadArray([], this.read(8).match(/.{1,2}/g), true).reverse()
                .forEach(function (c) { return (res = res * 256 + parseInt(c, 16)); });
            return res;
        }
        return len;
    };
    Decoder.prototype.readBigInt = function () {
        // TO DO: implement negative numbers
        var len = this.readVarInt();
        var res = 0;
        var stringBytes = this.read(len);
        __spreadArray([], stringBytes.match(/.{1,2}/g), true).reverse().forEach(function (c) { return (res = res * 256 + parseInt(c, 16)); });
        return res;
    };
    Decoder.prototype.readBigIntAccurate = function () {
        var len = this.readVarInt();
        var res = bigInt();
        var stringBytes = this.read(len);
        __spreadArray([], stringBytes.match(/.{1,2}/g), true).reverse().forEach(function (c) {
            res = res.times(256).plus(parseInt(c, 16));
        });
        return res.toString();
    };
    return Decoder;
}());
var EasyDecode = /** @class */ (function () {
    function EasyDecode() {
    }
    EasyDecode.prototype.decodeVMObject = function (str) {
        var dec = new Decoder(str);
        var type = dec.readByte();
        switch (type) {
            case VMType.String:
                return dec.readString();
            case VMType.Number:
                return dec.readBigIntAccurate();
            default:
                return 'unsupported type ' + type;
        }
    };
    EasyDecode.prototype.getTokenEventData = function (str) {
        var dec = new Decoder(str);
        return {
            symbol: dec.readString(),
            value: dec.readBigInt(),
            chainName: dec.readString()
        };
    };
    EasyDecode.prototype.getChainValueEventData = function (str) {
        var dec = new Decoder(str);
        return {
            name: dec.readString,
            value: dec.readBigInt()
        };
    };
    EasyDecode.prototype.getTransactionSettleEventData = function (str) {
        var dec = new Decoder(str);
        return {
            hash: dec.read(dec.readByte()),
            platform: dec.readString(),
            chain: dec.readString()
        };
        // public readonly Hash Hash;
    };
    EasyDecode.prototype.getGasEventData = function (str) {
        var dec = new Decoder(str);
        return {
            address: dec.read(dec.readByte()),
            price: dec.readBigInt(),
            amount: dec.readBigInt()
        };
    };
    EasyDecode.prototype.getMarketEventData = function (str) {
        var dec = new Decoder(str);
        return {
            baseSymbol: dec.readString(),
            quoteSymbol: dec.readString(),
            id: dec.readBigIntAccurate(),
            amount: dec.readBigInt()
        };
    };
    return EasyDecode;
}());
;
var PhantasmaRPC = /** @class */ (function () {
    function PhantasmaRPC(RPC_URL) {
        _PhantasmaRPC_instances.add(this);
        this.url = RPC_URL;
    }
    ;
    PhantasmaRPC.prototype.getAccount = function (WalletAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [WalletAddress];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getAccount', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.lookUpName = function (WalletAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [WalletAddress];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'lookUpName', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getBlockHeight = function (ChainAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [ChainAddress];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getBlockHeight', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getBlockTransactionCountByHash = function (BlockHash) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [BlockHash];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getBlockTransactionCountByHash', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getBlockByHash = function (BlockHash) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [BlockHash];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getBlockByHash', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getRawBlockByHash = function (BlockHash) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [BlockHash];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getRawBlockByHash', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getBlockByHeight = function (ChainAddress, BlockHeight) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [ChainAddress, BlockHeight];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getBlockByHeight', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getRawBlockByHeight = function (ChainAddress, BlockHeight) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [ChainAddress, BlockHeight];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getRawBlockByHeight', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getTransactionByBlockHashAndIndex = function (BlockHash, TransactionIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [BlockHash, TransactionIndex];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getTransactionByBlockHashAndIndex', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getAddressTransactions = function (WalletAddress, PageIndex, PageItemMax) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [WalletAddress, PageIndex, PageItemMax];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getTransactionByBlockHashAndIndex', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getAddressTransactionCount = function (WalletAddress, ChainAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [WalletAddress, ChainAddress];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getAddressTransactionCount', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.sendRawTransaction = function (SerializedScript) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [SerializedScript];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'sendRawTransaction', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.invokeRawScript = function (ChainAddress, SerializedScript) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [ChainAddress, SerializedScript];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'invokeRawScript', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getTransaction = function (TransactionHash) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [TransactionHash];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getTransaction', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.cancelTransaction = function (TransactionHash) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [TransactionHash];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'cancelTransaction', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getChains = function () {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getChains', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getTokens = function () {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getTokens', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getToken = function (TokenSymbol) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [TokenSymbol];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getToken', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getTokenData = function (TokenSymbol, TokenID) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [TokenSymbol, TokenID];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getTokenData', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getApps = function () {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getApps', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getTokenTransfers = function (TokenSymbol, PageIndex, PageItemMax) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [TokenSymbol, PageIndex, PageItemMax];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getTokenTransfers', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getTokenTransferCount = function (TokenSymbol) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [TokenSymbol];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getTokenTransferCount', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getTokenBalance = function (WalletAddress, TokenSymbol, ChainAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [WalletAddress, TokenSymbol, ChainAddress];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getTokenBalance', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getAuctions = function (ChainAddress, TokenSymbol, PageIndex, PageItemMax) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [ChainAddress, TokenSymbol, PageIndex, PageItemMax];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getAuctions', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getAuction = function (ChainAddress, TokenSymbol, TokenID) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [ChainAddress, TokenSymbol, TokenID];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getAuction', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    PhantasmaRPC.prototype.getArchive = function (ArchiveHash) {
        return __awaiter(this, void 0, void 0, function () {
            var perams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perams = [ArchiveHash];
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaRPC_instances, "m", _PhantasmaRPC_sendPost).call(this, 'getArchive', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    ;
    return PhantasmaRPC;
}());
_PhantasmaRPC_instances = new WeakSet(), _PhantasmaRPC_sendPost = function _PhantasmaRPC_sendPost(methodName, perams) {
    return __awaiter(this, void 0, void 0, function () {
        var sendData;
        return __generator(this, function (_a) {
            sendData = {
                jsonrpc: '2.0',
                method: methodName,
                params: perams,
                id: 1
            };
            return [2 /*return*/, axios({
                    method: 'post',
                    url: this.url,
                    data: sendData,
                    headers: { "Content-Type": "application/x-www-form-urlencoded" }
                })
                    .then(function (response) {
                    if (response.data.result == undefined) {
                        return response.data;
                    }
                    return response.data.result;
                })["catch"](function (error) {
                    return error;
                })];
        });
    });
};
;
var PhantasmaConnect = /** @class */ (function () {
    //Basic Constructor
    function PhantasmaConnect(dAppName, RPC_URL) {
        _PhantasmaConnect_instances.add(this);
        //Initial Declarations
        this.constructorConfig = {
            dappName: 'Default dApp',
            url: 'http://207.148.17.86:7077/rpc'
        };
        //Phantasma Link Variables
        this.phantasmaLinkConfig = {
            requiredVersion: 2,
            platform: 'phantasma',
            providerHint: ''
        };
        //Script Creation Variables
        this.scriptConfig = {
            contractName: '',
            methodName: '',
            inputArguments: [],
            compiledScript: ''
        };
        this.constructorConfig.dappName = dAppName;
        this.constructorConfig.url = RPC_URL;
        //Initiate Classes
        this.RPC = new PhantasmaRPC(this.constructorConfig.url);
        this.Link = new PhantasmaLink(this.constructorConfig.dappName);
        this.Decode = new EasyDecode;
    }
    //Checks for Ecto Wallet then Enables it Via providerHint
    PhantasmaConnect.prototype.checkForEcto = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!!window.PhantasmaLinkSocket == true) {
                    this.phantasmaLinkConfig.providerHint = 'ecto';
                }
                ;
                return [2 /*return*/];
            });
        });
    };
    ;
    //Logs in to Phantasma (If Ecto installed, Toggles Custom Ecto Connect Socket with prividerHint)
    PhantasmaConnect.prototype.walletConnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //Waits for Ecto Check to finish then continues
                    return [4 /*yield*/, this.checkForEcto()];
                    case 1:
                        //Waits for Ecto Check to finish then continues
                        _a.sent();
                        //Sends Login Request to Wallet
                        this.Link.login(function (success) {
                            //Console Logging for Debugging Purposes
                            if (success) {
                                console.log('Connected to account ' + this.account.address + ' via ' + this.wallet);
                            }
                            else {
                                console.log('Connection Failed');
                            }
                            ;
                        }, this.phantasmaLinkConfig.requiredVersion, this.phantasmaLinkConfig.platform, this.phantasmaLinkConfig.providerHint);
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    ;
    PhantasmaConnect.prototype.generateScript = function (_contractName, _methodName, _inputArguments, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scriptConfig = {
                            contractName: _contractName,
                            methodName: _methodName,
                            inputArguments: _inputArguments,
                            compiledScript: ''
                        };
                        return [4 /*yield*/, __classPrivateFieldGet(this, _PhantasmaConnect_instances, "m", _PhantasmaConnect_compileScript).call(this, type)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.scriptConfig.compiledScript];
                }
            });
        });
    };
    PhantasmaConnect.prototype.signTransaction = function (_inputScript) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //Send the Transaction (type = 'mainnet' or 'simnet')
                this.Link.sendTransaction('mainnet', 'main', _inputScript, function (res) {
                    //Logging for Debuging Purposes
                    if (res.success) {
                        console.log('success: ' + res);
                    }
                    else {
                        console.log('failed: ' + res);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ;
    PhantasmaConnect.prototype.getWalletAddy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Link.account.address];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    return PhantasmaConnect;
}());
_PhantasmaConnect_instances = new WeakSet(), _PhantasmaConnect_compileScript = function _PhantasmaConnect_compileScript(type) {
    return __awaiter(this, void 0, void 0, function () {
        var sb, minimumFee, gasLimit;
        return __generator(this, function (_a) {
            sb = new ScriptBuilder();
            switch (type) {
                case 'gasProfile':
                    minimumFee = '100000';
                    gasLimit = '900';
                    //Builds Script 
                    this.scriptConfig.compiledScript = sb
                        .callContract('gas', 'AllowGas', [this.Link.account.address, sb.nullAddress(), minimumFee, gasLimit]) //Just for good measure (optional)
                        .callContract(this.scriptConfig.contractName, this.scriptConfig.methodName, this.scriptConfig.inputArguments) //The Meat of the Script
                        .callContract('gas', 'SpendGas', [this.Link.account.address]) //Just for good measure (optional)
                        .endScript();
                    break;
                case 'invoke':
                    //Builds Script
                    this.scriptConfig.compiledScript = sb
                        .callContract(this.scriptConfig.contractName, this.scriptConfig.methodName, this.scriptConfig.inputArguments) //The Meat of the Script
                        .endScript();
                    break;
            }
            return [2 /*return*/];
        });
    });
};
;
(function($) {
    $.fn.fakeLoader = function(options) {
        var bindLoader = $(this).data("fakeLoader:initial");
        if (bindLoader) {
            bindLoader.settings = $.extend(bindLoader.settings, options);
            return
        }
        $(this).data("fakeLoader:initial", this);
        var settings = $.extend({
            timeToHide: 1200,
            pos: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            zIndex: "999",
            bgColor: "#2ecc71",
            spinner: "spinner7",
            imagePath: "",
            blockMode: false,
            release: false
        }, options);
        this.settings = settings;
        var spinner01 = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
        var spinner02 = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
        var spinner03 = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
        var spinner04 = '<div class="fl spinner4"></div>';
        var spinner05 = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>';
        var spinner06 = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
        var spinner07 = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>';
        var el = $(this);
        var initStyles = {
            position: settings.pos,
            width: settings.width,
            height: settings.height,
            top: settings.top,
            left: settings.left
        };
        el.css(initStyles);
        el.each(function() {
            var a = settings.spinner;
            switch (a) {
                case "spinner1":
                    el.html(spinner01);
                    break;
                case "spinner2":
                    el.html(spinner02);
                    break;
                case "spinner3":
                    el.html(spinner03);
                    break;
                case "spinner4":
                    el.html(spinner04);
                    break;
                case "spinner5":
                    el.html(spinner05);
                    break;
                case "spinner6":
                    el.html(spinner06);
                    break;
                case "spinner7":
                    el.html(spinner07);
                    break;
                default:
                    el.html(spinner01)
            }
            if (settings.imagePath != "") {
                el.html('<div class="fl"><div id="phantasma_link_msg" class="text-center" style="color:gray">Initializing...</div><br><img src="' + settings.imagePath + '"></div>')
            }
            centerLoader()
        });
        if (settings.blockMode == false) {
            setTimeout(function() {
                $(el).fadeOut()
            }, settings.timeToHide)
        } else {
            setInterval(function() {
                if (settings.release == true) {
                    $(el).fadeOut()
                }
            }, settings.timeToHide)
        }
        return this.css({
            backgroundColor: settings.bgColor,
            zIndex: settings.zIndex
        })
    };

    function centerLoader() {
        var winW = $(window).width();
        var winH = $(window).height();
        var spinnerW = $(".fl").outerWidth();
        var spinnerH = $(".fl").outerHeight();
        $(".fl").css({
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "256px",
            height: "256px",
            margin: "-128px 0px 0px -128px"
        })
    }
    $(window).on("load", function() {
        centerLoader();
        $(window).resize(function() {
            centerLoader()
        })
    })
})(jQuery);
String.prototype.trunc = String.prototype.trunc || function(n) {
    return (this.length > n) ? this.substr(0, n - 1) + '...' : this;
};
var phantasmaLogo = 'data:image/png;base64,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';
var phantasmaInsertHTML = `<div id="fakeLoader"></div><div id="phantasmaError"class="modal fade"role="dialog"style="color:black"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title"style="text-align:left">Phantasma Link Error</h4><button type="button"class="close"data-dismiss="modal">&times;</button></div><div class="modal-body"><p>We were unable to connect to a Phantasma wallet.If you have a compatible wallet installed,make sure it is open in the background.</p><p>Otherwise,please install one of the following wallets:<ul><li><a class="phantasma-wallet-link"href="https://github.com/Relfos/Poltergeist/releases">Poltergeist</a></li><li><a class="phantasma-wallet-link"href="https://chrome.google.com/webstore/detail/ecto-wallet/bgjogpoidejdemgoochpnkmdjpocgkha">Ecto</a></li><!--<li><a class="phantasma-wallet-link"href="https://github.com/merl111/PhantomWallet/releases">Phantom</a></li>--></ul></p><p>Once installed,open it then press the Retry button.</p></div><div class="modal-footer"><button type="button"class="btn btn-default"onclick="link.retry();">Retry</button></div></div></div></div>`;

class PhantasmaLink {
    constructor(dappID) {
        this.host = "localhost:7090";
        this.dapp = dappID;
        $('body').append(phantasmaInsertHTML);
        this.onLogin = function(succ) {};
    }
    login(callback, version = 2, platform = 'phantasma', providerHint = '') {
        this.onLogin = callback;
        this.version = version;
        this.platform = platform;
        this.token = null;
        this.createSocket(providerHint, false);
    }
    resume(token, wallet, nexus, version, platform, callback, providerHint = '') {
        this.token = token;
        this.wallet = wallet;
        this.nexus = nexus;
        this.version = version;
        this.platform = platform;
        this.onLogin = callback;
        this.createSocket(providerHint, true);
    }
    fetchAccount() {
        let that = this;
        let requestStr = 'getAccount';
        if (this.version > 1) {
            requestStr = requestStr + '/' + this.platform;
        }
        this.sendLinkRequest(requestStr, function(result) {
            if (result.success) {
                that.account = result;
                that.setLinkMsg('Ready, opening dapp...');
                that.hideModal();
            } else {
                that.setLinkMsg('Could not obtain account info...<br>Make sure you have an account currently open in ' + that.wallet);
            }
            that.onLogin(result.success, '');
        });
    }
    createSocket(providerHint, isResume) {
        console.log('Initialing socket for Phantasma link version ' + this.version);
        let path = "ws://" + this.host + "/phantasma";
        this.setLinkMsg('Phantasma Link connecting: ' + path);
        if (providerHint == 'ecto') {
            if (window.PhantasmaLinkSocket) {
                this.setLinkMsg('Using custom Ecto socket...');
                this.socket = new PhantasmaLinkSocket();
            } else {
                if (this.ectoDelay >= 3) {
                    this.setLinkMsg('Could not find Ecto socket...');
                    this.onLogin(false);
                } else {
                    if (this.ectoDelay) {
                        this.ectoDelay++;
                    } else {
                        this.ectoDelay = 1;
                    }
                    this.showModal();
                    this.setLinkMsg('Waiting for Ecto connection...');
                    let that = this;
                    setTimeout(function() {
                        that.createSocket(providerHint, isResume);
                    }, 500);
                }
                return;
            }
        } else {
            this.socket = new WebSocket(path);
        }
        this.requestCallback = null;
        this.account = null;
        this.requestID = 0;
        this.showModal();
        let that = this;
        this.socket.onopen = function(e) {
            that.setLinkMsg('Connection established, authorizing...');
            if (isResume) {
                that.setLinkMsg('Resuming connection...');
                that.fetchAccount();
            } else {
                let requestStr = 'authorize/' + that.dapp;
                if (that.version > 1) {
                    requestStr = requestStr + '/' + that.version;
                }
                that.sendLinkRequest(requestStr, function(result) {
                    if (result.success) {
                        that.token = result.token;
                        that.wallet = result.wallet;
                        that.nexus = result.nexus;
                        that.setLinkMsg('Authorized, obtaining account info...');
                        that.fetchAccount();
                    } else {
                        that.setLinkMsg('Authorization failed...');
                        that.onLogin(false);
                        return;
                    }
                });
            }
        };
        this.socket.onmessage = function(event) {
            console.log("Got Phantasma Link answer: " + event.data);
            let obj = JSON.parse(event.data);
            let temp = that.requestCallback;
            if (temp == null) {
                that.setLinkMsg('Something bad happened...');
                return;
            }
            that.requestCallback = null;
            temp(obj);
        };
        this.socket.onclose = function(event) {
            if (!event.wasClean) {
                that.setLinkMsg('Connection died...');
                if (isResume) {
                    that.onLogin(false);
                    return;
                } else {
                    $('#phantasmaError').modal('show');
                }
            }
        };
        this.socket.onerror = function(error) {
            that.setLinkMsg('Error: ' + error.message);
        };
    }
    retry() {
        $('#phantasmaError').modal('hide');
        this.createSocket();
    }
    get dappID() {
        return this.dapp;
    }
    sendTransaction(chain, script, payload, callback, platform = 'phantasma', signature = 'Ed25519') {
        if (!this.socket) {
            callback('not logged in');
            return;
        }
        if (script.length >= 8192) {
            alert("script too big, sorry :(");
            return;
        }
        if (payload == null) {
            payload = "";
        } else
        if (typeof payload === 'string') {
            let sb = new ScriptBuilder();
            let bytes = sb.rawString(payload);
            sb.appendBytes(bytes);
            payload = sb.script;
        } else {
            alert("invalid payload, sorry :(");
            return;
        }
        this.showModal();
        this.setLinkMsg('Relaying transaction to wallet...');
        let that = this;
        let requestStr = chain + '/' + script + '/' + payload;
        if (this.version >= 2) {
            requestStr = requestStr + '/' + signature + '/' + platform;
        } else {
            requestStr = this.nexus + '/' + requestStr;
        }
        this.sendLinkRequest('signTx/' + requestStr, function(result) {
            that.hideModal();
            callback(result);
        });
    }
    sendLinkRequest(request, callback) {
        console.log("Sending Phantasma Link request: " + request);
        if (this.token != null) {
            request = request + '/' + this.dapp + '/' + this.token;
        }
        this.requestID++;
        request = this.requestID + ',' + request;
        this.requestCallback = callback;
        console.log(request);
        this.socket.send(request);
    }
    setLinkMsg(msg) {
        console.log(msg);
        $('#phantasma_link_msg').html(msg);
    }
    showModal() {
        if (this.hasModal) {
            return;
        }
        this.hasModal = true;
        $("#fakeLoader").fakeLoader({
            blockMode: true,
            timeToHide: 1200,
            zIndex: 999,
            spinner: "spinner7",
            bgColor: "#EDFBFF",
            imagePath: phantasmaLogo
        });
    }
    hideModal() {
        this.hasModal = false;
        setTimeout(function() {
            $("#fakeLoader").fakeLoader({
                release: true
            });
        }, 1500);
    }
}