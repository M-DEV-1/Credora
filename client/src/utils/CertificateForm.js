// src/components/CertificateForm.js
import React, { useState } from 'react';
import { uploadToIPFS } from './ipfs';
import { issueCertificate } from './web3';

const CertificateForm = ({ web3, contract, account }) => {
    const [formData, setFormData] = useState({
        recipientAddress: '',
        issuerName: '',
        recipientName: '',
        reason: '',
        certificateFile: null
    });

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
                reason: formData.reason
            });
            
            alert('Certificate issued successfully!');
        } catch (error) {
            console.error('Error issuing certificate:', error);
            alert('Error issuing certificate');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Recipient Address:</label>
                <input
                    type="text"
                    value={formData.recipientAddress}
                    onChange={(e) => setFormData({
                        ...formData,
                        recipientAddress: e.target.value
                    })}
                />
            </div>
            <div>
                <label>Issuer Name:</label>
                <input
                    type="text"
                    value={formData.issuerName}
                    onChange={(e) => setFormData({
                        ...formData,
                        issuerName: e.target.value
                    })}
                />
            </div>
            <div>
                <label>Recipient Name:</label>
                <input
                    type="text"
                    value={formData.recipientName}
                    onChange={(e) => setFormData({
                        ...formData,
                        recipientName: e.target.value
                    })}
                />
            </div>
            <div>
                <label>Reason:</label>
                <input
                    type="text"
                    value={formData.reason}
                    onChange={(e) => setFormData({
                        ...formData,
                        reason: e.target.value
                    })}
                />
            </div>
            <div>
                <label>Certificate File:</label>
                <input
                    type="file"
                    onChange={(e) => setFormData({
                        ...formData,
                        certificateFile: e.target.files[0]
                    })}
                />
            </div>
            <button type="submit">Issue Certificate</button>
        </form>
    );
};

export default CertificateForm;