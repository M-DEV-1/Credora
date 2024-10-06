import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import withMetaMask from "../hoc/withMetaMask";
import loadContract from "../utils/loadContract";

function CertificateDetails({ web3, account, error }) {
  const { id } = useParams(); // Get the certificate ID from the URL
  const navigate = useNavigate();
  const location = useLocation(); // Access the location object

  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [isError, setIsError] = useState(false); // State to handle error

  const demoCertificates = {
    1: {
      name: "Certificate of Completion",
      issued: "2024-01-01",
      details: "Details about Certificate",
      nameto: "Elon Musk",
      certID: "a3f1e9b7c2d8a4e1f6a9d8c7b4e3a2b1",
    },
    2: {
      name: "Certificate of Achievement",
      issued: "2024-02-01",
      details: "Details about Certificate",
      nameto: "John Yadav",  
      certID: "a3f1e9b7c2d8a4e1f6a9d8c7b4e3a2b1"
    },
    3: {
      name: "Certificate of Participation",
      issued: "2024-03-01",
      details: "Details about Certificate",
      nameto: "Smith Choudhary",
      certID: "a3f1e9b7c2d8a4e1f6a9d8c7b4e3a2b1"
    },
  };

  const getDemoCertificate = (id) => {
    return demoCertificates[id] || null;
  };

  useEffect(() => {
    const fetchCertificateDetails = async () => {
      setLoading(true);
      try {
        const contract = await loadContract(web3, account); // Load contract
        const uniqueID = web3.utils.keccak256(id); // Generate bytes32 from the certificate ID

        const demoData = getDemoCertificate(id);
        if (demoData) {
          setCertificateData(demoData);
          setAlertMessage("Demo certificate found!");
          setIsError(false);
        } else {
          const [isValid, data] = await contract.verifyCertificate(uniqueID);
          if (isValid) {
            setCertificateData(data);
            setAlertMessage("Certificate exists!");
            setIsError(false);
          } else {
            setAlertMessage("Certificate does not exist!");
            setIsError(true);
          }
        }
      } catch (err) {
        console.error("Error fetching certificate details: ", err);
        setAlertMessage("Failed to fetch certificate details.");
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificateDetails();
  }, [id, web3, account]);

  // Check for error message from location state
  useEffect(() => {
    if (location.state && location.state.error) {
      setAlertMessage(location.state.error);
      setIsError(true);
    }
  }, [location.state]);

  if (loading) {
    return <p>Loading...</p>; // Loading state
  }

  // Display failure message if certificate data is null
  if (!certificateData && isError) {
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

  // Display certificate details if found
  return (
    <section className="container place-items-center gap-8 py-16 md:py-20 mb-4">
      <div className="text-center">
        {alertMessage && !isError && (
          <div className="bg-green-100 text-green-700 mt-5 px-4 py-3 rounded relative mb-8">
            <strong className="font-bold">Success! </strong>
            <span className="block sm:inline">{alertMessage}</span>
          </div>
        )}
      </div>

      {/* Certificate Card */}
      {certificateData && (
        <div className="flex justify-center py-20 bg-gray-100">
          <div className="flex flex-col items-center w-full max-w-2xl pt-10 pb-10 px-10 rounded-lg shadow-lg bg-white">
            <hr className="w-full border-t-2 border-gray-300 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Certificate Details</h2>
            <p className="text-lg mb-2">
              <span className="font-semibold">Certificate ID: </span>
              {certificateData.certID}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">Name:</span> {certificateData.name}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">Issued On:</span>{" "}
              {certificateData.issued}
            </p>
            <p className="text-lg mb-4">
              <span className="font-semibold">Issued To:</span>{" "}
              {certificateData.nameto}
            </p>
            <p className="text-lg mb-4">
              <span className="font-semibold">Details: </span>
              {certificateData.details}
            </p>
            <hr className="w-full border-t-2 border-gray-300 mt-3" />
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="py-6 flex justify-center space-x-8">
        <Button onClick={() => navigate(-1)} className="w-40">
          Go Back
        </Button>
      </div>

      {/* Display connected account */}
      {account ? (
        <p className="text-green-500 text-center">
          <strong className="text-green-600">Connected Account:</strong>{" "}
          {account}{" "}
        </p>
      ) : (
        !error && <p className="text-gray-500">Connecting to MetaMask...</p>
      )}
    </section>
  );
}

export default withMetaMask(CertificateDetails);
