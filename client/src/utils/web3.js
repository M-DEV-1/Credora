// src/utils/web3.js
import Web3 from 'web3';

// Check if MetaMask is installed
const getWeb3 = () => {
    return new Promise((resolve, reject) => {
        // Wait for loading completion to avoid race conditions with web3 injection timing
        window.addEventListener('load', async () => {
            // Modern dapp browsers...
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                try {
                  // Check if the user has already given permission
                  const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        
                  // If there are no accounts, request permission to access accounts
                  if (accounts.length === 0) {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                  }
        
                  resolve(web3);
                } catch (error) {
                  reject(error);
                }
              } else {
                reject('Please install MetaMask!');
              }
            });
          });
        };
        
        export default getWeb3;