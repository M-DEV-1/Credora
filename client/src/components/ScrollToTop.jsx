import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUpToLine } from "lucide-react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when scrolled more than 400px
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          className="fixed bottom-6 right-6 opacity-90 shadow-md bg-primary text-white hover:bg-primary/80 transition-colors duration-200 ease-in-out" // Updated styling
          size="icon"
          aria-label="Scroll to top" // Accessibility improvement
        >
          <ArrowUpToLine className="h-5 w-5" /> {/* Increased icon size for better visibility */}
        </Button>
      )}
    </>
  );
};
