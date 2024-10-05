import web3 from './web3';
import Certificate from '../../../build/contracts/Certificate.json'; // Path to the compiled smart contract JSON

export const getContractInstance = async () => {
    const networkId = await web3.eth.net.getId(); // Get the current network ID (Ganache, Ethereum mainnet, etc.)
    const deployedNetwork = Certificate.networks[networkId]; // Get the contract deployed on the network

    if (!deployedNetwork) {
        throw new Error("Smart contract not deployed on this network.");
    }

    const contract = new web3.eth.Contract(
        Certificate.abi,                // ABI of the smart contract
        deployedNetwork && deployedNetwork.address // Contract address on the network
    );

    return contract;
};
