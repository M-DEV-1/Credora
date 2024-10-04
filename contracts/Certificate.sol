// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Certificate {
    
    struct CertificateData {
        string certHash;      // IPFS hash of the certificate
        string issuerName;    // issuer's name
        address issuedTo;     // recipient's address
        string issuedToName;  // recipient's human-readable name
        string reason;        // reason for the certificate
    }

    mapping(address => CertificateData[]) public certificates;
    // maps an ethereum address to an array of certificatedata structs for easy retrieval.

    address public issuer; // Store the issuer's address

    event CertificateIssued(
        address indexed issuedTo,
        string certHash,
        string issuerName,
        string issuedToName,  // recipient's name
        string reason
    );
    // emitted when a certificate is issued, logging the recipient's address, cert hash, issuer name, name, and reason.

    constructor() {
        issuer = msg.sender; // Set the deployer as the issuer
    }

    modifier onlyIssuer() {
        require(msg.sender == issuer, "Only the issuer can issue certificates");
        _; // Continue with function execution if condition is met
    }

    function issueCertificate(

        address _to,
        string memory _certHash,
        string memory _issuerName,
        string memory _issuedToName, 
        string memory _reason

    ) public onlyIssuer{ //restrict access
        
        // check for existing certificates to prevent duplication
        for(uint i = 0; i<certificates[_to].length; i++)
        {
            require(keccak256(abi.encodePacked(certificates[_to][i].certHash)) != keccak256(abi.encodePacked(_certHash)), "Certificate already issued!");
        }

        // issues a new certificate to the specified address.

        certificates[_to].push(CertificateData({
            certHash: _certHash,
            issuerName: _issuerName,
            issuedTo: _to,
            issuedToName: _issuedToName,  // store the name
            reason: _reason
        }));
        // adds a new certificatedata struct to the recipient's array.

        emit CertificateIssued(_to, _certHash, _issuerName, _issuedToName, _reason);
        // logs the certificate issuance on the blockchain.
    }
    // issues a certificate to a specified address and emits an event.

    function getCertificates(address _owner) public view returns (CertificateData[] memory) {
        return certificates[_owner];
    }
    // retrieves all certificates associated with a given address and returns an array of certificatedata structs for the specified owner.
}
