import React from 'react';
import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png"; // Update with a relevant image for Credora

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-gray-100/50 border border-gray-300 rounded-lg py-12 shadow-md hover:shadow-lg transition-transform hover:scale-105">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot} // Consider using an image that represents your certificate concept
            alt="Certificate Pilot"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-green-400 to-blue-500 text-transparent bg-clip-text">
                  About{" "}
                </span>
                Credora
              </h2>
              <p className="text-xl text-gray-700 mt-4">
                Credora is dedicated to revolutionizing the way certificates are issued and managed using blockchain technology. 
                We aim to provide a secure, transparent, and efficient solution for educational institutions and organizations to issue verifiable certificates.
              </p>
            </div>
            <Statistics /> {/* Assuming this component shows key stats relevant to your project */}
          </div>
        </div>
      </div>
    </section>
  );
};
