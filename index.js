async function getLatestBlockNumber() {
  try {
      const blockNumber = await web3.eth.getBlockNumber();
      return blockNumber;
  } catch (error) {
      console.error('Error fetching latest block number:', error);
      return null;
  }
}


async function getBlockInfo(blockNumber) {
  try {
      const block = await web3.eth.getBlock(blockNumber);
      return block;
  } catch (error) {
      console.error('Error fetching block info:', error);
      return null;
  }
}

async function getTransactionInfo(txHash) {
  try {
      const transaction = await web3.eth.getTransaction(txHash);
      return transaction;
  } catch (error) {
      console.error('Error fetching transaction info:', error);
      return null;
  }
}

async function getCurrentGasPrice() {
  try {
      const gasPrice = await web3.eth.getGasPrice();
      return web3.utils.fromWei(gasPrice, 'gwei');
  } catch (error) {
      console.error('Error fetching current gas price:', error);
      return null;
  }
}

async function getTransactionHistory(address) {
  try {
      const transactions = await web3.eth.getTransactionsByAddress(address);
      return transactions;
  } catch (error) {
      console.error('Error fetching transaction history:', error);
      return null;
  }
}

async function getCurrentMiningDifficulty() {
  try {
      const difficulty = await web3.eth.getDifficulty();
      return difficulty;
  } catch (error) {
      console.error('Error fetching current mining difficulty:', error);
      return null;
  }
}

async function getContractABI(contractAddress) {
  try {
      const contract = new web3.eth.Contract(abi, contractAddress);
      return contract.methods;
  } catch (error) {
      console.error('Error fetching contract ABI:', error);
      return null;
  }
}

async function getTransactionCount(address) {
  try {
      const count = await web3.eth.getTransactionCount(address);
      return count;
  } catch (error) {
      console.error('Error fetching transaction count:', error);
      return null;
  }
}