# Credora: Decentralized Certificate Verification System

## Overview

**Credora** is a decentralized certificate verification platform designed specifically for educational institutions. It enables the secure issuance of digital certificates on the Ethereum blockchain, streamlining the verification process for employers and institutions while eliminating reliance on traditional background checks.

## Live Demo

Powerpoint Presentation: https://drive.google.com/file/d/15vEaewEvpACTD3X47PwQbk2o_H8waVrj/view?usp=sharing <br/>

Live Deployment: https://credora-chi.vercel.app/

## How to Run

To set up Credora locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://www.github.com/M-DEV-1/Credora.git
   ```

2. **Install Backend Dependencies:**
   ```bash
   npm install
   ```

3. **Navigate to the Client Directory:**
   ```bash
   cd client
   ```

4. **Install Client Dependencies:**
   ```bash
   npm install
   ```

5. **Run the Development Server:**
   ```bash
   npm run dev
   ```

6. **Check for Issues:**  
   Ensure everything is configured correctly with no errors.

7. **Compile and Migrate Contracts:**
   ```bash
   cd ..
   truffle compile
   truffle migrate --network development
   ```

8. **Run Tests:**
   ```bash
   truffle test
   ```

## Features

- **Secure Certificate Issuance:** Educational institutions can issue certificates that are tamper-proof and stored directly on the blockchain.
  
- **Instant Verification:** Employers can verify the authenticity of certificates instantly without intermediaries.

- **User-Friendly Interface:** Developed using React and Tailwind CSS, providing an intuitive user experience.

- **Ethereum Integration:** Utilizes the Ethereum blockchain for secure and decentralized certificate storage.

## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Blockchain:** Ethereum
- **Development Tools:** Ganache, Truffle
- **Web3:** Web3.js for interaction with the Ethereum network

---
