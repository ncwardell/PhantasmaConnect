class PhantasmaConnect {

    //Initial Declarations
    constructorConfig = {
        dappName: 'Default dApp',
        url: '207.148.17.86:7077/rpc'
    }
    RPC: any;
    Link: any;
    Decode: any;
    

    //Basic Constructor
    constructor(dAppName: string, RPC_URL: string) {
        this.constructorConfig.dappName = dAppName;
        this.constructorConfig.url = RPC_URL;

        //Initiate Classes
        this.RPC = new PhantasmaRPC(this.constructorConfig.url);
        this.Link = new PhantasmaLink(this.constructorConfig.dappName);
        this.Decode = new Decoder();
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
        this.Link.signTx('mainnet', _inputScript, null, (res) => {
            console.log(res);
            //Logging for Debuging Purposes
            if (res.success) {
                console.log('success: ' + res);
            } else {
                console.log('failed: ' + res);
            }
        });

    };

    async getWalletAddy(){
        return this.Link.account.address;
    };


};