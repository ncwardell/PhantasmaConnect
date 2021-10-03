# PhantasmaContractTester
It allows you to Call/Invoke scripts for Phantasma Smart Contracts

Script Inports needed for Phantasma Link

    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.js" crossorigin="anonymous"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/gh/ncwardell/PhantasmaContractTester/stuff/phantasma.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/phantasma-io/PhantasmaLink/Dapps/www/public/Shared/validator.min.js"></script>
    <script src="https://peterolson.github.io/BigInteger.js/BigInteger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/ncwardell/PhantasmaContractTester/stuff/decoder.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/ncwardell/PhantasmaContractTester/stuff/basics.js"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" crossorigin="anonymous">


# How to use Basics.js

//Base Functions
- checkForEcto() ~ Checks for Ecto Wallet and sets Global Variable 'providerHint'
- loginToPhantasma() ~ Logs in to Phantasma via wallet [Calls checkForEcto()]

//Important
Created Variables
- _contractName;
- _methodName;
- _inputArguments;
- _scriptData;
- _gasProfile;
- _return;

If using in HTML,set each variable equal to the element ID.
Otherwise use them like normal variables

//Saves Created Variable Values to internal Data
- updateScriptConfig(type) ~ Two Types ['document', 'standard'], 'document' is used for HTML elements, 'standard' is used for normal variables

//Compiles Script from internal Data
- compileScript(type) ~ Two Types ['transaction', 'invoke'], 'transaction' adds saftey gas profile, 'invoke' does not

//HTML Stuff
- getDocumentValue(input) ~ Retrieves the text Value from element ID or intital Created Variables
- setDocumentValue(documentInput, inputValue) ~ Sets the text Value from element ID or initial Created Variables

//Sends the Script in a Transaction
- sendTransaction(script) ~ _scriptData for normal or getDocumentValue(_scriptData) for HTML elements

//Invokes the script -No Transaction
- invokeTransaction(script) ~ _scriptData for normal or getDocumentValue(_scriptData) for HTML elements



