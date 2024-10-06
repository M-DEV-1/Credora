import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import CertificateHome from "./pages/CertificateHome";
import CertificateView from "./pages/CertificateView";
import CertificateIssue from "./pages/CertificateIssue";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/certificate/home" element={<CertificateHome />} />
          <Route path="/certificate/view" element={<CertificateView />} />
          <Route path="/certificate/issue" element={<CertificateIssue />} />
        </Routes>
        <Footer/>
        <ScrollToTop/>
      </Router>
    </>
  );
}

export default App;

{
  /* <>
  <Navbar />
  <LandingPage />
</>; */
}
{
  /* <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/certificate-home" element={<CertificateHome />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router> */
}
