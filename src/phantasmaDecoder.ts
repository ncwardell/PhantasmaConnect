var VMType: { String?: any; Number?: any; };
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


class DecoderStuff {

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

class Decoder{
   
    decodeVMObject(str: string) {
        var dec = new DecoderStuff(str);
        const type = dec.readByte();
        switch (type) {
            case VMType.String:
                return dec.readString();
            case VMType.Number:
                return dec.readBigIntAccurate();
            default:
                return 'unsupported type ' + type + ' -> ' + dec;
        }
    }

    getTokenEventData(str: string) {
        var dec = new DecoderStuff(str);

        return {
            symbol: dec.readString(),
            value: dec.readBigInt(),
            chainName: dec.readString(),
        };
    }

    getChainValueEventData(str: string) {
        var dec = new DecoderStuff(str);
        return {
            name: dec.readString,
            value: dec.readBigInt(),
        };
    }

    getTransactionSettleEventData(str: string) {
        var dec = new DecoderStuff(str);
        return {
            hash: dec.read(dec.readByte()),
            platform: dec.readString(),
            chain: dec.readString(),
        };
        // public readonly Hash Hash;
    }

    getGasEventData(str: string) {
        var dec = new DecoderStuff(str);
        return {
            address: dec.read(dec.readByte()),
            price: dec.readBigInt(),
            amount: dec.readBigInt(),
        };
    }

    getMarketEventData(str: string) {
        var dec = new DecoderStuff(str);
        return {
            baseSymbol: dec.readString(),
            quoteSymbol: dec.readString(),
            id: dec.readBigIntAccurate(),
            amount: dec.readBigInt(),
        };
    }
}