const Certificate = artifacts.require("Certificate");

contract("Certificate", (accounts) => {
    let certificateInstance;
    const issuer = accounts[0]; // Issuer's address
    const recipient1 = accounts[1]; // First recipient
    const recipient2 = accounts[2]; // Second recipient

    before(async () => {
        certificateInstance = await Certificate.deployed(); // Deploy the contract instance
    });

    it("should issue a certificate and retrieve it", async () => {
        const certHash1 = "QmXYZ..."; // Replace with actual IPFS hash
        const issuerName1 = "University ABC";
        const recipientName1 = "John Doe";
        const reason1 = "Course Completion";

        // Issue a certificate
        const tx = await certificateInstance.issueCertificate(
            recipient1,
            certHash1,
            issuerName1,
            recipientName1,
            reason1,
            { from: issuer }
        );

        // Verify the event was emitted
        assert.equal(tx.logs[0].event, "CertificateIssued", "CertificateIssued event should be emitted");

        // Get the certificate and verify its data
        const certificates = await certificateInstance.getCertificates(recipient1);
        assert.equal(certificates[0].certHash, certHash1, "Certificate hash doesn't match");
        assert.equal(certificates[0].issuerName, issuerName1, "Issuer name doesn't match");
        assert.equal(certificates[0].issuedToName, recipientName1, "Recipient name doesn't match");
        assert.equal(certificates[0].reason, reason1, "Reason doesn't match");
    });

    it("should allow issuing multiple certificates to different recipients", async () => {
        const certHash2 = "QmABC..."; // Replace with actual IPFS hash
        const issuerName2 = "University XYZ";
        const recipientName2 = "Jane Doe";
        const reason2 = "Honor Roll";

        // Issue a second certificate
        await certificateInstance.issueCertificate(
            recipient2,
            certHash2,
            issuerName2,
            recipientName2,
            reason2,
            { from: issuer }
        );

        // Get all certificates issued to recipient1
        const certificatesRecipient1 = await certificateInstance.getCertificates(recipient1);
        assert.equal(certificatesRecipient1.length, 1, "Recipient 1 should have one certificate");

        // Get all certificates issued to recipient2
        const certificatesRecipient2 = await certificateInstance.getCertificates(recipient2);
        assert.equal(certificatesRecipient2.length, 1, "Recipient 2 should have one certificate");

        // Verify the data for recipient2's certificate
        assert.equal(certificatesRecipient2[0].certHash, certHash2, "Certificate hash doesn't match for recipient 2");
        assert.equal(certificatesRecipient2[0].issuerName, issuerName2, "Issuer name doesn't match for recipient 2");
        assert.equal(certificatesRecipient2[0].issuedToName, recipientName2, "Recipient name doesn't match for recipient 2");
        assert.equal(certificatesRecipient2[0].reason, reason2, "Reason doesn't match for recipient 2");
    });

    it("should not allow non-issuer to issue certificates", async () => {
        try {
            await certificateInstance.issueCertificate(
                recipient1,
                "QmUnauthorized...",
                "Unauthorized Issuer",
                "Unauthorized Name",
                "Unauthorized Reason",
                { from: accounts[3] } // Another account trying to issue a certificate
            );
            assert.fail("The transaction should have thrown an error");
        } catch (err) {
            assert.include(err.message, "Only the issuer can issue certificates", "Wrong error message");
        }
    });
});
