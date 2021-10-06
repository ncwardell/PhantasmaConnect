
//import axios from 'axios';
//import bigInt from ("big-integer")


type byte = number;
const MaxRegisterCount = 32;

enum Opcode {
    NOP = 0,
    MOVE = 1,
    COPY = 2,
    PUSH = 3,
    POP = 4,
    SWAP = 5,
    CALL = 6,
    EXTCALL = 7,
    JMP = 8,
    JMPIF = 9,
    JMPNOT = 10,
    RET = 11,
    THROW = 12,
    LOAD = 13,
    CAST = 14,
    CAT = 15,
    SUBSTR = 16,
    LEFT = 17,
    RIGHT = 18,
    SIZE = 19,
    COUNT = 20,
    NOT = 21,
    AND = 22,
    OR = 23,
    XOR = 24,
    EQUAL = 25,
    LT = 26,
    GT = 27,
    LTE = 28,
    GTE = 29,
    INC = 30,
    DEC = 31,
    SIGN = 32,
    NEGATE = 33,
    ABS = 34,
    ADD = 35,
    SUB = 36,
    MUL = 37,
    DIV = 38,
    MOD = 39,
    SHL = 40,
    SHR = 41,
    MIN = 42,
    MAX = 43,
    THIS = 44,
    CTX = 45,
    SWITCH = 46,
    PUT = 47,
    GET = 48
}

enum Nexus {
    GasContractName = "gas",
    BlockContractName = "block",
    StakeContractName = "stake",
    SwapContractName = "swap",
    AccountContractName = "account",
    ConsensusContractName = "consensus",
    GovernanceContractName = "governance",
    StorageContractName = "storage",
    ValidatorContractName = "validator",
    InteropContractName = "interop",
    ExchangeContractName = "exchange",
    PrivacyContractName = "privacy",
    RelayContractName = "relay",
    RankingContractName = "ranking"
}

enum VMType {
    None = 0,
    Struct = 1,
    Bytes = 2,
    Number = 3,
    String = 4,
    Timestamp = 5,
    Bool = 6,
    Enum = 7,
    Object = 8
}

class ScriptBuilder {

    _labelLocations: { [id: string]: number } = {};
    _jumpLocations: { [id: number]: string } = {};

    public str: string;

    public nullAddress() {
        return "S1111111111111111111111111111111111";
    };

    public constructor() {
        this.str = "";
    }

    public beginScript() {
        this.str = "";
    }

    public getScript(): string {
        return this.str;
    }

    public endScript(): string {
        this.emit(Opcode.RET);
        return this.str;
    }

    public emit(opcode: Opcode, bytes?: number[]): this {
        this.appendByte(opcode);
        if (bytes) {
            this.emitBytes(bytes);
        }
        return this;
    }

    public emitPush(reg: byte): this {
        this.emit(Opcode.PUSH);
        this.appendByte(reg);
        return this;
    }

    public emitPop(reg: byte): this {
        this.emit(Opcode.POP);
        this.appendByte(reg);
        return this;
    }

    public emitExtCall(method: string, reg: byte = 0): this {
        this.emitLoad(reg, method);
        this.emit(Opcode.EXTCALL);
        this.appendByte(reg);
        return this;
    }

    rawString(value: string) {
        var data = [];
        for (var i = 0; i < value.length; i++) {
            data.push(value.charCodeAt(i));
        }
        return data;
    }

    public emitLoad(reg: number, obj: any): this {
        switch (typeof obj) {
            case "string": {
                let bytes = this.rawString(obj);
                this.emitLoadBytes(reg, bytes, VMType.String);
                break;
            }

            case "boolean": {
                let bytes = [(obj as boolean) ? 1 : 0];
                this.emitLoadBytes(reg, bytes, VMType.Bool);
                break;
            }

            case "number": {
                // obj is BigInteger
                // var bytes = val.ToSignedByteArray();
                // this.emitLoadBytes(reg, bytes, VMType.Number);
                let bytes = this.rawString(BigInt(obj).toString());
                this.emitLoadBytes(reg, bytes, VMType.String);
                break;
            }

            case "object":
                if (Array.isArray(obj)) {
                    this.emitLoadBytes(reg, obj as number[]);
                } else if (obj instanceof Date) {
                    this.emitLoadTimestamp(reg, obj);
                } else throw Error("Load type " + typeof obj + " not supported");
                break;
            default:
                throw Error("Load type " + typeof obj + " not supported");
        }
        return this;
    }

