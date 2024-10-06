import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";


function CertificateDetails() {
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
      setAlertMessage(`Certificate with ID ${id} exists!`);
    } else {
      setCertificateExists(false);
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
    return <div>Certificate not found</div>;
  }

  return (
    <section className="container place-items-center gap-10 py-16 md:py-18 mb-4">
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
      </div>
    </section>
  );
}

export default CertificateDetails;
