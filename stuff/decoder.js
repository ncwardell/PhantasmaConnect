//import bigInt from 'big-integer';

const VMType = {
  None: 0,
  Struct: 1,
  Bytes: 2,
  Number: 3,
  String: 4,
  Timestamp: 5,
  Bool: 6,
  Enum: 7,
  Object: 8,
};

export class Decoder {
  constructor(str) {
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

export function decodeVMObject(str) {
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

function getTokenEventData(str) {
  var dec = new Decoder(str);

  return {
    symbol: dec.readString(),
    value: dec.readBigInt(),
    chainName: dec.readString(),
  };
}

function getChainValueEventData(str) {
  var dec = new Decoder(str);
  return {
    name: dec.readString,
    value: dec.readBigInt(),
  };
}

function getTransactionSettleEventData(str) {
  var dec = new Decoder(str);
  return {
    hash: dec.read(dec.readByte()),
    platform: dec.readString(),
    chain: dec.readString(),
  };
  // public readonly Hash Hash;
}

function getGasEventData(str) {
  var dec = new Decoder(str);
  return {
    address: dec.read(dec.readByte()),
    price: dec.readBigInt(),
    amount: dec.readBigInt(),
  };
}

function getMarketEventData(str) {
  var dec = new Decoder(str);
  return {
    baseSymbol: dec.readString(),
    quoteSymbol: dec.readString(),
    id: dec.readBigIntAccurate(),
    amount: dec.readBigInt(),
  };
}
