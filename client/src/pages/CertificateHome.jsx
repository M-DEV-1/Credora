import { Button } from "../components/ui/button";
import React, { useState, useEffect } from "react";
import getWeb3 from "../utils/web3.js"

function CertificateHome() {

  const [web3, setWeb3] = useState(null); //store web3 instance
  const [account, setAccount] = useState(null); //store the user's Metamask account
  const [error, setError] = useState(null); //store error wrt Metamask detection

  useEffect(() => {
    const initWeb3 = async () => {
      try {

        const web3Instance = await getWeb3();
        setWeb3(web3Instance);

        //get the user's Metamask account
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);

      } catch (err) {
        setError("Please install MetaMask or connect it to continue");
        console.error("Web3 loading error: ", err);
      }
    };

    initWeb3();
  }, []);

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

        {/* Error message if Metamask is not available */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Display connected account */}
        {
          account ? (
            <p className = "text-green-500"> Connected Account: {account} </p>
          ) : (
            !error && <p className="text-gray-500"> Connecting to MetaMask...</p>
          )
        }

        {/* <div className="shadow"></div> */}
        <div className="py-12 flex justify-center space-x-10"> {/* Changed this line */}
          <Button>
            View Certificates
          </Button>
          <Button>
            Issue Certificates
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CertificateHome;
