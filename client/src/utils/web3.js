import Web3 from 'web3';

const getWeb3 = async () => {
    return new Promise((resolve, reject) => {
        // Wait for loading completion to avoid race conditions with web3 injection timing.
        window.addEventListener('load', async () => {
            let web3;

            // Modern dapp browsers...
            if (window.ethereum) {
                web3 = new Web3(window.ethereum);
                try {
                    // Request account access if needed
                    await window.ethereum.enable();
                } catch (error) {
                    reject(error);
                }
            }
            // Legacy dapp browsers...
            else if (window.web3) {
                web3 = new Web3(window.web3.currentProvider);
            }
            // If no injected web3 instance is detected, fall back to Ganache
            else {
                const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
                web3 = new Web3(provider);
            }
            resolve(web3);
        });
    });
};

export default getWeb3;
