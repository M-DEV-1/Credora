import { Button } from "../components/ui/button";
import React, { useState } from "react"; // Import useState for managing state
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

function CertificateView() {
  const [inputValue, setInputValue] = useState(""); // State for the input field
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (event) => {
    setInputValue(event.target.value); // Update input value
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (inputValue) {
      // Navigate to the certificate details page with the input value
      navigate(`/certificate/view/${inputValue}`);
    } else {
      alert("Please enter a valid Certificate ID");
    }
  };

  return (
    <section className="container place-items-center gap-10 py-16 md:py-20">
      <div className="text-center">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            View{" "}
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Certificates
            </span>
          </h1>
        </main>
        <p className="text-xl text-muted-foreground mx-auto lg:mx-0 py-4">
          View certificates{" "}
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            securely
          </span>{" "}
          and{" "}
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            efficiently!
          </span>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={handleChange}
            placeholder="Certificate ID"
            className="border rounded mt-12 h-12 w-[570px] p-3" // Add margin bottom for spacing
          />
          <div className="py-8 flex justify-center space-x-10">
            <Button className="w-40" type="submit">Submit</Button>
          </div>
        </form>

        <div className="py-3">
          <p className="font-bold text-xl">This is what a Certificate Hash looks like:</p>
          <p className="mt-4">4027181f1b5ab220b4fcab3ed178149338cb5916629c92efdd8c2a32d4adb999</p>
        </div>
      </div>
    </section>
  );
}

export default CertificateView;
