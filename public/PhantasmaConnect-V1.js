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
                this.Link.sendTransaction('main', _inputScript, null, function (res) {
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
let theNet = "mainnet";
//let theNet = 'testnet';

class PhantasmaLink {
  constructor(dappID) {
    this.host = "localhost:7090";
    this.dapp = dappID;
    this.onLogin = function (succ) {
      // do nothing
    };
  }

  login(callback) {
    this.onLogin = callback;
    this.createSocket();
  }

  signTx(script, payload, callback) {
    console.log(script);

    if (script.length >= 65536) {
      alertbox.show("Error: script too big!");
      return;
    }

    if (payload == null) {
      payload = "";
    } else if (typeof payload === "string") {
      // NOTE: here we convert a string into raw bytes
      let sb = new ScriptBuilder();
      let bytes = sb.rawString(payload);
      sb.appendBytes(bytes);
      // then we convert the bytes into hex, because thats what PhantasmaLink protocol expects
      payload = sb.script;
    } else {
      alertbox.show("Error: invalid payload");
      return;
    }

    alertbox.show("Relaying transaction to wallet...");
    console.log("Relaying transaction to wallet...");

    var that = this;
    if (script.script) {
      script = script.script;
    }
    console.log("net = " + theNet);
    this.sendLinkRequest("signTx/" + theNet + "/main/" + script + "/" + payload, function (result) {
      callback(result);
      if (result.success && !result.hash.error) {
        alertbox.show("Transaction successful, hash: " + result.hash);
        console.log("Transaction successful, hash: " + result.hash);
      }
    });
  }

  createSocket() {
    let path = "ws://" + this.host + "/phantasma";
    alertbox.show("Phantasma Link connecting...");
    console.log("Phantasma Link connecting: " + path);
    this.socket = window.PhantasmaLinkSocket ? new PhantasmaLinkSocket() : new WebSocket(path);
    this.requestCallback = null;
    this.token = null;
    this.account = null;
    this.requestID = 0;
    var that = this;
    this.socket.onopen = function (e) {
      alertbox.show("Connection established, authorizing dapp in wallet...");
      console.log("Connection established, authorizing dapp in wallet...");
      that.sendLinkRequest("authorize/" + that.dapp, function (result) {
        if (result.success) {
          that.token = result.token;
          that.wallet = result.wallet;
          alertbox.show("Authorized, obtaining account info...");
          console.log("Authorized, obtaining account info...");
          that.sendLinkRequest("getAccount", function (result) {
            if (result.success) {
              that.account = result;
              alertbox.show(
                "Ready, opening " + that.dapp + " dapp connected with " + that.account.name + " on " + that.wallet + "..."
              );
              console.log(
                "Ready, opening " + that.dapp + " dapp connected with " + that.account.name + " on " + that.wallet + "..."
              );
            } else {
              alertbox.show(
                "Error: could not obtain account info... Make sure you have an account currently open in " + that.wallet + "..."
              );
              console.log(
                "Error: could not obtain account info... Make sure you have an account currently open in " + that.wallet + "..."
              );
              disconnectLink(true);
            }

            that.onLogin(result.success);
          });
        } else {
          alertbox.show("Error: authorization failed...");
          console.log("Error: authorization failed...");
          that.onLogin(false);
          disconnectLink(true);
        }
      });
    };

    this.socket.onmessage = function (event) {
      if (JSON.parse(event.data).message == "Wallet is Closed") {
        alertbox.show(
          "Error: could not obtain account info... Make sure you have an account currently open in " + that.wallet + "..."
        );
        console.log(
          "Error: could not obtain account info... Make sure you have an account currently open in " + that.wallet + "..."
        );
        disconnectLink(true);
      } else if (JSON.parse(event.data).message == "not logged in") {
        alertbox.show("Error: could not obtain account info... Make sure you have an account currently open in your wallet...");
        console.log("Error: could not obtain account info... Make sure you have an account currently open in in your wallet...");
        disconnectLink(true);
      } else if (
        JSON.parse(event.data).message == "A previouus request is still pending" ||
        JSON.parse(event.data).message == "A previous request is still pending"
      ) {
        alertbox.show("Error: you have a pending action in your wallet...");
        console.log("Error: you have a pending action in your wallet...");
      } else if (JSON.parse(event.data).message == "user rejected") {
        alertbox.show("Error: transaction cancelled by user in " + that.wallet + "...");
        console.log("Error: transaction cancelled by user in " + that.wallet + "...");
      } else {
        if (JSON.parse(event.data).wallet) {
          console.log(JSON.parse(event.data).dapp + " dapp is now connected with " + JSON.parse(event.data).wallet + "...");
          alertbox.show(JSON.parse(event.data).dapp + " dapp is now connected with " + JSON.parse(event.data).wallet + "...");
        } else if (JSON.parse(event.data).name) {
          console.log("Account info obtained, connected with " + JSON.parse(event.data).name + "...");
          alertbox.show("Account info obtained, connected with " + JSON.parse(event.data).name + "...");
        } else if (JSON.parse(event.data).hash) {
          console.log("Transaction accepted on wallet...");
          alertbox.show("Transaction accepted on wallet...");
        } else {
          console.log("Got Phantasma Link answer: " + JSON.parse(event.data).message);
          alertbox.show("Got Phantasma Link answer: " + JSON.parse(event.data).message);
        }

        var obj = JSON.parse(event.data);

        var temp = that.requestCallback;
        if (temp == null) {
          alertbox.show("Error: something bad happened...");
          console.log("Error: something bad happened...");
          return;
        }

        that.requestCallback = null;
        temp(obj);
      }
    };

    this.socket.onclose = function (event) {
      //if (linkDisconnected == 0) {
      if (!event.wasClean) {
        alertbox.show("Error: connection terminated...");
        console.log("Error: connection terminated...");
        //linkDisconnected = 1;
        disconnectLink(true);
      }
      //}
    };

    this.socket.onerror = function (error) {
      if (error.message !== undefined) {
        alertbox.show("Error: " + error.message);
        console.log("Error: " + error.message);
      }
    };
  }

  retry() {
    this.createSocket();
  }

  get dappID() {
    return this.dapp;
  }

  sendLinkRequest(request, callback) {
    console.log("Sending Phantasma Link request: " + request);

    if (this.token != null) {
      request = request + "/" + this.dapp + "/" + this.token;
    }

    this.requestID++;
    request = this.requestID + "," + request;

    this.requestCallback = callback;
    this.socket.send(request);
  }
}

var AlertBox = function (id, option) {
  this.show = function (msg) {
    if (msg === "" || typeof msg === "undefined" || msg === null) {
      throw '"msg parameter is empty"';
    } else {
      var alertArea = document.querySelector(id);
      var alertBox = document.createElement("DIV");
      var alertContent = document.createElement("DIV");
      var alertClose = document.createElement("A");
      var alertClass = this;
      alertContent.classList.add("alert-content");
      alertContent.innerText = msg;
      alertClose.classList.add("alert-close");
      alertClose.setAttribute("href", "#");
      alertBox.classList.add("alert-box");
      alertBox.appendChild(alertContent);
      if (!option.hideCloseButton || typeof option.hideCloseButton === "undefined") {
        alertBox.appendChild(alertClose);
      }
      alertArea.appendChild(alertBox);
      alertClose.addEventListener("click", function (event) {
        event.preventDefault();
        alertClass.hide(alertBox);
      });
      if (!option.persistent) {
        var alertTimeout = setTimeout(function () {
          alertClass.hide(alertBox);
          clearTimeout(alertTimeout);
        }, option.closeTime);
      }
    }
  };

  this.hide = function (alertBox) {
    alertBox.classList.add("hide");
    var disperseTimeout = setTimeout(function () {
      if (alertBox.parentNode) {
        alertBox.parentNode.removeChild(alertBox);
      }
      clearTimeout(disperseTimeout);
    }, 500);
  };
};

var alertNonPersistent = document.querySelector("#alertNonPersistent");
var alertPersistent = document.querySelector("#alertPersistent");
var alertShowMessage = document.querySelector("#alertShowMessage");
var alertHiddenClose = document.querySelector("#alertHiddenClose");
var alertMessageBox = document.querySelector("#alertMessageBox");
var alertbox = new AlertBox("#alert-area", {
  closeTime: 25000,
  persistent: false,
  hideCloseButton: false,
});
var alertboxPersistent = new AlertBox("#alert-area", {
  closeTime: 25000,
  persistent: true,
  hideCloseButton: false,
});
var alertNoClose = new AlertBox("#alert-area", {
  closeTime: 25000,
  persistent: false,
  hideCloseButton: true,
});

function disconnectLink(triggered) {
  if (triggered) {
    if (currentCallType == "Auction") {
      $("#retry-link").html(
        '<button data-bb-handler="confirm" type="button" class="btn btn-primary" onclick="confirmAuction(\'' +
          currentCall +
          '\')" id="retry-link"><i class="fa fa-check"></i> Retry</button>'
      );
    } else if (currentCallType == "Item") {
      $("#retry-link").html(
        '<button data-bb-handler="confirm" type="button" class="btn btn-primary" onclick="confirmSale(\'' +
          currentCall +
          "','" +
          currentCallCurrency +
          '\')" id="retry-link"><i class="fa fa-check"></i> Retry</button>'
      );
    }
    $("#phantasmaError").modal("show");
  }

  console.log("Phantasma Link disconnecting...");
  alertbox.show("Phantasma Link disconnecting...");
}
