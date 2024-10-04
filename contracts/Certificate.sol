// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Certificate {
    
    struct CertificateData {
        string certHash;      // IPFS hash of the certificate file
        string issuerName;    // Name of the issuer
        address issuedTo;     // Address of the recipient
        string issuedToName;  // Human-readable name of the recipient
        string reason;        // Reason for issuing the certificate
    }

    mapping(address => CertificateData[]) public certificates;
    // mapping from an Ethereum address to an array of CertificateData structs, with a public getter for easy retrieval. Mapping is named `certificates`

    event CertificateIssued(
        address indexed issuedTo,
        string certHash,
        string issuerName,
        string issuedToName,  // Include the name in the event
        string reason
    );
    // event emitted when a certificate is issued, logging the recipient's address (indexed), cert hash, issuer name, issuedTo name, and reason.

    function issueCertificate(

        address _to,
        string memory _certHash,
        string memory _issuerName,
        string memory _issuedToName, 
        string memory _reason

    ) public {
        // allows the caller to issue a new certificate to a specified address.

        certificates[_to].push(CertificateData({
            certHash: _certHash,
            issuerName: _issuerName,
            issuedTo: _to,
            issuedToName: _issuedToName,  // Store the name here
            reason: _reason
        }));
        // creates a new CertificateData struct and pushes it to the recipient's array of certificates.

        emit CertificateIssued(_to, _certHash, _issuerName, _issuedToName, _reason);
        // emits the CertificateIssued event to log the issuance details on the blockchain.
    }
    // issues a certificate to a specified address, storing its data and emitting a CertificateIssued event.

    function getCertificates(address _owner) public view returns (CertificateData[] memory) {
        return certificates[_owner];
    }
        // retrieves all certificates associated with a given address. returns an array of CertificateData structs for the specified owner.
}
