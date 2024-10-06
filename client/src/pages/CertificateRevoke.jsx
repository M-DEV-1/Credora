import { Button } from "../components/ui/button";
import React, { useState, useEffect } from "react"; // Import useState for managing state
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import withMetaMask from "../hoc/withMetaMask";
import loadContract from "../utils/loadContract";

function CertificateRevoke({ web3, account, error }) {

    const [contract, setContract] = useState(null);
    const [certificateID, setCertificateID] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        //Load the smart contract once the component is mounted
        const loadSmartContract = async () => {
            if (web3 && account) {
                try {
                    const contractInstance = await loadContract(web3, account);
                    setContract(contractInstance);
                } catch (err) {
                    console.log("Failed to load contract:", err);
                }
            }
        };

        loadSmartContract();
    }, [web3, account]);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission 
        if (!certificateID || !contract) {
            alert("Please provide a valid Certificate ID and ensure the contract is loaded.");
            return;
        }
        try {
            setLoading(true);
            setStatus("");

            //call the revokeCertificate function from the contract 
            const tx = await contract.methods.revokeCertificate(certificateID, "Certificate revoked by institution.").send({ from: account });

            console.log("Transaction for Revoke: ", tx);
            setStatus(`Certificate successfully revoked! Transaction Hash: ${tx.transactionHash}`);
        } catch (err) {
            console.log("Error revoking certificate:", err);
            setStatus("Failed to revoke certificate. Make sure the certificate ID is correct");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container place-items-center gap-10 py-16 md:py-18 mb-4">
            <div className="text-center">
                <main className="text-5xl md:text-6xl font-bold">
                    <h1 className="inline">
                        <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                            Revoke
                        </span>{" "}
                        Certificates
                    </h1>
                </main>
                <p className="text-xl text-muted-foreground mx-auto lg:mx-0 py-4">
                    Input certificate ID to revoke{" "}
                    <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                        securely
                    </span>{" "}
                    and{" "}
                    <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                        efficiently!
                    </span>
                </p>

                {/* Wrap the input field and button inside a form */}
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input
                        type="text"
                        id="revokeID"
                        // onChange={handleUsernameChange} // Handle changes
                        value={certificateID} //// Link state to input value
                        onChange={(e) => setCertificateID(e.target.value)} // Handle changes
                        placeholder="Certificate ID*"
                        className="border rounded mt-12 h-12 w-[500px] p-3" // Add margin bottom for spacing
                        required
                    />

                    <p className="mt-3 text-xs text-gray-400 self-start md:ml-[435px] ml-28">Institute Account Address</p>
                    <input
                        type="text"
                        id="instituteID" // Updated id for username
                        value={account} // Set the default value to account
                        readOnly // Lock the input section
                        placeholder="Institute Account Address*"
                        className="border rounded h-12 w-[500px] p-3 text-gray-400 bg-gray-100" // Add margin bottom for spacing
                        required
                    />

                    <div className="py-8 flex text-center items-center justify-center space-x-10">
                        <Button className="w-40 p-6" type="submit" variant="destructive" disabled={loading}>
                            {loading ? "Revoking..." : "Revoke Certificate"}
                        </Button>
                    </div>

                    {/* Display connected account */}
                    {account ? (
                        <p></p>
                    ) : (
                        !error && <p className="text-gray-500"> Connecting to MetaMask...</p>
                    )}

                    {/* Feedback Status */}
                    {status && <p className="text-center mt-4">{status}</p>}
                </form>
            </div>
        </section>
    );
}

export default withMetaMask(CertificateRevoke);