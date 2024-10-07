import { Button } from "../components/ui/button";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import withMetaMask from "../hoc/withMetaMask";
import loadContract from "../utils/loadContract.js";

function CertificateAdd({ web3, account, error }) {
  const location = useLocation(); // Access location state
  const [errorMessage, setErrorMessage] = useState(""); // State to store error messages
  const [issuedDate, setIssuedDate] = useState(""); // State for issued date
  const [recipientName, setRecipientName] = useState(""); // State for recipient name
  const [recipientAddress, setRecipientAddress] = useState(""); // State for recipient address
  const [reason, setReason] = useState(""); // State for reason
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status
  const [certificateID, setCertificateID] = useState(""); // State to store CertificateID

  // Set the issued date to the current date when the component mounts
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0]; // Format date to YYYY-MM-DD
    setIssuedDate(formattedDate);
  }, [account]); // Add account as a dependency to run when it changes

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);

    // Call the smart contract function to issue the certificate
    try {
      // Load smart contract
      const contract = await loadContract(web3, account);

      // Call the smart contract function to issue the certificate and capture the CertificateID
      const tx = await contract.methods.issueCertificate(recipientAddress, account, recipientName, reason).send({ from: account, gas: 4000000 });

      // Get the CertificateID from the transaction receipt or event logs (if applicable)
      const certificateID = tx.events.IssueCertificate.returnValues.uniqueID;

      console.log("Transaction Successful!");
      alert("Certificate added successfully! Certificate ID: " + certificateID);
      setCertificateID(certificateID); // Store the CertificateID

    } catch (err) {
      console.log("Error adding certificate: ", err);
      const revertReason = err.message.includes("revert") ? err.message.split(": ")[1] : "Unknown error";
      setErrorMessage(`Failed to add certificate: ${revertReason}`);
    }

    setIsSubmitting(false);
  };

  return (
    <section className="container place-items-center gap-10 py-16 md:py-12 mb-0">
      <div className="text-center">
        <main className="text-5xl mb-6 md:text-6xl font-bold">
          <h1 className="inline">
            Issue{" "}
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Certificate
            </span>
          </h1>
        </main>
        {/* Display error message if there is an issue with MetaMask connection */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="text-center">
          {/* Form to capture certificate details */}
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <p className="mt-3 text-xs text-gray-400 self-start md:ml-[435px] ml-28">
              Institute Name
            </p>
            <input
              type="text"
              id="instituteName"
              placeholder="Institute Name*"
              className="border rounded h-12 w-[500px] p-3"
              required
            />

            {/* Field to enter the institute address for comparison */}
            <p className="mt-3 text-xs text-gray-400 self-start md:ml-[435px] ml-28">
              Institute Account Address
            </p>
            <input
              type="text"
              id="enteredAddress"
              value={account}
              placeholder="Institute Account Address*" // Default placeholder to account address
              className="border rounded h-12 w-[500px] p-3 text-gray-400 bg-gray-100"
              readOnly
              required
            />

            {/* Label and input for Recipient Name */}
            <p className="mt-3 text-xs text-gray-400 self-start md:ml-[435px] ml-28">
              Recipient Name
            </p>
            <input
              type="text"
              id="recipientName"
              value={recipientName} // Link state to input value
              onChange={(e) => setRecipientName(e.target.value)} // Update state on input change
              placeholder="Recipient Name*"
              className="border rounded h-12 w-[500px] p-3"
              required
            />

            {/* Label and input for Recipient Address */}
            <p className="mt-3 text-xs text-gray-400 self-start md:ml-[435px] ml-28">
              Recipient Address
            </p>
            <input
              type="text"
              id="recipientAddress"
              value={recipientAddress} // Link state to input value
              onChange={(e) => setRecipientAddress(e.target.value)} // Update state on input change
              placeholder="Recipient Address*"
              className="border rounded h-12 w-[500px] p-3"
              required
            />

            {/* New input for Reason */}
            <p className="mt-3 text-xs text-gray-400 self-start md:ml-[435px] ml-28">
              Reason
            </p>
            <input
              type="text"
              id="reason"
              value={reason} // Link state to input value
              onChange={(e) => setReason(e.target.value)} // Update state on input change
              placeholder="Reason*"
              className="border rounded h-12 w-[500px] p-3"
              required
            />

            {/* Automatically populated issued date */}
            <p className="mt-3 text-xs text-gray-400 self-start md:ml-[435px] ml-28">
              Issued Date
            </p>
            <input
              type="text"
              id="issuedDate"
              value={issuedDate} // Set value from state
              readOnly
              placeholder="Issued Date*"
              className="border rounded h-12 w-[500px] p-3 text-gray-400 bg-gray-100"
              required
            />

            <div className="py-12 flex justify-center space-x-8">
              <Button className="w-40" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Adding..." : "Add Certificate"}
              </Button>
            </div>

            {/* Display error message if there is an issue */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            {/* Display the Certificate ID if available */}
            {certificateID && (
              <div className="text-green-500 mt-4">
                <p>Certificate ID: {certificateID}</p>
                <button
                  className="mt-2 text-blue-500 underline"
                  onClick={() => navigator.clipboard.writeText(certificateID)}>
                  Copy to clipboard
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default withMetaMask(CertificateAdd);
