// src/utils/web3.js
import Web3 from 'web3';
import Certificate from '../../build/contracts/Certificate.json';

export const initWeb3 = async () => {
    let web3Instance;
    
    // Modern browsers with MetaMask
    if (window.ethereum) {
        web3Instance = new Web3(window.ethereum);
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error("User denied account access");
        }
    }
    // Legacy dapp browsers
    else if (window.web3) {
        web3Instance = new Web3(window.web3.currentProvider);
    }
    // If no injected web3 instance is available, fallback to Ganache
    else {
        web3Instance = new Web3('http://localhost:7545');
    }
    
    return web3Instance;
};

export const loadContract = async (web3) => {
    try {
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = Certificate.networks[networkId];
        
        const instance = new web3.eth.Contract(
            Certificate.abi,
            deployedNetwork && deployedNetwork.address
        );
        
        return instance;
    } catch (error) {
        console.error("Error loading contract:", error);
        throw error;
    }
};

export const issueCertificate = async (contract, account, {
    recipientAddress,
    certHash,
    issuerName,
    recipientName,
    reason
}) => {
    try {
        await contract.methods.issueCertificate(
            recipientAddress,
            certHash,
            issuerName,
            recipientName,
            reason
        ).send({ from: account });
    } catch (error) {
        console.error("Error issuing certificate:", error);
        throw error;
    }
};

export const verifyCertificate = async (contract, uniqueId) => {
    try {
        const result = await contract.methods.verifyCertificate(uniqueId).call();
        return result;
    } catch (error) {
        console.error("Error verifying certificate:", error);
        throw error;
    }
};