    public emitLoadBytes(
        reg: number,
        bytes: byte[],
        type: VMType = VMType.Bytes
    ): this {
        if (bytes.length > 0xffff) throw new Error("tried to load too much data");

        this.emit(Opcode.LOAD);
        this.appendByte(reg);
        this.appendByte(type);

        this.emitVarInt(bytes.length);
        this.emitBytes(bytes);
        return this;
    }

    public emitLoadEnum(reg: number, enumVal: number): this {
        // var temp = Convert.ToUInt32(enumVal);
        // var bytes = BitConverter.GetBytes(temp);

        let bytes = [0, 0, 0, 0];

        for (let i = 0; i < bytes.length; i++) {
            var byte = enumVal & 0xff;
            bytes[i] = byte;
            enumVal = (enumVal - byte) / 256;
        }

        this.emitLoadBytes(reg, bytes, VMType.Enum);
        return this;
    }

    public emitLoadTimestamp(reg: number, obj: Date): this {
        let num = (obj.getTime() + obj.getTimezoneOffset() * 60 * 1000) / 1000;

        let a = (num & 0xff000000) >> 24;
        let b = (num & 0x00ff0000) >> 16;
        let c = (num & 0x0000ff00) >> 8;
        let d = num & 0x000000ff;

        let bytes = [d, c, b, a];
        this.emitLoadBytes(reg, bytes, VMType.Timestamp);
        return this;
    }

    public emitMove(src_reg: number, dst_reg: number): this {
        this.emit(Opcode.MOVE);
        this.appendByte(src_reg);
        this.appendByte(dst_reg);
        return this;
    }

    public emitCopy(src_reg: number, dst_reg: number): this {
        this.emit(Opcode.COPY);
        this.appendByte(src_reg);
        this.appendByte(dst_reg);
        return this;
    }

    public emitLabel(label: string): this {
        this.emit(Opcode.NOP);
        this._labelLocations[label] = this.str.length;
        return this;
    }

    public emitJump(opcode: Opcode, label: string, reg: number = 0): this {
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
    }

    public emitCall(label: string, regCount: byte): this {
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
    }

    public emitConditionalJump(
        opcode: Opcode,
        src_reg: byte,
        label: string
    ): this {
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
    }

    public insertMethodArgs(args: any[]) {
        let temp_reg = 0;
        for (let i = args.length - 1; i >= 0; i--) {
            let arg = args[i];
            this.emitLoad(temp_reg, arg);
            this.emitPush(temp_reg);
        }
    }

    public callInterop(method: string, args: any[]): this {
        this.insertMethodArgs(args);

        let dest_reg = 0;
        this.emitLoad(dest_reg, method);

        this.emit(Opcode.EXTCALL, [dest_reg]);
        return this;
    }

    public callContract(contractName: string, method: string, args: any[]) {
        this.insertMethodArgs(args);

        let temp_reg = 0;
        this.emitLoad(temp_reg, method);
        this.emitPush(temp_reg);

        let src_reg = 0;
        let dest_reg = 1;
        this.emitLoad(src_reg, contractName);
        this.emit(Opcode.CTX, [src_reg, dest_reg]);

        this.emit(Opcode.SWITCH, [dest_reg]);
        return this;
    }

    //#region ScriptBuilderExtensions

    public allowGas(
        from: string,
        to: string,
        gasPrice: number,
        gasLimit: number
    ): this {
        
        if (!to) {
            to = this.nullAddress();
        }

        return this.callContract(Nexus.GasContractName, "AllowGas", [
            from,
            to,
            gasPrice,
            gasLimit,
        ]);
    }

    public spendGas(address: string): this {
        return this.callContract(Nexus.GasContractName, "SpendGas", [address]);
    }

    async callRPC<T>(methodName: string, params: any[]): Promise<T> {
        return ("bla" as unknown) as T;
    }

    async getAddressTransactionCount(
        address: string,
        chainInput: string
    ): Promise<number> {
        let params = [address, chainInput];
        return await this.callRPC<number>("getAddressTransactionCount", params);
    }

    //#endregion

