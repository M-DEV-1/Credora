import { Button } from "../components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import withMetaMask from "../hoc/withMetaMask";

function CertificateHome({ web3, account, error }) {
  console.log("CertificateHome Props:", { web3, account, error });
  return (
    <section className="container place-items-center gap-10 py-16 md:py-20">
        
      <div className="text-center">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Welcome to{" "}
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Credora
            </span>
          </h1>
        </main>
        <p className="text-xl text-muted-foreground mx-auto lg:mx-0 py-4">
          Issue and verify your certificates{" "}
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            securely
          </span>{" "}
          and{" "}
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            efficiently!
          </span>
        </p>

        {/* Display error message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Display connected account */}
        {account ? (
          <p className="text-green-500 text-center"> <strong className="text-green-600">Connected Account:</strong> {account} </p>
        ) : (
          !error && <p className="text-gray-500"> Connecting to MetaMask...</p>
        )}
        
        {/* <div className="shadow"></div> */}
        <div className="py-12 flex justify-center space-x-10">
          {" "}
          {/* Changed this line */}
          <Link to="/certificate/view">
            <Button>View Certificates</Button>
          </Link>
          <Link to="/certificate/institute">
            <Button>Issue Certificates</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default withMetaMask(CertificateHome);
