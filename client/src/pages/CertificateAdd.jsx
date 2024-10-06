import { Button } from "../components/ui/button";
import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { useLocation } from "react-router-dom"; // Import useLocation to access state
import withMetaMask from "../hoc/withMetaMask";

function CertificateAdd({ web3, account, error }) {
  const location = useLocation(); // Access location state
  const { instituteName } = location.state || {}; // Destructure instituteName from state
  const [enteredAddress, setEnteredAddress] = useState(""); // State to store entered address
  const [errorMessage, setErrorMessage] = useState(""); // State to store error messages
  const [issuedDate, setIssuedDate] = useState(""); // State for issued date

  // Set the issued date to the current date when the component mounts
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0]; // Format date to YYYY-MM-DD
    setIssuedDate(formattedDate);
  }, []); // Empty dependency array to run only on mount

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Compare entered address with MetaMask account address
    if (enteredAddress.toLowerCase() === account.toLowerCase()) {
      // If addresses match, proceed to add the certificate
      alert("Address matches. Proceed to add the certificate.");
      console.log("Certificate Issued Date:", issuedDate); // You can handle this accordingly
    } else {
      // Set an error message if addresses do not match
      setErrorMessage("The entered address does not match the connected MetaMask account.");
    }
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
              value={instituteName || ""} // Set value from passed state, default to empty if not provided
              readOnly // Make the input read-only
              placeholder="Institute Name*"
              className="border rounded h-12 w-[500px] p-3 text-gray-400 bg-gray-100"
              required
            />

            {/* Field to enter the institute address for comparison */}
            <p className="mt-3 text-xs text-gray-400 self-start md:ml-[435px] ml-28">
              Institute Account Address
            </p>
            <input
              type="text"
              id="enteredAddress"
              value={enteredAddress} // Link state to input value
              onChange={(e) => setEnteredAddress(e.target.value)} // Update state on input change
              placeholder="Enter Institute Account Address*"
              className="border rounded h-12 w-[500px] p-3"
              required
            />

            {/* Label and input for Recipient Name */}
            <p className="mt-3 text-xs text-gray-400 self-start md:ml-[435px] ml-28">
              Recipient Name
            </p>
            <input
              type="text"
              id="recipientName"
              placeholder="Recipient Name*"
              className="border rounded  h-12 w-[500px] p-3"
              required
            />

            {/* Label and input for Recipient Address */}
            <p className="mt-3 text-xs text-gray-400 self-start md:ml-[435px] ml-28">
              Recipient Address
            </p>
            <input
              type="text"
              id="recipientAddress"
              placeholder="Recipient Address*"
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
              <Button className="w-40" type="submit">
                Add Certificate
              </Button>
            </div>

            {/* Display error message if entered address doesn't match */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default withMetaMask(CertificateAdd);