    public emitVarString(text: string): this {
        let bytes = this.rawString(text);
        this.emitVarInt(bytes.length);
        this.emitBytes(bytes);
        return this;
    }

    public emitVarInt(value: number): this {
        if (value < 0) throw "negative value invalid";

        if (value < 0xfd) {
            this.appendByte(value);
        } else if (value <= 0xffff) {
            let B = (value & 0x0000ff00) >> 8;
            let A = value & 0x000000ff;

            // TODO check if the endianess is correct, might have to reverse order of appends
            this.appendByte(0xfd);
            this.appendByte(A);
            this.appendByte(B);
        } else if (value <= 0xffffffff) {
            let C = (value & 0x00ff0000) >> 16;
            let B = (value & 0x0000ff00) >> 8;
            let A = value & 0x000000ff;

            // TODO check if the endianess is correct, might have to reverse order of appends
            this.appendByte(0xfe);
            this.appendByte(A);
            this.appendByte(B);
            this.appendByte(C);
        } else {
            let D = (value & 0xff000000) >> 24;
            let C = (value & 0x00ff0000) >> 16;
            let B = (value & 0x0000ff00) >> 8;
            let A = value & 0x000000ff;

            // TODO check if the endianess is correct, might have to reverse order of appends
            this.appendByte(0xff);
            this.appendByte(A);
            this.appendByte(B);
            this.appendByte(C);
            this.appendByte(D);
        }
        return this;
    }

    emitBytes(bytes: byte[]): this {
        for (let i = 0; i < bytes.length; i++) this.appendByte(bytes[i]);

        // writer.Write(bytes);
        return this;
    }

    byteToHex(byte: number) {
        let result = byte.toString(16).toUpperCase();
        if (result.length == 1) {
            result = "0" + result;
        }
        return result;
    }

    appendByte(byte: number) {
        this.str += this.byteToHex(byte);
    }

    appendBytes(values) {
        for (let i = 0; i < values.length; i++) {
            this.appendByte(values[i]);
        }
    }

    appendVarInt(value) {
        if (value < 0)
            throw "negative value invalid";
        if (value < 0xFD) {
            this.appendByte(value);
        } else if (value <= 0xFFFF) {
            let B = (value & 0x0000ff00) >> 8;
            let A = (value & 0x000000ff);
            this.appendByte(0xFD);
            this.appendByte(A);
            this.appendByte(B);
        } else if (value <= 0xFFFFFFFF) {
            let C = (value & 0x00ff0000) >> 16;
            let B = (value & 0x0000ff00) >> 8;
            let A = (value & 0x000000ff);
            this.appendByte(0xFE);
            this.appendByte(A);
            this.appendByte(B);
            this.appendByte(C);
        } else {
            let D = (value & 0xff000000) >> 24;
            let C = (value & 0x00ff0000) >> 16;
            let B = (value & 0x0000ff00) >> 8;
            let A = (value & 0x000000ff);
            this.appendByte(0xFF);
            this.appendByte(A);
            this.appendByte(B);
            this.appendByte(C);
            this.appendByte(D);
        }
    }

    appendMethodArgs(args) {
        let temp_reg = 0;
        for (let i = args.length - 1; i >= 0; i--) {
            let arg = args[i];
            this.emitLoad(temp_reg, arg);
            this.emitPush(temp_reg);
        }
    }

    appendUshort(ushort: number) {
        this.str +=
            this.byteToHex(ushort & 0xff) + this.byteToHex((ushort >> 8) & 0xff);
    }

    appendHexEncoded(bytes: string): this {
        this.str += bytes;
        return this;
    }

}

class Decoder {

    str: string;

    constructor(str: string) {
        this.str = str;
    }

    readCharPair() {
        var res = this.str.substr(0, 2);
        this.str = this.str.slice(2);
        return res;
    }

    readByte() {
        return parseInt(this.readCharPair(), 16);
    }

    read(numBytes) {
        var res = this.str.substr(0, numBytes * 2);
        this.str = this.str.slice(numBytes * 2);
        return res;
    }

    readString() {
        var len = this.readVarInt();
        return this.readStringBytes(len);
    }

    readStringBytes(numBytes) {
        var res = '';
        for (var i = 0; i < numBytes; ++i) {
            res += String.fromCharCode(this.readByte());
        }
        return res;
    }

