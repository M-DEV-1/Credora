import React, { createContext, useContext, useState } from "react";

// Create a context for the account
const AccountContext = createContext();

// Create a provider component
export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(""); // Set initial account state to an empty string

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
};

// Custom hook to use the AccountContext
export const useAccount = () => {
  return useContext(AccountContext);
};
