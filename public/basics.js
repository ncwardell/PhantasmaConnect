//Standard Intitilization Stuff
let dappName;
let requiredVersion = 2;
let platform = 'phantasma';
let providerHint = '';

//Creating Usable Input/Output Variables
let _contractName;
let _methodName;
let _inputArguments;
let _scriptData;
let _gasProfile;
let _return;

//Config Used to Create Scripts
let scriptConfig = {
    contractName: '',
    methodName: '',
    inputArguments: [],
    compiledScript: '',
};

//Checks for Ecto Wallet then Enables it Via providerHint
async function checkForEcto() {
    if (!!window.PhantasmaLinkSocket == true) {
        providerHint = 'ecto';
    };
};


//Logs in to Phantasma (If Ecto installed, Toggles Custom Ecto Connect Socket with prividerHint)
async function loginToPhantasma() {

    //Waits for Ecto Check to finish then continues
    await checkForEcto();

    //Sends Login Request to Wallet
    link.login(function (success) {

        //Console Logging for Debugging Purposes
        if (success) {
            console.log('Connected to account ' + link.account.address + ' via ' + link.wallet);
        } else {
            console.log('Connection Failed');
        };

    }, requiredVersion, platform, providerHint);
};

async function getDocumentValue(input){
    if(input == _inputArguments){
        return document.getElementById(input).value.split(", ");
    }else{
    return document.getElementById(input).value;
    };
};

async function setDocumentValue(documentInput, inputValue){
    document.getElementById(documentInput).value = inputValue;
};

//Compiles the Script Config
async function compileScript(type) {

    //SriptBUilding Tools
    const sb = new ScriptBuilder();

    switch (type) {
        case 'transaction':

            //Gas Stuff for transaction fees
            const minimumFee = '100000';
            const gasLimit = '900';

            //Builds Script 
            scriptConfig.compiledScript = sb
                .callContract('gas', 'AllowGas', [link.account.address, sb.nullAddress(), minimumFee, gasLimit]) //Just for good measure (optional)
                .callContract(scriptConfig.contractName, scriptConfig.methodName, scriptConfig.inputArguments) //The Meat of the Script
                .callContract('gas', 'SpendGas', [link.account.address]) //Just for good measure (optional)
                .endScript();

        break;

        case 'invoke':
            
        //Builds Script
            scriptConfig.compiledScript = sb
                .callContract(scriptConfig.contractName, scriptConfig.methodName, scriptConfig.inputArguments) //The Meat of the Script
                .endScript();

            break;
    }

};


//Easy Updating and Script Generation
async function updateScriptConfig(type) {

    //Better then ifs, am I right
    switch(type){

        //Used for HTML elements
        case 'document':
            scriptConfig.contractName = await getDocumentValue(_contractName);
            scriptConfig.methodName = await getDocumentValue(_methodName);
            scriptConfig.inputArguments = await getDocumentValue(_inputArguments);
            
            //Compiles Script with or without gas profile
            if(_gasProfile == true){
                await compileScript('transaction');
            }else{
                await compileScript('invoke');
            };

            //Saves Script
            await setDocumentValue(_scriptData, scriptConfig.compiledScript);

        break;

        //Used for non HTML elements
        case 'standard':
            scriptConfig.contractName = _contractName;
            scriptConfig.methodName = _methodName;
            scriptConfig.inputArguments = _inputArguments;
            
            //Compiles Script with or without gas profile
            if(_gasProfile == true){
                await compileScript('transaction');
            }else{
                await compileScript('invoke');
            };

            //Saves Script
            _scriptData = scriptConfig.compiledScript;

        break;
    };

};


//Sends Transactions
function sendTransaction(script) {

    //Send the Transaction (type = 'mainnet' or 'simnet')
    link.sendTransaction('main', script, null, (res) => {

        //Logging for Debuging Purposes
        if (res.success) {
            console.log('success: ' + res);
        } else {
            console.log('failed: ' + res);
        }
    });

};

//Retrieves Data From Smart Contracts via RPC
async function invokeTransaction(script) {


    //Send RPC Request
    $.ajax({
        url: "http://207.148.17.86:7077/rpc", //Node address
        type: 'post',
        data: JSON.stringify(script), //Requests only accept strings
        datatype: 'application/json',

        complete: async function (response) { //When Data get's returned

            console.log(response); //Logging for Debuging purposes

            let data = response.responseJSON.result.results; //Cleaning the response Data
            let cleanData = "";

            //Cycles through each response and decodes it
            data.forEach(element => {
                cleanData += '{' + decodeVMObject(element) + '}, ';
            });

            //Shows user the decoded data
            await setDocumentValue(_return, cleanData);
        }
    });

};