    readVarInt() {
        var len = this.readByte();
        var res = 0;
        if (len === 0xfd) {
            [...this.read(2).match(/.{1,2}/g)]
                .reverse()
                .forEach((c) => (res = res * 256 + parseInt(c, 16)));
            return res;
        } else if (len === 0xfe) {
            [...this.read(4).match(/.{1,2}/g)]
                .reverse()
                .forEach((c) => (res = res * 256 + parseInt(c, 16)));
            return res;
        } else if (len === 0xff) {
            [...this.read(8).match(/.{1,2}/g)]
                .reverse()
                .forEach((c) => (res = res * 256 + parseInt(c, 16)));
            return res;
        }
        return len;
    }

    readBigInt() {
        // TO DO: implement negative numbers
        var len = this.readVarInt();
        var res = 0;
        var stringBytes = this.read(len);
        [...stringBytes.match(/.{1,2}/g)].reverse().forEach((c) => (res = res * 256 + parseInt(c, 16)));
        return res;
    }

    readBigIntAccurate() {
        var len = this.readVarInt();
        var res = bigInt();
        var stringBytes = this.read(len);
        [...stringBytes.match(/.{1,2}/g)].reverse().forEach((c) => {
            res = res.times(256).plus(parseInt(c, 16));
        });
        return res.toString();
    }
}

class EasyDecode {
    decodeVMObject(str: string) {
        var dec = new Decoder(str);
        const type = dec.readByte();
        switch (type) {
            case VMType.String:
                return dec.readString();
            case VMType.Number:
                return dec.readBigIntAccurate();
            default:
                return 'unsupported type ' + type;
        }
    }

    getTokenEventData(str: string) {
        var dec = new Decoder(str);

        return {
            symbol: dec.readString(),
            value: dec.readBigInt(),
            chainName: dec.readString(),
        };
    }

    getChainValueEventData(str: string) {
        var dec = new Decoder(str);
        return {
            name: dec.readString,
            value: dec.readBigInt(),
        };
    }

    getTransactionSettleEventData(str: string) {
        var dec = new Decoder(str);
        return {
            hash: dec.read(dec.readByte()),
            platform: dec.readString(),
            chain: dec.readString(),
        };
        // public readonly Hash Hash;
    }

    getGasEventData(str: string) {
        var dec = new Decoder(str);
        return {
            address: dec.read(dec.readByte()),
            price: dec.readBigInt(),
            amount: dec.readBigInt(),
        };
    }

    getMarketEventData(str: string) {
        var dec = new Decoder(str);
        return {
            baseSymbol: dec.readString(),
            quoteSymbol: dec.readString(),
            id: dec.readBigIntAccurate(),
            amount: dec.readBigInt(),
        };
    }
};

class PhantasmaRPC {

    url: string;

    constructor(RPC_URL: string) {
        this.url = RPC_URL;
    };

    async getAccount(WalletAddress: string) {
        //Perameters = ['WalletAddress']
        let perams = [WalletAddress];

        //Send Post
        return await this.#sendPost('getAccount', perams);
    };

    async lookUpName(WalletAddress: string) {
        //Perameters = ['WalletAddress']
        let perams = [WalletAddress];

        //Send Post
        return await this.#sendPost('lookUpName', perams);
    };

    async getBlockHeight(ChainAddress: string) {
        //Perameters = ['Address or Name of Chain']
        let perams = [ChainAddress];

        //Send Post
        return await this.#sendPost('getBlockHeight', perams);
    };

    async getBlockTransactionCountByHash(BlockHash: string) {
        //Perameters = ['Hash of block']
        let perams = [BlockHash];

        //Send Post
        return await this.#sendPost('getBlockTransactionCountByHash', perams);
    };

    async getBlockByHash(BlockHash: string) {
        //Perameters = ['Hash of block']
        let perams = [BlockHash];

        //Send Post
        return await this.#sendPost('getBlockByHash', perams);
    };

    async getRawBlockByHash(BlockHash: string) {
        //Perameters = ['Hash of block']
        let perams = [BlockHash];

        //Send Post
        return await this.#sendPost('getRawBlockByHash', perams);
    };

