const Certificate = artifacts.require("Certificate");

contract("Certificate", accounts => {
    let certificateInstance;
    const issuer = accounts[0];
    const recipient = accounts[1];

    before(async () => {
        certificateInstance = await Certificate.deployed();
    });

    it("should set the correct issuer", async () => {
        const contractIssuer = await certificateInstance.issuer();
        assert.equal(contractIssuer, issuer, "Issuer was not set correctly");
    });

    it("should issue a certificate", async () => {
        const certHash = "QmXYZ..."; // Replace with actual IPFS hash
        const issuerName = "University ABC";
        const recipientName = "John Doe";
        const reason = "Course Completion";

        const tx = await certificateInstance.issueCertificate(
            recipient,
            certHash,
            issuerName,
            recipientName,
            reason,
            { from: issuer }
        );

        // Verify the event was emitted
        assert.equal(tx.logs[0].event, "CertificateIssued", "CertificateIssued event should be emitted");
        
        // Get the certificate and verify its data
        const certificates = await certificateInstance.getCertificates(recipient);
        assert.equal(certificates[0].certHash, certHash, "Certificate hash doesn't match");
        assert.equal(certificates[0].issuerName, issuerName, "Issuer name doesn't match");
        assert.equal(certificates[0].issuedToName, recipientName, "Recipient name doesn't match");
        assert.equal(certificates[0].reason, reason, "Reason doesn't match");
    });

    it("should not allow non-issuer to issue certificates", async () => {
        try {
            await certificateInstance.issueCertificate(
                recipient,
                "QmABC...",
                "Unauthorized Issuer",
                "Jane Doe",
                "Invalid Certificate",
                { from: accounts[2] }
            );
            assert.fail("The transaction should have thrown an error");
        } catch (err) {
            assert.include(err.message, "Only the issuer can issue certificates", "Wrong error message");
        }
    });
});