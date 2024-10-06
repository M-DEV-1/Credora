// src/utils/loadContract.js

import Web3 from 'web3';
import { abi } from  '../../../build/contracts/Certificate.json';
import withMetaMask from '../hoc/withMetaMask';

const contractAddress = "0xC5443Cb91112196B178fCD010aA73a67880b1E5e"; // Deployed with Ganache

const loadContract = async (web3, account, error) => {
  try {
    const contract = new web3.eth.Contract(abi, contractAddress, { from: account });
    return contract;
  } catch (error) {
    console.error("Failed to load contract:", error);
    throw error;
  }
};

export default loadContract;