    async getBlockByHeight(ChainAddress: string, BlockHeight: number) {
        //Perameters = ['Address or Name of Chain', 'Height of block']
        let perams = [ChainAddress, BlockHeight];

        //Send Post
        return await this.#sendPost('getBlockByHeight', perams);
    };

    async getRawBlockByHeight(ChainAddress: string, BlockHeight: number) {
        //Perameters = ['Address or Name of Chain', 'Height of block']
        let perams = [ChainAddress, BlockHeight];

        //Send Post
        return await this.#sendPost('getRawBlockByHeight', perams);
    };

    async getTransactionByBlockHashAndIndex(BlockHash: string, TransactionIndex: number) {
        //Perameters = ['Hash of block', 'Index of Transaction']
        let perams = [BlockHash, TransactionIndex];

        //Send Post
        return await this.#sendPost('getTransactionByBlockHashAndIndex', perams);
    };

    async getAddressTransactions(WalletAddress: string, PageIndex: number, PageItemMax: number) {
        //Perameters = ['Wallet Address', 'Index of page to return', 'Number of items to return per page']
        let perams = [WalletAddress, PageIndex, PageItemMax];

        //Send Post
        return await this.#sendPost('getTransactionByBlockHashAndIndex', perams);
    };

    async getAddressTransactionCount(WalletAddress: string, ChainAddress: string) {
        //Perameters = ['Wallet Address', 'Name or address of chain, optional']
        let perams = [WalletAddress, ChainAddress];

        //Send Post
        return await this.#sendPost('getAddressTransactionCount', perams);
    };

    async sendRawTransaction(SerializedScript: string) {
        //Perameters = ['Serialized transaction bytes, in hexadecimal format']
        let perams = [SerializedScript];

        //Send Post
        return await this.#sendPost('sendRawTransaction', perams);
    };

    async invokeRawScript(ChainAddress: string, SerializedScript: string) {
        //Perameters = ['Address or name of chain', 'Serialized script bytes, in hexadecimal format']
        let perams = [ChainAddress, SerializedScript];

        //Send Post
        return await this.#sendPost('invokeRawScript', perams);
    };

    async getTransaction(TransactionHash: string) {
        //Perameters = ['Hash of transaction']
        let perams = [TransactionHash];

        //Send Post
        return await this.#sendPost('getTransaction', perams);
    };

    async cancelTransaction(TransactionHash: string) {
        //Perameters = ['Hash of transaction']
        let perams = [TransactionHash];

        //Send Post
        return await this.#sendPost('cancelTransaction', perams);
    };

    async getChains() {
        //Perameters = []
        let perams = [];

        //Send Post
        return await this.#sendPost('getChains', perams);
    };

    async getTokens() {
        //Perameters = []
        let perams = [];

        //Send Post
        return await this.#sendPost('getTokens', perams);
    };

    async getToken(TokenSymbol: string) {
        //Perameters = ['Token symbol']
        let perams = [TokenSymbol];

        //Send Post
        return await this.#sendPost('getToken', perams);
    };

    async getTokenData(TokenSymbol: string, TokenID: string) {
        //Perameters = ['Token symbol', 'ID of token']
        let perams = [TokenSymbol, TokenID];

        //Send Post
        return await this.#sendPost('getTokenData', perams);
    };

    async getApps() {
        //Perameters = []
        let perams = [];

        //Send Post
        return await this.#sendPost('getApps', perams);
    };

    async getTokenTransfers(TokenSymbol: string, PageIndex: number, PageItemMax: number) {
        //Perameters = ['Token symbol', 'Index of page to return', 'Number of items to return per page']
        let perams = [TokenSymbol, PageIndex, PageItemMax];

        //Send Post
        return await this.#sendPost('getTokenTransfers', perams);
    };

    async getTokenTransferCount(TokenSymbol: string) {
        //Perameters = ['Token symbol']
        let perams = [TokenSymbol];

        //Send Post
        return await this.#sendPost('getTokenTransferCount', perams);
    };

    async getTokenBalance(WalletAddress: string, TokenSymbol: string, ChainAddress: string) {
        //Perameters = ['Wallet Address', 'Token symbol', Address or Name of Chain']
        let perams = [WalletAddress, TokenSymbol, ChainAddress];

        //Send Post
        return await this.#sendPost('getTokenBalance', perams);
    };

