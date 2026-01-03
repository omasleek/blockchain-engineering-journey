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

// Test my blockchain
let myCoin = new Blockchain();

myCoin.addBlock(new Block(1, new Date().toISOString(), { amount: 50 }));

myCoin.addBlock(new Block(2, new Date().toISOString(), { amount: 200 }));

console.log(JSON.stringify(myCoin, null, 2));
