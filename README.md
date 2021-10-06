# PhantasmaConnect
PhantasmaConnect is built on top of Phantasma Link, and allows you to easily Call, Build, and Invoke scripts for Smart Contracts on the Phantasma Chain. It also allows you to create dApps with relative ease.

HTML Imports needed for Phantasma Link
    
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.js" crossorigin="anonymous"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/gh/phantasma-io/PhantasmaLink/Dapps/www/public/Shared/validator.min.js"></script>
    <script src="https://peterolson.github.io/BigInteger.js/BigInteger.min.js"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" crossorigin="anonymous">

HTML Imports needed for PhantasmaConnect
    
    <script src="https://cdn.jsdelivr.net/gh/ncwardell/PhantasmaConnect/public/PhantasmaConnect-V1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

**Phantasma Link is already pre-built into PhantasmaConnect**


If you aren't using HTML, required NPM packages:
    
    npm install axios
    npm install big-integer



# How to use PhantasmaConnect.js

Initialize connection
    ```let dapp = new PhantasmaConnect('YourDappName', 'http://207.148.17.86:7077/rpc');```

## Basic Commands
- await ```dapp.walletConnect()```
- await ```dapp.GenerateScript(_contractName: string, _methodName: string, _inputArguments: [], type: string)```
- await ```dapp.signTransaction(_inputScript: any)```

## Misc Functions
- await ```dapp.checkForEcto() [Utilized in walletConnect()]```

## dapp.RPC calls
- await ```dapp.RPC.getAccount(WalletAddress: string);```
- await ```dapp.RPC.lookUpName(WalletAddress: string);```
- await ```dapp.RPC.getBlockHeight(ChainAddress: string);```
- await ```dapp.RPC.getBlockTransactionCountByHash(BlockHash: string);```
- await ```dapp.RPC.getBlockByHash(BlockHash: string);```
- await ```dapp.RPC.getRawBlockByHash(BlockHash: string);```
- await ```dapp.RPC.getBlockByHeight(ChainAddress: string, BlockHeight: number);```
- await ```dapp.RPC.getRawBlockByHeight(ChainAddress: string, BlockHeight: number);```
- await ```dapp.RPC.getTransactionByBlockHashAndIndex(BlockHash: string, TransactionIndex: number);```
- await ```dapp.RPC.getAddressTransactions(WalletAddress: string, PageIndex: number, PageItemMax: number);```
- await ```dapp.RPC.getAddressTransactionCount(WalletAddress: string, ChainAddress: string);```
- await ```dapp.RPC.sendRawTransaction(SerializedScript: string);```
- await ```dapp.RPC.invokeRawScript(ChainAddress: string, SerializedScript: string);```
- await ```dapp.RPC.getTransaction(TransactionHash: string);```
- await ```dapp.RPC.cancelTransaction(TransactionHash: string);```
- await ```dapp.RPC.getChains();```
- await ```dapp.RPC.getTokens();```
- await ```dapp.RPC.getToken(TokenSymbol: string);```
- await ```dapp.RPC.getTokenData(TokenSymbol: string, TokenID: string);```
- await ```dapp.RPC.getApps();```
- await ```dapp.RPC.getTokenTransfers(TokenSymbol: string, PageIndex: number, PageItemMax: number);```
- await ```dapp.RPC.getTokenTransferCount(TokenSymbol: string);```
- await ```dapp.RPC.getTokenBalance(WalletAddress: string, TokenSymbol: string, ChainAddress: string);```
- await ```dapp.RPC.getAuctions(ChainAddress: string, TokenSymbol: string, PageIndex: number, PageItemMax: number);```
- await ```dapp.RPC.getAuction(ChainAddress: string, TokenSymbol: string, TokenID: string);```
- await ```dapp.RPC.getArchive(ArchiveHash: string);```
- More Coming Soon