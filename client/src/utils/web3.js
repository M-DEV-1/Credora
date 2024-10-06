// src/utils/web3.js
import Web3 from 'web3';

// Utility to get the Web3 instance with MetaMask
const getWeb3 = async () => {
  // Check if MetaMask is installed
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);

    try {
      // Request account access if needed
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });

      // If there are no accounts, request permission to access accounts
      if (accounts.length === 0) {
        // Trigger the MetaMask connection prompt
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        // Wait a moment to get the accounts again
        const newAccounts = await window.ethereum.request({ method: 'eth_accounts' });
        
        // If accounts are still not available, show a user-friendly message
        if (newAccounts.length === 0) {
          console.error('User denied account access or no accounts found.');
          return null; // Instead of throwing an error, return null
        }
      }

      // If we reach this point, the web3 instance is ready to use
      return web3;
    } catch (error) {
      console.error(`Error accessing accounts: ${error.message}`);
      return null; // Handle error gracefully
    }
  } else {
    console.error('Please install MetaMask!');
    return null; // Handle the case where MetaMask is not installed
  }
};

export default getWeb3;
