import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"; // Import Card components
import React, { useState } from "react";
import withMetaMask from "../hoc/withMetaMask";

function CertificateAdd({ web3, account, error }) {
  const [enteredAddress, setEnteredAddress] = useState(""); // State to store entered address
  const [errorMessage, setErrorMessage] = useState(""); // State to store error messages

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Compare entered address with MetaMask account address
    if (enteredAddress.toLowerCase() === account.toLowerCase()) {
      // If addresses match, proceed to add the certificate
      // Navigate to the certificate add page or perform any additional logic here
      // For demonstration purposes, we'll display an alert
      alert("Address matches. Proceed to add the certificate.");
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
            Add{" "}
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
            <input
              type="text"
              id="instituteName"
              placeholder="Institute Name*"
              className="border rounded mt-12 h-12 w-[500px] p-3"
              required
            />

            {/* Display MetaMask account address */}
            {/* <p className="mt-3 text-xs text-gray-400 self-start md:ml-[435px] ml-28">
              Institute Account Address
            </p>
            <input
              type="text"
              id="instituteID"
              value={account} // Set value from MetaMask account
              readOnly
              placeholder="Institute Account Address*"
              className="border rounded h-12 w-[500px] p-3 text-gray-400 bg-gray-100"
              required
            /> */}

            {/* Field to enter the institute address for comparison */}
            <p className="mt-3 text-xs text-gray-400 self-start md:ml-[435px] ml-28">
              Enter Institute Account Address for Verification
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

            {/* Other form fields */}
            <input
              type="text"
              id="institute"
              placeholder="Institute Abbreviation*"
              className="border rounded mt-4 h-12 w-[500px] p-3"
              required
            />
            <input
              type="text"
              id="instituteLink"
              placeholder="Institute Website*"
              className="border rounded mt-4 h-12 w-[500px] p-3"
              required
            />

            <div className="py-12 flex justify-center space-x-8">
              <Button className="w-40" type="submit">
                Add Certificate
              </Button>
            </div>

            {/* Display error message if addresses don't match */}
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>

      {/* Display connected MetaMask account status */}
      {account ? (
        <p className="text-green-500 text-center">
          <strong className="text-green-600">Connected Account:</strong> {account}
        </p>
      ) : (
        !error && (
          <p className="text-gray-500 text-center">Connecting to MetaMask...</p>
        )
      )}
    </section>
  );
}

export default withMetaMask(CertificateAdd);
