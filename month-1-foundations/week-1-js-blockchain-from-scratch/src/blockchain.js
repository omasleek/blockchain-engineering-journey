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
  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

// Test my blockchain
let myCoin = new Blockchain();

myCoin.addBlock({ amount: 50 });
myCoin.addBlock({ amount: 200 });

console.log("Is blockchain valid?", myCoin.isChainValid());

// ATTACK: Someone tampers with block data
myCoin.chain[1].data = { amount: 1000 };

console.log("Is blockchain valid after attack?", myCoin.isChainValid());
console.log(JSON.stringify(myCoin, null, 2));

