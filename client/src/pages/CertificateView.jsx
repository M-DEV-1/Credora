import { Button } from "../components/ui/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import withMetaMask from "../hoc/withMetaMask";
import loadContract from "../utils/loadContract"; 

function CertificateView({ web3, account, error }) {
  console.log("CertificateView Props:", { web3, account, error });
  const [inputValue, setInputValue] = useState(""); // State for the input field
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (event) => {
    setInputValue(event.target.value); // Update input value
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission 
    // Navigate to the CertificateDetails route with the inputValue as the ID
    if (inputValue.trim()) {
      const uniqueID = web3.utils.keccak256(inputValue); // Generate bytes32 from the certificate ID
      // Check if certificate exists
      const exists = await checkCertificateExists(uniqueID);
      if (exists) {
        navigate(`/certificate/details/${inputValue}`); // Redirect to CertificateDetails
      } else {
        alert("Certificate ID does not exist. Please enter a valid certificate ID.");
      }
    } else {
      alert("Please enter a valid certificate ID");
    }
  };

  const checkCertificateExists = async (uniqueID) => {
    try {
      const contract = await loadContract(web3, account); // Load contract
      const exists = await contract.certificateExists(uniqueID); // Assumes `certificateExists` checks existence
      return exists;
    } catch (err) {
      console.error("Error checking certificate existence: ", err);
      return false; // If there's an error, assume the certificate doesn't exist
    }
  };

  return (
    <section className="container place-items-center gap-10 py-16 md:py-20">
      <div className="text-center">

        {/* Display error message */}
        {error && <p className="text-red-500">{error}</p>}

        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            View{" "}
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Certificates
            </span>
          </h1>
        </main>
        <p className="text-xl text-muted-foreground mx-auto lg:mx-0 py-4">
          View certificates{" "}
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            securely
          </span>{" "}
          and{" "}
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            efficiently!
          </span>
        </p>

        {/* Form to capture the certificate ID */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={handleChange}
            placeholder="Certificate ID"
            className="border rounded mt-12 h-12 w-[570px] p-3"
          />
          <div className="py-8 flex justify-center space-x-10">
            <Button className="w-40" type="submit">Submit</Button>
          </div>
        </form>
        <div className="py-3">
          <p className="text-xl"><strong>Example Certificate ID:</strong>
            <span className="mt-4"> a3f1e9b7c2d8a4e1f6a9d8c7b4e3a2b1</span>
          </p>
        </div>

        {/* Display connected account */}
        {account ? (
          <p className="text-green-500 text-center mt-5"> <strong className="text-green-600">Connected Account:</strong> {account} </p>
        ) : (
          !error && <p className="text-gray-500 mt-5"> Connecting to MetaMask...</p>
        )}
      </div>
    </section>
  );
}

export default withMetaMask(CertificateView);
