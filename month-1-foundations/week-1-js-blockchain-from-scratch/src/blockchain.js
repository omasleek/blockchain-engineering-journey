const Block = require("./block");

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
  }

  createGenesisBlock() {
    return new Block(0, new Date().toISOString(), "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }
}

// TESTING THE BLOCKCHAIN
const myBlockchain = new Blockchain();

console.log("⛏️ Mining block 1...");
myBlockchain.addBlock(new Block(1, new Date().toISOString(), { amount: 100 }));

console.log("⛏️ Mining block 2...");
myBlockchain.addBlock(new Block(2, new Date().toISOString(), { amount: 50 }));

console.log(JSON.stringify(myBlockchain, null, 2));