    async getAuctions(ChainAddress: string, TokenSymbol: string, PageIndex: number, PageItemMax: number) {
        //Perameters = ['Chain address or name where the market is located', 'Token symbol', 'Index of page to return', 'Number of items to return per page']
        let perams = [ChainAddress, TokenSymbol, PageIndex, PageItemMax];

        //Send Post
        return await this.#sendPost('getAuctions', perams);
    };

    async getAuction(ChainAddress: string, TokenSymbol: string, TokenID: string) {
        //Perameters = ['Chain address or name where the market is located', 'Token symbol', 'Token ID']
        let perams = [ChainAddress, TokenSymbol, TokenID];

        //Send Post
        return await this.#sendPost('getAuction', perams);
    };

    async getArchive(ArchiveHash: string) {
        //Perameters = ['Archive hash']
        let perams = [ArchiveHash];

        //Send Post
        return await this.#sendPost('getArchive', perams);
    };

    //Sends the RPC Post Request
    async #sendPost(methodName: string, perams: any[]) {

        let sendData = {
            jsonrpc: '2.0',
            method: methodName,
            params: perams,
            id: 1
        };

        return axios({
            method: 'post',
            url: this.url,
            data: sendData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })
            .then(function (response: any) {
                if (response.data.result == undefined) {
                    return response.data;
                }
                return response.data.result;
            })
            .catch(function (error) {
                return error;
            });
    };

};

class PhantasmaConnect {

    //Initial Declarations
    constructorConfig = {
        dappName: 'Default dApp',
        url: 'http://207.148.17.86:7077/rpc'
    }
    RPC: PhantasmaRPC;
    Link: PhantasmaLink;
    Decode: EasyDecode;

    //Basic Constructor
    constructor(dAppName: string, RPC_URL: string) {
        this.constructorConfig.dappName = dAppName;
        this.constructorConfig.url = RPC_URL;

        //Initiate Classes
        this.RPC = new PhantasmaRPC(this.constructorConfig.url);
        this.Link = new PhantasmaLink(this.constructorConfig.dappName);
        this.Decode = new EasyDecode;
    }



    //Phantasma Link Variables
    phantasmaLinkConfig = {
        requiredVersion: 2,
        platform: 'phantasma',
        providerHint: ''
    }


    //Checks for Ecto Wallet then Enables it Via providerHint
    async checkForEcto() {
        if (!!window.PhantasmaLinkSocket == true) {
            this.phantasmaLinkConfig.providerHint = 'ecto';
        };
    };

    //Logs in to Phantasma (If Ecto installed, Toggles Custom Ecto Connect Socket with prividerHint)
    async walletConnect() {

        //Waits for Ecto Check to finish then continues
        await this.checkForEcto();

        //Sends Login Request to Wallet
        this.Link.login(function (success) {

            //Console Logging for Debugging Purposes
            if (success) {
                console.log('Connected to account ' + this.account.address + ' via ' + this.wallet);
            } else {
                console.log('Connection Failed');
            };

        }, this.phantasmaLinkConfig.requiredVersion, this.phantasmaLinkConfig.platform, this.phantasmaLinkConfig.providerHint);
    };

    //Script Creation Variables
    scriptConfig = {
        contractName: '',
        methodName: '',
        inputArguments: [],
        compiledScript: '',
    };


    //Compiles the Script Config
    async #compileScript(type: string) {

        //SriptBuilding Tools
        const sb = new ScriptBuilder();

        switch (type) {
            case 'gasProfile':

                //Gas Stuff for transaction fees
                const minimumFee = '100000';
                const gasLimit = '900';

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
    };

    async generateScript(_contractName: string, _methodName: string, _inputArguments: [], type: string) {

        this.scriptConfig = {
            contractName: _contractName,
            methodName: _methodName,
            inputArguments: _inputArguments,
            compiledScript: '',
        };

        await this.#compileScript(type);

        return this.scriptConfig.compiledScript;

    }

    async signTransaction(_inputScript: any) {

        //Send the Transaction (type = 'mainnet' or 'simnet')
        this.Link.sendTransaction('main', _inputScript, null, (res) => {

            //Logging for Debuging Purposes
            if (res.success) {
                console.log('success: ' + res);
            } else {
                console.log('failed: ' + res);
            }
        });

    };

    async getWalletAddy(){
        return await this.Link.account.address;
    };


};