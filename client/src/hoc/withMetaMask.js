// src/hoc/withMetaMask.js
import React, { useState, useEffect } from "react";
import getWeb3 from "../utils/web3.js";

const withMetaMask = (WrappedComponent) => {
  return function MetaMaskWrapper(props) {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      const initWeb3 = async () => {
        try {
          const web3Instance = await getWeb3();
          setWeb3(web3Instance);
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
        } catch (err) {
          setError("Please install MetaMask or connect it to continue");
        }
      };
      initWeb3();
    }, []);

    // Render a loading or error message if there's no connection
    if (error) {
      return <div className="text-red-500">{error}</div>;
    }

    if (!account) {
      return <div className="text-gray-500">Connecting to MetaMask...</div>;
    }

    // Pass web3 and account as props to the wrapped component
    return <WrappedComponent web3={web3} account={account} {...props} />;
  };
};

export default withMetaMask;
