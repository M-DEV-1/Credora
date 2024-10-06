import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

function CertificateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  if (!certificate) {
    return <div>Certificate not found</div>;
  }

  return (
    <section className="container place-items-center gap-10 py-16 md:py-18 mb-4">
      <div text-center>
        <main className="text-3xl mb-16 md:text-3xl font-bold text-center">
          <h1>{certificate.name}</h1>
          <p>Issued on: {certificate.issued}</p>
          <p>{certificate.details}</p>
        </main>
        <div className="py-12 flex justify-center space-x-8">
          <Button  onClick={() => navigate(-1)}>Go Back</Button>
          <Button variant="outline" onClick={() => window.open(`/certificate/view/${id}`, "_blank")}>
            View in New Tab
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CertificateDetails;
