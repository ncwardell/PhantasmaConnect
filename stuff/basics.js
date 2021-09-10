//Standard Stuff
let mydappName = 'Phantasma Contract Tester';
let requiredVersion = 2;
let platform = 'phantasma';
let providerHint = '';
let link = new PhantasmaLink(mydappName); //Here we instantiate a Phantasma Link connection

//Checks if Ecto is installed after 1 seccond
setTimeout(() => {
    if (!!window.PhantasmaLinkSocket == true) {
        providerHint = 'ecto';
    };
}, 1000);

//Logs in to Phantasma (If Ecto installed, Toggles Custom Ecto Connect Socket with prividerHint)
function loginToPhantasma() {
    link.login(function (success) {
        if (success) {
            console.log('Connected to account ' + link.account.address + ' via ' + link.wallet);
        }
    }, requiredVersion, platform, providerHint);
};

//Sends Transactions
function sendTransaction() {

    //Some Useful Info
    const accountWallet = link.account.address; //This get's the connected users wallet address
    const contractAddress = document.getElementById("contractAddy").value;

    //Gas Stuff for transaction fees
    const minimumFee = '100000';
    const gasLimit = '900';

    //Arguments & Parameters
    const _contrctName = document.getElementById("contractName").value;
    const _methodName = document.getElementById("methodName").value;
    const _parameters = document.getElementById("inputParameters").value.split(", "); //Spliting each argument from the text box into an array

    //SriptBUilding Tools
    const sb = new ScriptBuilder();

    //Builds Script 
    const script = sb
        .callContract('gas', 'AllowGas', [accountWallet, contractAddress, minimumFee, gasLimit]) //Just for good measure (optional)
        .callContract(_contrctName, _methodName, _parameters) //The Meat of the Scrupt
        .callContract('gas', 'SpendGas', [accountWallet]) //Just for good measure (optional)
        .endScript();

    //Logging the final script for Debuging Purposes
    console.log(sb);


    //--Useful Info--
    //link.sendTransaction('mainnet', 'main', script, null)
    //or
    //link.sendTransaction('simnet', 'main', script, null)

    //Send the Transaction with constructed script
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
function invokeTransaction() {

    const accountWallet = link.account.address;

    //Arguments & Parameters
    const cName = document.getElementById("contractName").value;
    const mName = document.getElementById("methodName").value;
    const param = document.getElementById("inputParameters").value.split(", ")

    //Builds Script 
    const sb = new ScriptBuilder();
    const script = sb
        .callContract(cName, mName, param)
        .endScript();

    //RPC Method Call
    var data = {
        jsonrpc: '2.0',
        method: 'invokeRawScript', //Calling invokeRawScript 
        params: {
            chainInput: 'main',
            scriptData: script //Using constructed script data
        }, id: 1
    };

    //Send RPC Request
    $.ajax({
        url: "http://207.148.17.86:7077/rpc", //Node address
        type: 'post',
        data: JSON.stringify(data), //Requests only accept strings
        datatype: 'application/json',

        complete: function (response) { //When Data get's returned

            console.log(response); //Logging for Debuging purposes

            let data = response.responseJSON.result.results; //Cleaning the response Data
            let cleanData = "";

            //Cycles through each response and decodes it
            data.forEach(element => {
                cleanData += '{' + decodeVMObject(element) + '}, ';
            });

            //Shows user the decoded data
            document.getElementById('returnBox').value = cleanData;
        }
    });

};