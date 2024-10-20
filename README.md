# Hardhat Project

This project utilizes Hardhat, a development environment for Ethereum software. It simplifies the process of building, testing, and deploying smart contracts on the Ethereum blockchain.

## Features

- **Smart Contract Development**: Easily create and manage smart contracts.
- **Testing Framework**: Write and run tests using Mocha and Chai for reliable smart contract validation.
- **Local Blockchain**: Spin up a local Ethereum network for testing and development.
- **Deployments**: Streamlined deployment process to various Ethereum networks.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Local Ethereum Network**:
   ```bash
   npx hardhat node
   ```

3. **Compile Contracts**:
   ```bash
   npx hardhat compile
   ```

4. **Run Tests**:
   ```bash
   npx hardhat test
   ```

5. **Deploy Contracts**:
   ```bash
   npx hardhat ignition deploy ./ignition/modules/Token.js --network <network-name>
   ```
