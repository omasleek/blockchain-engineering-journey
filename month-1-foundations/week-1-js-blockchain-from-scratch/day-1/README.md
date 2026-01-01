# Day 1: Build a Basic Block

## Overview
This project involves creating a simple representation of a block in a blockchain using JavaScript. In this implementation, we define the basic properties of a block and a method to compute its hash.

## Objectives
- Understand the fundamental structure of a block.
- Learn how to create a block with essential attributes (index, timestamp, data, previousHash).
- Implement a method to calculate the block's hash based on its contents.

## Code Explanation

### Block Class

The `Block` class contains the following properties:
- **index**: The position of the block in the blockchain.
- **timestamp**: The time when the block was created.
- **data**: The information stored in the block (e.g., transaction details).
- **previousHash**: The hash of the previous block in the chain.
- **hash**: The hash of the current block calculated at the time of creation.

### Method

- **calculateHash**: This method computes the hash of the block by combining its index, previousHash, timestamp, and data. In this simplified implementation, the hash is created as a string representation of these values.

### Example Usage

The following code demonstrates how to create the first block in the blockchain:

```javascript
const firstBlock = new Block(0, new Date().toISOString(), { amount: 50 }, "0");
console.log(firstBlock);
