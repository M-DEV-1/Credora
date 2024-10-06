// src/components/CertificateForm.jsx
import React, { useEffect, useState } from 'react';
import getWeb3 from '../utils/web3';
import { uploadToIPFS } from '../utils/ipfs'; // Ensure this path is correct
import { issueCertificate } from '../utils/contractHelper'; // Ensure this is the correct import

const CertificateForm = ({ contract }) => {
    const [account, setAccount] = useState('');
    const [formData, setFormData] = useState({
        recipientAddress: '',
        issuerName: '',
        recipientName: '',
        reason: '',
        certificateFile: null,
    });

    // Connect to MetaMask and set the current account
    useEffect(() => {
        const initWeb3 = async () => {
            const web3 = await getWeb3();
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]); // Set the connected account
        };

        initWeb3();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Upload certificate to IPFS
            const ipfsHash = await uploadToIPFS(formData.certificateFile);
            
            // Issue certificate on blockchain
            await issueCertificate(contract, account, {
                recipientAddress: formData.recipientAddress,
                certHash: ipfsHash,
                issuerName: formData.issuerName,
                recipientName: formData.recipientName,
                reason: formData.reason,
            });
            
            alert('Certificate issued successfully!');
        } catch (error) {
            console.error('Error issuing certificate:', error);
            alert('Error issuing certificate');
        }
    };

    return (
        <section>
            <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Recipient Address:</label>
                <input
                    type="text"
                    value={formData.recipientAddress}
                    onChange={(e) => setFormData({
                        ...formData,
                        recipientAddress: e.target.value,
                    })}
                    required
                />
            </div>
            <div>
                <label>Issuer Name:</label>
                <input
                    type="text"
                    value={formData.issuerName}
                    onChange={(e) => setFormData({
                        ...formData,
                        issuerName: e.target.value,
                    })}
                    required
                />
            </div>
            <div>
                <label>Recipient Name:</label>
                <input
                    type="text"
                    value={formData.recipientName}
                    onChange={(e) => setFormData({
                        ...formData,
                        recipientName: e.target.value,
                    })}
                    required
                />
            </div>
            <div>
                <label>Reason:</label>
                <input
                    type="text"
                    value={formData.reason}
                    onChange={(e) => setFormData({
                        ...formData,
                        reason: e.target.value,
                    })}
                    required
                />
            </div>
            <div>
                <label>Certificate File:</label>
                <input
                    type="file"
                    onChange={(e) => setFormData({
                        ...formData,
                        certificateFile: e.target.files[0],
                    })}
                    required
                />
            </div>
            <button type="submit">Issue Certificate</button>
        </form>
        </section>
    );
};

export default CertificateForm;
