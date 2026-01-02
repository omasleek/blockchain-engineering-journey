const Block = require("./block");

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, new Date().toISOString(), "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(data) {
    const latestBlock = this.getLatestBlock();
    const newBlock = new Block(
      this.chain.length,
      new Date().toISOString(),
      data,
      latestBlock.hash
    );

    this.chain.push(newBlock);
  }
}

// Test blockchain
const myBlockchain = new Blockchain();
myBlockchain.addBlock({ amount: 50 });
myBlockchain.addBlock({ amount: 100 });

console.log(JSON.stringify(myBlockchain, null, 2));
