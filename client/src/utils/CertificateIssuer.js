import Web3 from 'web3';
import CertificateIssuerABI from './CertificateIssuerABI.json'; // Import your ABI here

const getContractInstance = async () => {
    const web3 = await getWeb3();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = CertificateIssuerABI.networks[networkId];

    return new web3.eth.Contract(CertificateIssuerABI.abi, deployedNetwork.address);
};

export default getContractInstance;
