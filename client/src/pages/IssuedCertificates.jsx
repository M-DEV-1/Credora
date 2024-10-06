import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import React from "react";

// Dummy data for demonstration purposes
const certificates = [
  { id: 1, name: "Certificate of Completion - Course A" },
  { id: 2, name: "Certificate of Achievement - Course B" },
  { id: 3, name: "Certificate of Excellence - Course C" },
  // Add more certificates as needed
];

function IssuedCertificates() {
  return (
    <section className="container place-items-center gap-10 py-16 md:py-18 mb-4">
      <div className="text-center">
        <main className="text-5xl mb-16 md:text-6xl font-bold">
          <h1 className="inline">
            Issued{" "}
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Certificates
            </span>
          </h1>
        </main>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-4">Existing Certificates:</h2>
          <ul className="list-disc list-inside">
          {certificates.map(cert => (
          <li key={cert.id}>
            <Link to={`/certificate/${cert.id}`}>{cert.name}</Link>
          </li>
        ))}
          </ul>
        </div>
      </div>
      <div className="py-12 flex justify-center space-x-8">
          {" "}
          {/* Changed this line */}
          {/* <Link to="/certificate/view"> */}
            <Button className="w-40">Issue Certificates</Button>
          {/* </Link> */}
          {/* <Link to="/certificate/issue"> */}
            <Button className="w-40"  variant="destructive">Revoke Certificate</Button>
          {/* </Link> */}
        </div>
    </section>
    
  );
}

export default IssuedCertificates;
