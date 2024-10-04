const Certificate = artifacts.require("Certificate");

contract("Certificate", accounts => {
    let certificate;

    before(async () => {
        certificate = await Certificate.deployed();
    });

    it("should issue a certificate", async () => {
        const certHash = "QmXyz"; // Example IPFS hash
        const issuerName = "Credora University";
        const issuedTo = accounts[1]; // The address to issue the certificate to
        const issuedToName = "John Doe";
        const reason = "Graduation";

        await certificate.issueCertificate(issuedTo, certHash, issuerName, issuedToName, reason);

        const certificates = await certificate.getCertificates(issuedTo);
        assert.equal(certificates.length, 1); // Check if one certificate was issued

        const issuedCertificate = certificates[0];
        assert.equal(issuedCertificate.certHash, certHash);
        assert.equal(issuedCertificate.issuerName, issuerName);
        assert.equal(issuedCertificate.issuedTo, issuedTo);
        assert.equal(issuedCertificate.issuedToName, issuedToName);
        assert.equal(issuedCertificate.reason, reason);
    });
});
