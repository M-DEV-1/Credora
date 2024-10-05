import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CertificateHome } from "./pages/CertificateHome";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/certificate-home" element={<CertificateHome />}></Route>
        </Routes>
        <About />
        <HowItWorks />
        <Features />
        <Services />
        <Cta />
        <Testimonials />
        <Team />
        <Pricing />
        <Newsletter />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </Router>
    </>
  );
}
export default App;
