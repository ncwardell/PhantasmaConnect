class PhantasmaRPC {

  url: string;

  constructor(RPC_URL: string) {
      this.url = RPC_URL;
  };

  async getAccount(WalletAddress: string) {
      //Perameters = ['WalletAddress']
      let perams = [WalletAddress];

      //Send Post
      return await this.sendPost('getAccount', perams);
  };

  async lookUpName(WalletAddress: string) {
      //Perameters = ['WalletAddress']
      let perams = [WalletAddress];

      //Send Post
      return await this.sendPost('lookUpName', perams);
  };

  async getBlockHeight(ChainAddress: string) {
      //Perameters = ['Address or Name of Chain']
      let perams = [ChainAddress];

      //Send Post
      return await this.sendPost('getBlockHeight', perams);
  };

  async getBlockTransactionCountByHash(BlockHash: string) {
      //Perameters = ['Hash of block']
      let perams = [BlockHash];

      //Send Post
      return await this.sendPost('getBlockTransactionCountByHash', perams);
  };

  async getBlockByHash(BlockHash: string) {
      //Perameters = ['Hash of block']
      let perams = [BlockHash];

      //Send Post
      return await this.sendPost('getBlockByHash', perams);
  };

  async getRawBlockByHash(BlockHash: string) {
      //Perameters = ['Hash of block']
      let perams = [BlockHash];

      //Send Post
      return await this.sendPost('getRawBlockByHash', perams);
  };

  async getBlockByHeight(ChainAddress: string, BlockHeight: number) {
      //Perameters = ['Address or Name of Chain', 'Height of block']
      let perams = [ChainAddress, BlockHeight];

      //Send Post
      return await this.sendPost('getBlockByHeight', perams);
  };

  async getRawBlockByHeight(ChainAddress: string, BlockHeight: number) {
      //Perameters = ['Address or Name of Chain', 'Height of block']
      let perams = [ChainAddress, BlockHeight];

      //Send Post
      return await this.sendPost('getRawBlockByHeight', perams);
  };

  async getTransactionByBlockHashAndIndex(BlockHash: string, TransactionIndex: number) {
      //Perameters = ['Hash of block', 'Index of Transaction']
      let perams = [BlockHash, TransactionIndex];

      //Send Post
      return await this.sendPost('getTransactionByBlockHashAndIndex', perams);
  };

  async getAddressTransactions(WalletAddress: string, PageIndex: number, PageItemMax: number) {
      //Perameters = ['Wallet Address', 'Index of page to return', 'Number of items to return per page']
      let perams = [WalletAddress, PageIndex, PageItemMax];

      //Send Post
      return await this.sendPost('getTransactionByBlockHashAndIndex', perams);
  };

  async getAddressTransactionCount(WalletAddress: string, ChainAddress: string) {
      //Perameters = ['Wallet Address', 'Name or address of chain, optional']
      let perams = [WalletAddress, ChainAddress];

      //Send Post
      return await this.sendPost('getAddressTransactionCount', perams);
  };

  async sendRawTransaction(SerializedScript: string) {
      //Perameters = ['Serialized transaction bytes, in hexadecimal format']
      let perams = [SerializedScript];

      //Send Post
      return await this.sendPost('sendRawTransaction', perams);
  };

  async invokeRawScript(ChainAddress: string, SerializedScript: string) {
      //Perameters = ['Address or name of chain', 'Serialized script bytes, in hexadecimal format']
      let perams = [ChainAddress, SerializedScript];

      //Send Post
      return await this.sendPost('invokeRawScript', perams);
  };

  async getTransaction(TransactionHash: string) {
      //Perameters = ['Hash of transaction']
      let perams = [TransactionHash];

      //Send Post
      return await this.sendPost('getTransaction', perams);
  };

  async cancelTransaction(TransactionHash: string) {
      //Perameters = ['Hash of transaction']
      let perams = [TransactionHash];

      //Send Post
      return await this.sendPost('cancelTransaction', perams);
  };

  async getChains() {
      //Perameters = []
      let perams = [];

      //Send Post
      return await this.sendPost('getChains', perams);
  };

  async getTokens() {
      //Perameters = []
      let perams = [];

      //Send Post
      return await this.sendPost('getTokens', perams);
  };

  async getToken(TokenSymbol: string) {
      //Perameters = ['Token symbol']
      let perams = [TokenSymbol];

      //Send Post
      return await this.sendPost('getToken', perams);
  };

  async getTokenData(TokenSymbol: string, TokenID: string) {
      //Perameters = ['Token symbol', 'ID of token']
      let perams = [TokenSymbol, TokenID];

      //Send Post
      return await this.sendPost('getTokenData', perams);
  };

  async getApps() {
      //Perameters = []
      let perams = [];

      //Send Post
      return await this.sendPost('getApps', perams);
  };

  async getTokenTransfers(TokenSymbol: string, PageIndex: number, PageItemMax: number) {
      //Perameters = ['Token symbol', 'Index of page to return', 'Number of items to return per page']
      let perams = [TokenSymbol, PageIndex, PageItemMax];

      //Send Post
      return await this.sendPost('getTokenTransfers', perams);
  };

  async getTokenTransferCount(TokenSymbol: string) {
      //Perameters = ['Token symbol']
      let perams = [TokenSymbol];

      //Send Post
      return await this.sendPost('getTokenTransferCount', perams);
  };

  async getTokenBalance(WalletAddress: string, TokenSymbol: string, ChainAddress: string) {
      //Perameters = ['Wallet Address', 'Token symbol', Address or Name of Chain']
      let perams = [WalletAddress, TokenSymbol, ChainAddress];

      //Send Post
      return await this.sendPost('getTokenBalance', perams);
  };

  async getAuctions(ChainAddress: string, TokenSymbol: string, PageIndex: number, PageItemMax: number) {
      //Perameters = ['Chain address or name where the market is located', 'Token symbol', 'Index of page to return', 'Number of items to return per page']
      let perams = [ChainAddress, TokenSymbol, PageIndex, PageItemMax];

      //Send Post
      return await this.sendPost('getAuctions', perams);
  };

  async getAuction(ChainAddress: string, TokenSymbol: string, TokenID: string) {
      //Perameters = ['Chain address or name where the market is located', 'Token symbol', 'Token ID']
      let perams = [ChainAddress, TokenSymbol, TokenID];

      //Send Post
      return await this.sendPost('getAuction', perams);
  };

  async getArchive(ArchiveHash: string) {
      //Perameters = ['Archive hash']
      let perams = [ArchiveHash];

      //Send Post
      return await this.sendPost('getArchive', perams);
  };

  //Sends the RPC Post Request
  async sendPost(methodName: string, perams: any[]) {

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