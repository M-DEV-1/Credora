const CertificateIssuer = artifacts.require("CertificateIssuer");

contract("CertificateIssuer", accounts => {
    let certificateIssuer;

    before(async () => {
        certificateIssuer = await CertificateIssuer.deployed();
    });

    it("should issue a certificate", async () => {
        const certHash = "QmXyz"; // IPFS hash
        const issuerName = "Credora University";
        const issuedTo = accounts[1];
        const issuedToName = "John Doe";
        const reason = "Graduation";

        await certificateIssuer.issueCertificate(certHash, issuerName, issuedTo, issuedToName, reason);

        const certificate = await certificateIssuer.getCertificate(1);
        assert.equal(certificate.certHash, certHash);
        assert.equal(certificate.issuerName, issuerName);
        assert.equal(certificate.issuedTo, issuedTo);
        assert.equal(certificate.issuedToName, issuedToName);
        assert.equal(certificate.reason, reason);
    });
});
