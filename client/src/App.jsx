// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CertificateForm from './components/CertificateForm';
import CertificateList from './components/CertificateList';

function App({ web3, contract, account }) {
    return (
        <Router>
            <div className="container mx-auto p-4">
                <nav>
                    <ul className="flex space-x-4 mb-4">
                        <li>
                            <Link to="/issue" className="text-blue-500">Issue Certificate</Link>
                        </li>
                        <li>
                            <Link to="/list" className="text-blue-500">View Certificates</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/issue" element={<CertificateForm web3={web3} contract={contract} account={account} />} />
                    <Route path="/list" element={<CertificateList web3={web3} contract={contract} account={account} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
