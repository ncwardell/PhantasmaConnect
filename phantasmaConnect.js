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
var _PhantasmaConnect_instances, _PhantasmaConnect_compileScript;
var PhantasmaConnect = /** @class */ (function () {
    //Basic Constructor
    function PhantasmaConnect(dAppName, RPC_URL) {
        _PhantasmaConnect_instances.add(this);
        //Initial Declarations
        this.constructorConfig = {
            dappName: 'Default dApp',
            url: '207.148.17.86:7077/rpc'
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
            compiledScript: '',
        };
        this.constructorConfig.dappName = dAppName;
        this.constructorConfig.url = RPC_URL;
        //Initiate Classes
        this.RPC = new PhantasmaRPC(this.constructorConfig.url);
        this.Link = new PhantasmaLink(this.constructorConfig.dappName);
        this.Decode = new Decoder();
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
                            compiledScript: '',
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
                this.Link.signTx('mainnet', _inputScript, null, function (res) {
                    console.log(res);
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
var PhantasmaLink = /** @class */ (function () {
    function PhantasmaLink(dappID) {
        this.onMessage = function (msg) {
            console.log(msg);
        };
        console.log('%cPhantasmaLink created', 'color:green');
        this.host = 'localhost:7090';
        this.dapp = dappID;
        this.onLogin = function (succ) {
            // do nothing
        };
    }
    PhantasmaLink.prototype.login = function (onLoginCallback, onErrorCallback, providerHint) {
        this.providerHint = providerHint;
        this.onLogin = onLoginCallback;
        this.onError = onErrorCallback;
        this.createSocket();
    };
    PhantasmaLink.prototype.invokeScript = function (script) {
        // this.onMessage('Relaying transaction to wallet...')
        var that = this;
        this.sendLinkRequest('invokeScript/' + script, function (result) {
            if (result.success) {
                that.onMessage('Transaction successful, hash: ' + result.hash.substr(0, 15) + '...');
            }
        });
    };
    PhantasmaLink.prototype.signTx = function (nexus, script, payload, callback, onErrorCallback) {
        if (script.length >= 65536) {
            this.onMessage('Error: script is too big!');
            if (onErrorCallback)
                onErrorCallback();
            return;
        }
        if (payload == null) {
            payload = '';
        }
        else if (typeof payload === 'string') {
            // NOTE: here we convert a string into raw bytes
            var sb = new ScriptBuilder();
            var bytes = sb.rawString(payload);
            sb.appendBytes(bytes);
            // then we convert the bytes into hex, because thats what PhantasmaLink protocol expects
            payload = sb.endScript();
        }
        else {
            this.onMessage('Error: invalid payload');
            if (onErrorCallback)
                onErrorCallback();
            return;
        }
        this.onError = onErrorCallback;
        var that = this;
        if (script.script) {
            script = script.script;
        }
        this.sendLinkRequest('signTx/' + nexus + '/main/' + script + '/' + payload, function (result) {
            if (result.success) {
                if (result.hash.error) {
                    that.onMessage('Error: ' + result.hash.error);
                    return;
                }
                that.onMessage('Transaction successful, hash: ' + result.hash.substr(0, 15) + '...');
                if (callback) {
                    callback(result);
                }
            }
            else {
                if (onErrorCallback)
                    onErrorCallback();
            }
        });
    };
    PhantasmaLink.prototype.signData = function (data, callback, onErrorCallback) {
        if (data.length >= 65536) {
            this.onMessage('Error: data is too big!');
            if (onErrorCallback)
                onErrorCallback();
            return;
        }
        var that = this;
        if (data.data) {
            data = data.data;
        }
        this.sendLinkRequest('signData/' + data + '/1', function (result) {
            if (result.success) {
                //   alertbox.show('Data successfully signed')
                that.onMessage('Data successfully signed');
                if (callback) {
                    callback(result);
                }
            }
            else {
                if (onErrorCallback)
                    onErrorCallback();
            }
        });
    };
    PhantasmaLink.prototype.createSocket = function () {
        var path = 'ws://' + this.host + '/phantasma';
        console.log('Phantasma Link connecting...');
        this.onMessage('Phantasma Link connecting');
        if (this.socket)
            this.socket.close();
        this.socket = window.PhantasmaLinkSocket && this.providerHint !== 'poltergeist'
            ? new PhantasmaLinkSocket()
            : new WebSocket(path);
        this.requestCallback = null;
        this.token = null;
        this.account = null;
        this.requestID = 0;
        var that = this;
        this.socket.onopen = function (e) {
            // that.onMessage('Connection established, authorizing dapp in wallet...')
            that.sendLinkRequest('authorize/' + that.dapp, function (result) {
                if (result.success) {
                    that.token = result.token;
                    that.wallet = result.wallet;
                    // that.onMessage('Authorized, obtaining account info...')
                    that.sendLinkRequest('getAccount', function (result) {
                        if (result.success) {
                            that.account = result;
                            // that.onMessage(
                            //     'Ready, opening ' +
                            //       that.dapp +
                            //       ' dapp connected with ' +
                            //       that.account.name +
                            //       ' on ' +
                            //       that.wallet +
                            //       '...'
                            //   )
                        }
                        else {
                            that.onError('Error: could not obtain account info... Make sure you have an account currently open in ' +
                                that.wallet +
                                '...');
                            that.disconnect('Unable to optain Account Info');
                        }
                        that.onLogin(result.success);
                        that.onLogin = null;
                    });
                }
                else {
                    that.onError('Error: authorization failed...');
                    that.disconnect('Auth Failure');
                }
            });
        };
        this.socket.onmessage = function (event) {
            var obj = JSON.parse(event.data);
            console.log("%c" + event.data, 'color:blue');
            if (obj.message == 'Wallet is Closed') {
                that.onError('Error: could not obtain account info... Make sure you have an account currently open in ' + that.wallet);
                that.disconnect(true);
            }
            else if (obj.message == 'not logged in') {
                that.onError('Error: could not obtain account info... Make sure you have an account currently open in in your wallet');
                that.disconnect(true);
            }
            else if (obj.message == 'A previouus request is still pending' ||
                obj.message == 'A previous request is still pending') {
                that.onError('Error: you have a pending action in your wallet');
            }
            else if (obj.message == 'user rejected') {
                that.onError('Error: transaction cancelled by user in ' + that.wallet);
            }
            else if (obj.message && (obj.message).startsWith('nexus mismatch')) {
                that.onError('Error: ' + obj.message);
            }
            else {
                if (obj.wallet) {
                    // that.onMessage(
                    //   obj.dapp +
                    //     ' dapp is now connected with ' +
                    //     obj.wallet +
                    //     '...'
                    // )
                }
                else if (obj.name) {
                    // that.onMessage(
                    //   'Account info obtained, connected with ' +
                    //     obj.name +
                    //     '...'
                    // )
                }
                else if (obj.hash) {
                    // that.onMessage('Transaction accepted on wallet...')
                }
                else {
                    // that.onMessage(
                    //   'Got Phantasma Link answer: ' + obj.message
                    // )
                }
                var temp = that.requestCallback;
                if (temp == null) {
                    that.onError('Error: something bad happened');
                    return;
                }
                that.requestCallback = null;
                temp(obj);
            }
        };
        this.socket.onclose = function (event) {
            if (!event.wasClean) {
                if (that.onLogin)
                    that.onError('Error: connection terminated...');
                that.onLogin = null;
            }
        };
        this.socket.onerror = function (error) {
            if (error.message !== undefined) {
                that.onMessage('Error: ' + error.message);
            }
        };
    };
    PhantasmaLink.prototype.retry = function () {
        this.createSocket();
    };
    Object.defineProperty(PhantasmaLink.prototype, "dappID", {
        get: function () {
            return this.dapp;
        },
        enumerable: false,
        configurable: true
    });
    PhantasmaLink.prototype.sendLinkRequest = function (request, callback) {
        // this.onMessage('Sending Phantasma Link request: ' + request)
        if (this.token != null) {
            request = request + '/' + this.dapp + '/' + this.token;
        }
        this.requestID++;
        request = this.requestID + ',' + request;
        this.requestCallback = callback;
        this.socket.send(request);
    };
    PhantasmaLink.prototype.disconnect = function (triggered) {
        this.onMessage('Disconnecting Phantasma Link');
        this.socket.close();
    };
    return PhantasmaLink;
}());
function PavillionLink() {
    var _this = this;
    this._onMessage = function (e) {
        if (!e.data || !e.data.data) {
            return;
        }
        // console.log(e)
        if (e.data.type === 'pavillionLink/login') {
            _this.address = e.data.data.address;
            _this.balances = e.data.data.balances;
            if (_this.onLogin) {
                _this.onLogin(e.data.data);
                _this.onLogin = null;
            }
        }
        else if (e.data.type === 'pavillionLink/signAndSubmit') {
            if (_this.onSignAndSubmit) {
                _this.onSignAndSubmit(e.data.data);
                _this.onSignAndSubmit = null;
            }
        }
    };
    window.addEventListener('message', this._onMessage, {});
    this.login = function (callback) {
        this.onLogin = callback;
        window.parent.postMessage({ type: 'pavillionLink', data: { command: 'login' } }, '*');
    };
    this.sendTransaction = function (nexus, chain, script, payload, callback) {
        if (script.length >= 8192) {
            alert('script too big, sorry :(');
            return; // TODO callback with error
        }
        if (payload == null) {
            payload = '';
        }
        else if (typeof payload === 'string') {
            // NOTE: here we convert a string into raw bytes
            var sb = new ScriptBuilder();
            var bytes = sb.rawString(payload);
            sb.appendBytes(bytes);
            // then we convert the bytes into hex, because thats what PhantasmaLink protocol expects
            payload = sb.script;
        }
        else {
            alert('invalid payload, sorry :(');
            return; // TODO callback with error
        }
        _this.onSignAndSubmit = callback;
        window.parent.postMessage({
            type: 'pavillionLink',
            data: {
                command: 'signAndSubmit',
                nexus: nexus,
                chain: chain,
                script: script,
                payload: payload
            }
        }, '*');
    };
}
var PhantasmaRPC = /** @class */ (function () {
    function PhantasmaRPC(RPC_URL) {
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
                        return [4 /*yield*/, this.sendPost('getAccount', perams)];
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
                        return [4 /*yield*/, this.sendPost('lookUpName', perams)];
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
                        return [4 /*yield*/, this.sendPost('getBlockHeight', perams)];
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
                        return [4 /*yield*/, this.sendPost('getBlockTransactionCountByHash', perams)];
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
                        return [4 /*yield*/, this.sendPost('getBlockByHash', perams)];
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
                        return [4 /*yield*/, this.sendPost('getRawBlockByHash', perams)];
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
                        return [4 /*yield*/, this.sendPost('getBlockByHeight', perams)];
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
                        return [4 /*yield*/, this.sendPost('getRawBlockByHeight', perams)];
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
                        return [4 /*yield*/, this.sendPost('getTransactionByBlockHashAndIndex', perams)];
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
                        return [4 /*yield*/, this.sendPost('getTransactionByBlockHashAndIndex', perams)];
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
                        return [4 /*yield*/, this.sendPost('getAddressTransactionCount', perams)];
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
                        return [4 /*yield*/, this.sendPost('sendRawTransaction', perams)];
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
                        return [4 /*yield*/, this.sendPost('invokeRawScript', perams)];
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
                        return [4 /*yield*/, this.sendPost('getTransaction', perams)];
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
                        return [4 /*yield*/, this.sendPost('cancelTransaction', perams)];
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
                        return [4 /*yield*/, this.sendPost('getChains', perams)];
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
                        return [4 /*yield*/, this.sendPost('getTokens', perams)];
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
                        return [4 /*yield*/, this.sendPost('getToken', perams)];
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
                        return [4 /*yield*/, this.sendPost('getTokenData', perams)];
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
                        return [4 /*yield*/, this.sendPost('getApps', perams)];
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
                        return [4 /*yield*/, this.sendPost('getTokenTransfers', perams)];
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
                        return [4 /*yield*/, this.sendPost('getTokenTransferCount', perams)];
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
                        return [4 /*yield*/, this.sendPost('getTokenBalance', perams)];
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
                        return [4 /*yield*/, this.sendPost('getAuctions', perams)];
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
                        return [4 /*yield*/, this.sendPost('getAuction', perams)];
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
                        return [4 /*yield*/, this.sendPost('getArchive', perams)];
                    case 1: 
                    //Send Post
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    //Sends the RPC Post Request
    PhantasmaRPC.prototype.sendPost = function (methodName, perams) {
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
                    })
                        .catch(function (error) {
                        return error;
                    })];
            });
        });
    };
    ;
    return PhantasmaRPC;
}());
;
var ScriptBuilder = /** @class */ (function () {
    function ScriptBuilder() {
        this.script = '';
        this.clearOptimizations();
    }
    ScriptBuilder.prototype.Opcode_NOP = function () { return 0; };
    // register
    ScriptBuilder.prototype.Opcode_MOVE = function () { return 1; };
    ScriptBuilder.prototype.Opcode_COPY = function () { return 2; };
    ScriptBuilder.prototype.Opcode_PUSH = function () { return 3; };
    ScriptBuilder.prototype.Opcode_POP = function () { return 4; };
    ScriptBuilder.prototype.Opcode_SWAP = function () { return 5; };
    // flow
    ScriptBuilder.prototype.Opcode_CALL = function () { return 6; };
    ScriptBuilder.prototype.Opcode_EXTCALL = function () { return 7; };
    ScriptBuilder.prototype.Opcode_JMP = function () { return 8; };
    ScriptBuilder.prototype.Opcode_JMPIF = function () { return 9; };
    ScriptBuilder.prototype.Opcode_JMPNOT = function () { return 10; };
    ScriptBuilder.prototype.Opcode_RET = function () { return 11; };
    ScriptBuilder.prototype.Opcode_THROW = function () { return 12; };
    // data
    ScriptBuilder.prototype.Opcode_LOAD = function () { return 13; };
    ScriptBuilder.prototype.Opcode_CAST = function () { return 14; };
    ScriptBuilder.prototype.Opcode_CAT = function () { return 15; };
    ScriptBuilder.prototype.Opcode_SUBSTR = function () { return 16; };
    ScriptBuilder.prototype.Opcode_LEFT = function () { return 17; };
    ScriptBuilder.prototype.Opcode_RIGHT = function () { return 18; };
    ScriptBuilder.prototype.Opcode_SIZE = function () { return 19; };
    ScriptBuilder.prototype.Opcode_COUNT = function () { return 20; };
    ScriptBuilder.prototype.Opcode_NOT = function () { return 21; };
    // logical
    ScriptBuilder.prototype.Opcode_AND = function () { return 22; };
    ScriptBuilder.prototype.Opcode_OR = function () { return 23; };
    ScriptBuilder.prototype.Opcode_XOR = function () { return 24; };
    ScriptBuilder.prototype.Opcode_EQUAL = function () { return 25; };
    ScriptBuilder.prototype.Opcode_LT = function () { return 26; };
    ScriptBuilder.prototype.Opcode_GT = function () { return 27; };
    ScriptBuilder.prototype.Opcode_LTE = function () { return 28; };
    ScriptBuilder.prototype.Opcode_GTE = function () { return 29; };
    // numeric
    ScriptBuilder.prototype.Opcode_INC = function () { return 30; };
    ScriptBuilder.prototype.Opcode_DEC = function () { return 31; };
    ScriptBuilder.prototype.Opcode_SIGN = function () { return 32; };
    ScriptBuilder.prototype.Opcode_NEGATE = function () { return 33; };
    ScriptBuilder.prototype.Opcode_ABS = function () { return 34; };
    ScriptBuilder.prototype.Opcode_ADD = function () { return 35; };
    ScriptBuilder.prototype.Opcode_SUB = function () { return 36; };
    ScriptBuilder.prototype.Opcode_MUL = function () { return 37; };
    ScriptBuilder.prototype.Opcode_DIV = function () { return 38; };
    ScriptBuilder.prototype.Opcode_MOD = function () { return 39; };
    ScriptBuilder.prototype.Opcode_SHL = function () { return 40; };
    ScriptBuilder.prototype.Opcode_SHR = function () { return 41; };
    ScriptBuilder.prototype.Opcode_MIN = function () { return 42; };
    ScriptBuilder.prototype.Opcode_MAX = function () { return 43; };
    // context
    ScriptBuilder.prototype.Opcode_THIS = function () { return 44; };
    ScriptBuilder.prototype.Opcode_CTX = function () { return 45; };
    ScriptBuilder.prototype.Opcode_SWITCH = function () { return 46; };
    // array
    ScriptBuilder.prototype.Opcode_PUT = function () { return 47; };
    ScriptBuilder.prototype.Opcode_GET = function () { return 48; };
    ScriptBuilder.prototype.VMType_None = function () { return 0; };
    ScriptBuilder.prototype.VMType_Struct = function () { return 1; };
    ScriptBuilder.prototype.VMType_Bytes = function () { return 2; };
    ScriptBuilder.prototype.VMType_Number = function () { return 3; };
    ScriptBuilder.prototype.VMType_String = function () { return 4; };
    ScriptBuilder.prototype.VMType_Timestamp = function () { return 5; };
    ScriptBuilder.prototype.VMType_Bool = function () { return 6; };
    ScriptBuilder.prototype.VMType_Enum = function () { return 7; };
    ScriptBuilder.prototype.VMType_Object = function () { return 8; };
    // just quick dirty method to convert number to hex wih 2 digits, rewrite this later if there's a cleaner way
    ScriptBuilder.prototype.raw = function (value) {
        var result = value.toString(16);
        if (result.length == 1) {
            result = '0' + result;
        }
        return result;
    };
    ScriptBuilder.prototype.rawString = function (value) {
        var data = [];
        for (var i = 0; i < value.length; i++) {
            data.push(value.charCodeAt(i));
        }
        return data;
    };
    ScriptBuilder.prototype.rawStringUtf8 = function (str) {
        var out = [], p = 0;
        for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            if (c < 128) {
                out[p++] = c;
            }
            else if (c < 2048) {
                out[p++] = (c >> 6) | 192;
                out[p++] = (c & 63) | 128;
            }
            else if ((c & 0xfc00) == 0xd800 &&
                i + 1 < str.length &&
                (str.charCodeAt(i + 1) & 0xfc00) == 0xdc00) {
                // Surrogate Pair
                c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
                out[p++] = (c >> 18) | 240;
                out[p++] = ((c >> 12) & 63) | 128;
                out[p++] = ((c >> 6) & 63) | 128;
                out[p++] = (c & 63) | 128;
            }
            else {
                out[p++] = (c >> 12) | 224;
                out[p++] = ((c >> 6) & 63) | 128;
                out[p++] = (c & 63) | 128;
            }
        }
        return out;
    };
    // appends a single byte to the script stream
    ScriptBuilder.prototype.appendByte = function (value) {
        this.script = this.script + this.raw(value);
    };
    ScriptBuilder.prototype.appendBytes = function (values) {
        for (var i = 0; i < values.length; i++) {
            this.appendByte(values[i]);
        }
    };
    ScriptBuilder.prototype.appendVarInt = function (value) {
        if (value < 0)
            throw 'negative value invalid';
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
    };
    ScriptBuilder.prototype.appendMethodArgs = function (args) {
        var temp_reg = 0;
        if (args) {
            for (var i = args.length - 1; i >= 0; i--) {
                var arg = args[i];
                // NOTE the C# version does call LoadIntoReg (which internally calls emitLoad). TODO Confirm if the logic is okay
                this.emitLoad(temp_reg, arg);
                this.emitPush(temp_reg);
            }
        }
    };
    ScriptBuilder.prototype.emitOpcode = function (opcode) {
        this.appendByte(opcode);
        return this;
    };
    ScriptBuilder.prototype.emitPush = function (reg) {
        this.emitOpcode(this.Opcode_PUSH());
        this.appendByte(reg);
        return this;
    };
    ScriptBuilder.prototype.emitPop = function (reg) {
        this.emitOpcode(this.Opcode_POP());
        this.appendByte(reg);
        return this;
    };
    ScriptBuilder.prototype.emitLoad = function (reg, obj) {
        if (typeof obj === 'string') {
            var bytes = this.rawStringUtf8(obj);
            this.emitLoadEx(reg, bytes, this.VMType_String());
        }
        else if (obj instanceof Date) {
            // https://stackoverflow.com/questions/9756120/how-do-i-get-a-utc-timestamp-in-javascript
            var num = obj.getTime() /* + obj.getTimezoneOffset()*60*1000*/ / 1000;
            var a = (num & 0xff000000) >> 24;
            var b = (num & 0x00ff0000) >> 16;
            var c = (num & 0x0000ff00) >> 8;
            var d = num & 0x000000ff;
            var bytes = [d, c, b, a];
            this.emitLoadEx(reg, bytes, this.VMType_Timestamp());
        }
        else if (typeof obj === 'boolean') {
            var bytes = [];
            if (obj) {
                bytes.push(1);
            }
            else {
                bytes.push(0);
            }
            this.emitLoadEx(reg, bytes, this.VMType_Bool());
        }
        else if (typeof obj === 'number') {
            var bytes = this.rawString(obj.toString());
            this.emitLoadEx(reg, bytes, this.VMType_String());
        }
        else if (typeof obj === 'object' && Array.isArray(obj)) {
            this.emitLoadEx(reg, obj, this.VMType_Bytes());
        }
        else {
            // console.log(typeof obj)
            throw 'unsupported or uniplemented type ' + typeof obj;
        }
        return this;
    };
    // bytes is byte array
    ScriptBuilder.prototype.emitLoadEx = function (reg, bytes, vmtype) {
        if (!Array.isArray(bytes)) {
            throw 'byte array expected';
        }
        if (bytes.length > 0xffff) {
            throw 'tried to load too much data';
        }
        this.emitOpcode(this.Opcode_LOAD());
        this.appendByte(reg);
        this.appendByte(vmtype);
        this.appendVarInt(bytes.length);
        this.appendBytes(bytes);
        return this;
    };
    ScriptBuilder.prototype.emitMethod = function (method, args) {
        this.appendMethodArgs(args);
        var temp_reg = 2;
        // NOTE this optimization assumes that reg 2 contains a valid method name due to this method being called multiple times
        if (this.lastMethod != method) {
            this.lastMethod = method;
            this.lastContract = null;
            this.emitLoad(temp_reg, method);
        }
        return temp_reg;
    };
    ScriptBuilder.prototype.callInterop = function (method, args) {
        var temp_reg = this.emitMethod(method, args);
        this.emitOpcode(this.Opcode_EXTCALL());
        this.appendByte(temp_reg);
        return this;
    };
    ScriptBuilder.prototype.callContract = function (contractName, method, args) {
        var temp_reg = this.emitMethod(method, args);
        this.emitPush(temp_reg);
        var src_reg = 0;
        var dest_reg = 1;
        // NOTE this optimization assumes that reg 1 contains a valid context for this contract due to this method being called multiple times
        if (this.lastContract != contractName) {
            this.lastContract = contractName;
            this.lastMethod = null;
            this.emitLoad(src_reg, contractName);
            this.emitOpcode(this.Opcode_CTX());
            this.appendByte(src_reg);
            this.appendByte(dest_reg);
        }
        this.emitOpcode(this.Opcode_SWITCH());
        this.appendByte(dest_reg);
        return this;
    };
    ScriptBuilder.prototype.endScript = function () {
        this.emitOpcode(this.Opcode_RET());
        return this.script;
    };
    ScriptBuilder.prototype.clearOptimizations = function () {
        this.lastContract = '';
        this.lastMethod = '';
    };
    ScriptBuilder.prototype.nullAddress = function () {
        return 'S1111111111111111111111111111111111';
    };
    return ScriptBuilder;
}());
var DecoderStuff = /** @class */ (function () {
    function DecoderStuff(str) {
        this.str = str;
    }
    DecoderStuff.prototype.readCharPair = function () {
        var res = this.str.substr(0, 2);
        this.str = this.str.slice(2);
        return res;
    };
    DecoderStuff.prototype.readByte = function () {
        return parseInt(this.readCharPair(), 16);
    };
    DecoderStuff.prototype.read = function (numBytes) {
        var res = this.str.substr(0, numBytes * 2);
        this.str = this.str.slice(numBytes * 2);
        return res;
    };
    DecoderStuff.prototype.readString = function () {
        var len = this.readVarInt();
        return this.readStringBytes(len);
    };
    DecoderStuff.prototype.readStringBytes = function (numBytes) {
        var res = '';
        for (var i = 0; i < numBytes; ++i) {
            res += String.fromCharCode(this.readByte());
        }
        return res;
    };
    DecoderStuff.prototype.readVarInt = function () {
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
    DecoderStuff.prototype.readBigInt = function () {
        // TO DO: implement negative numbers
        var len = this.readVarInt();
        var res = 0;
        var stringBytes = this.read(len);
        __spreadArray([], stringBytes.match(/.{1,2}/g), true).reverse().forEach(function (c) { return (res = res * 256 + parseInt(c, 16)); });
        return res;
    };
    DecoderStuff.prototype.readBigIntAccurate = function () {
        var len = this.readVarInt();
        var res = bigInt();
        var stringBytes = this.read(len);
        __spreadArray([], stringBytes.match(/.{1,2}/g), true).reverse().forEach(function (c) {
            res = res.times(256).plus(parseInt(c, 16));
        });
        return res.toString();
    };
    return DecoderStuff;
}());
var Decoder = /** @class */ (function () {
    function Decoder() {
    }
    Decoder.prototype.decodeVMObject = function (str) {
        var dec = new DecoderStuff(str);
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
    Decoder.prototype.getTokenEventData = function (str) {
        var dec = new DecoderStuff(str);
        return {
            symbol: dec.readString(),
            value: dec.readBigInt(),
            chainName: dec.readString(),
        };
    };
    Decoder.prototype.getChainValueEventData = function (str) {
        var dec = new DecoderStuff(str);
        return {
            name: dec.readString,
            value: dec.readBigInt(),
        };
    };
    Decoder.prototype.getTransactionSettleEventData = function (str) {
        var dec = new DecoderStuff(str);
        return {
            hash: dec.read(dec.readByte()),
            platform: dec.readString(),
            chain: dec.readString(),
        };
        // public readonly Hash Hash;
    };
    Decoder.prototype.getGasEventData = function (str) {
        var dec = new DecoderStuff(str);
        return {
            address: dec.read(dec.readByte()),
            price: dec.readBigInt(),
            amount: dec.readBigInt(),
        };
    };
    Decoder.prototype.getMarketEventData = function (str) {
        var dec = new DecoderStuff(str);
        return {
            baseSymbol: dec.readString(),
            quoteSymbol: dec.readString(),
            id: dec.readBigIntAccurate(),
            amount: dec.readBigInt(),
        };
    };
    return Decoder;
}());
