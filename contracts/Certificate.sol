// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Certificate {
    struct CertificateData {
        address issuedTo;     // recipient's address
        address issuer;       // issuer's address (new field)
        string issuerName;    // issuer's name
        string issuedToName;  // recipient's human-readable name
        string reason;        // reason for the certificate
        uint256 issuedAt;     // timestamp when certificate was issued
        bool isValid;         // flag to track if certificate is still valid
        bytes32 uniqueID;     // unique identifier for the certificate
    }

    mapping(address => CertificateData[]) public certificates;
    mapping(bytes32 => bool) public certificateExists;  // Track unique certificates
    mapping(bytes32 => bool) public revokedCertificates;  // Track revoked certificates
    
    // address public immutable issuer;
    
    event CertificateIssued(
        address indexed issuedTo,
        address indexed issuer,  // Added index for issuer
        string issuerName,
        string issuedToName,
        string reason,
        bytes32 uniqueID
    );

    event CertificateRevoked(
        bytes32 indexed uniqueID,
        string reason
    );

    // constructor() {
    //     issuer = msg.sender;
    // }

    // modifier onlyIssuer() {
    //     require(msg.sender == issuer, "Only the issuer can issue certificates");
    //     _;
    // }

    // Generate a unique ID for each certificate
    function generateUniqueID(
        address _to,
        uint256 _timestamp
    ) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(_to, _timestamp));
    }

    function issueCertificate(
        address _to,
        string memory _issuerName,
        string memory _issuedToName,
        string memory _reason
    ) public returns (bytes32) { // Return the uniqueID
        require(_to != address(0), "Invalid recipient address");
        require(bytes(_reason).length > 0, "Reason cannot be empty");
        
        // Generate unique ID for the certificate
        bytes32 uniqueID = generateUniqueID(_to, block.timestamp);

        // Create new certificate
        CertificateData memory newCert = CertificateData({
            issuedTo: _to,
            issuer: msg.sender,      // Store the issuer's address here
            issuerName: _issuerName,
            issuedToName: _issuedToName,
            reason: _reason,
            issuedAt: block.timestamp,
            isValid: true,
            uniqueID: uniqueID
        });

        certificates[_to].push(newCert);
        certificateExists[uniqueID] = true;

        emit CertificateIssued(
            _to, 
            msg.sender,            // Emit the issuer's address here
            _issuerName, 
            _issuedToName, 
            _reason,
            uniqueID
        );

        return uniqueID; // Return the unique ID after issuing the certificate
    }

    // Verify a specific certificate by its unique ID
    function verifyCertificate(bytes32 _uniqueID) public view returns (
        bool isValid,
        CertificateData memory certData
    ) {
        require(certificateExists[_uniqueID], "Certificate does not exist");
        
        // Check if certificate is revoked
        if (revokedCertificates[_uniqueID]) {
            return (false, CertificateData(address(0), address(0), "", "", "", 0, false, _uniqueID));
        }

        // Find the certificate
        address recipient = findCertificateRecipient(_uniqueID);
        CertificateData[] memory recipientCerts = certificates[recipient];
        
        for (uint i = 0; i < recipientCerts.length; i++) {
            if (recipientCerts[i].uniqueID == _uniqueID) {
                return (true, recipientCerts[i]);
            }
        }
        
        return (false, CertificateData(address(0), address(0), "", "", "", 0, false, _uniqueID));
    }

    // Helper function to find certificate recipient by uniqueID
    function findCertificateRecipient(bytes32 _uniqueID) internal view returns (address) {
        for (uint i = 0; i < certificates[msg.sender].length; i++) {
            if (certificates[msg.sender][i].uniqueID == _uniqueID) {
                return msg.sender;
            }
        }
        return address(0);
    }

    // Revoke a certificate
    function revokeCertificate(bytes32 _uniqueID, string memory _reason) public {
        require(certificateExists[_uniqueID], "Certificate does not exist");
        require(!revokedCertificates[_uniqueID], "Certificate is already revoked");
        
        revokedCertificates[_uniqueID] = true;
        emit CertificateRevoked(_uniqueID, _reason);
    }

    // Get all certificates for an address
    function getCertificates(address _owner) public view returns (CertificateData[] memory) {
        return certificates[_owner];
    }
}
