import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/card"; // Import Card components
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> {/* Grid layout for cards */}
            {certificates.map(cert => (
              <Link to={`/certificate/view/${cert.id}`} key={cert.id} className="no-underline">
                <Card className="hover:scale-105 transition-transform duration-300 hover:border-primary hover:shadow-md hover:shadow-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">{cert.name}</CardTitle>
                    <CardDescription className="text-md mt-2">Click to view details</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="py-12 flex justify-center space-x-8">
        <Button className="w-40">Issue Certificates</Button>
        <Button className="w-40" variant="destructive">Revoke Certificate</Button>
      </div>
    </section>
  );
}

export default IssuedCertificates;
