import React, { useState, useEffect } from "react";
import getWeb3 from "../utils/web3.js";
import metamaskError from "/metamask-error.png";

const withMetaMask = (WrappedComponent) => {
  return function MetaMaskWrapper(props) {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleAccountsChanged = (accounts) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        setError("Please connect to MetaMask.");
        setAccount(null);
      }
    };

    useEffect(() => {
      const initWeb3 = async () => {
        setLoading(true);
        const web3Instance = await getWeb3();

        if (!web3Instance) {
          setError("Please install MetaMask or accept the connection request.");
          setLoading(false);
          return;
        }

        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.getAccounts();

        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const newAccounts = await web3Instance.eth.getAccounts();
            if (newAccounts.length > 0) {
              setAccount(newAccounts[0]);
            } else {
              setError("Please connect to MetaMask.");
            }
          } catch (err) {
            setError("User denied account access.");
          }
        }

        window.ethereum.on('accountsChanged', handleAccountsChanged);
        setLoading(false);
      };

      initWeb3();

      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      };
    }, []);

    // Render loading message
    if (loading) {
      return (
        <div className="text-gray-500 text-2xl font-semibold font-mono text-center md:mt-16 md:mb-16 mt-16 mb-16">
          <p>Connecting to MetaMask...</p>
          <img src={metamaskError} alt="Metamask Error" className="mt-12 w-full h-auto object-contain px-24 md:h-[500px]" />
        </div>
      );
    }

    // Render error message if any
    if (error) {
      return (
        <div className="text-red-500 text-2xl font-semibold font-mono text-center md:mt-16 md:mb-16 mt-16 mb-16">
          <p>{error}</p>
          <img src={metamaskError} alt="Metamask Error" className="mt-12 w-full h-auto object-contain px-24 md:h-[500px]" />
        </div>
      );
    }

    console.log("State in HOC:", { web3, account, error, loading });

    // Pass web3, account, and error to the wrapped component
    return <WrappedComponent web3={web3} account={account} error={error} {...props} />;
  };
};

export default withMetaMask;
