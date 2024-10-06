import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import withMetaMask from "../hoc/withMetaMask";

function CertificateDetails({ web3, account, error }) {
  console.log("CertificateDetails Props:", { web3, account, error });
  const { id } = useParams(); // Get the certificate ID from the URL
  const navigate = useNavigate();

  const [certificateExists, setCertificateExists] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showNewTabButton, setShowNewTabButton] = useState(true); // Show the button initially

  // Example certificate data - replace with a fetch call to your API
  const certificates = {
    1: {
      name: "Certificate A",
      issued: "2024-01-01",
      details: "Details about Certificate A",
    },
    2: {
      name: "Certificate B",
      issued: "2024-02-01",
      details: "Details about Certificate B",
    },
  };

  const certificate = certificates[id];

  // Set certificateExists to true if the certificate exists
  useEffect(() => {
    if (certificate) {
      setCertificateExists(true);
      setAlertMessage(`Certificate exists!`);
    } else {
      setCertificateExists(false);
      setAlertMessage(`Certificate does not exist!`);
    }

    // Check if this page was opened as a new tab by using a localStorage flag
    const isNewTab = localStorage.getItem("openedInNewTab") === "true";
    if (isNewTab) {
      setShowNewTabButton(false); // Hide the button in the new tab
    }
  }, [id, certificate]);

  const handleViewInNewTab = () => {
    localStorage.setItem("openedInNewTab", "true"); // Set flag to indicate a new tab is opened
    window.open(`/certificate/view/${id}`, "_blank");
  };

  useEffect(() => {
    return () => {
      // Clean up the localStorage flag when the component unmounts (for example, when the tab is closed)
      localStorage.removeItem("openedInNewTab");
    };
  }, []);

  if (!certificate) {
    return (
      <div className="text-2xl font-semibold font-mono text-center md:mt-16 md:mb-16 mt-16 mb-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">Failure! </strong>
          <span className="block sm:inline">{alertMessage}</span>
        </div>
        <Button onClick={() => navigate(-1)} className="mt-12">
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <section className="container place-items-center gap-10 py-16 md:py-18 mb-4">
      {/* Display error message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="text-center">
        {certificateExists && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">Success! </strong>
            <span className="block sm:inline">{alertMessage}</span>
          </div>
        )}

        <main className="text-3xl mb-16 md:text-3xl font-bold text-center">
          <h1>{certificate.name}</h1>
          <p>Issued on: {certificate.issued}</p>
          <p>{certificate.details}</p>
        </main>
        <div className="py-12 flex justify-center space-x-8">
          <Button onClick={() => navigate(-1)}>Go Back</Button>
          {/* Show the button only if it's not a new tab */}
          {showNewTabButton && (
            <Button variant="outline" onClick={handleViewInNewTab}>
              View in New Tab
            </Button>
          )}
        </div>

        {/* Display connected account */}
        {account ? (
          <p className="text-green-500 text-center mb-5">
            {" "}
            <strong className="text-green-600">Connected Account:</strong>{" "}
            {account}{" "}
          </p>
        ) : (
          !error && <p className="text-gray-500"> Connecting to MetaMask...</p>
        )}
      </div>
    </section>
  );
}

export default withMetaMask(CertificateDetails);
