// src/components/CertificateList.jsx
import React, { useEffect, useState } from 'react';

const CertificateList = ({ contract, account }) => {
    const [certificates, setCertificates] = useState([]);

    // Fetch certificates for the current account
    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                const certs = await contract.methods.getCertificates(account).call(); // Ensure this method exists in your contract
                setCertificates(certs);
            } catch (error) {
                console.error('Error fetching certificates:', error);
            }
        };

        fetchCertificates();
    }, [contract, account]);

    return (
        <div>
            <h2>Issued Certificates</h2>
            {certificates.length > 0 ? (
                <ul>
                    {certificates.map((cert, index) => (
                        <li key={index}>
                            <p><strong>Recipient:</strong> {cert.issuedToName}</p>
                            <p><strong>Issuer:</strong> {cert.issuerName}</p>
                            <p><strong>Reason:</strong> {cert.reason}</p>
                            <p><strong>Certificate Hash:</strong> <a href={`https://ipfs.io/ipfs/${cert.certHash}`} target="_blank" rel="noopener noreferrer">{cert.certHash}</a></p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No certificates issued yet.</p>
            )}
        </div>
    );
};

export default CertificateList;
