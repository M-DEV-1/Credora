import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import CertificateHome from "./pages/CertificateHome";
import CertificateView from "./pages/CertificateView";
import CertificateIssue from "./pages/CertificateIssue";
import IssuedCertificates from "./pages/IssuedCertificates";
import CertificateDetails from "./pages/CertificateDetails"; 
import CertificateRevoke from "./pages/CertificateRevoke";
import CertificateAdd from "./pages/CertificateAdd";
import { AccountProvider } from "./components/AccountContext"; // Import AccountProvider
import "./App.css";
import "./index.css";
import withMetaMask from "./hoc/withMetaMask";

function App() {
  return (
    <AccountProvider> {/* Wrap everything with AccountProvider */}
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/certificate/home" element={<CertificateHome />} />
          <Route path="/certificate/view" element={<CertificateView />} />
          <Route path="/certificate/institute" element={<CertificateIssue />} />
          <Route path="/certificate/issued" element={<IssuedCertificates />} />
          <Route path="/certificate/view/:id" element={<CertificateDetails />} />
          <Route path="/certificate/revoke" element={<CertificateRevoke/>} />
          <Route path="/certificate/add" element={<CertificateAdd/>} />
        </Routes>
        <Footer/>
        <ScrollToTop/>
      </Router>
    </AccountProvider>
  );
}

export default App;
