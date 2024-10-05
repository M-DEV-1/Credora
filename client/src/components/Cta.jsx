import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            Empower Your Achievements with
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Credora Certificates{" "}
            </span>
            in One Simple Interface
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Experience the ease of issuing and verifying certificates on the
            blockchain. Join the future of credentialing today!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Link to="/certificate-home">
            <Button className="w-full md:mr-4 md:w-auto">
              Get Started Now
            </Button>
          </Link>
          
          <Button variant="outline" className="w-full md:w-auto">
            {" "}
            Explore Features
          </Button>
        </div>
      </div>
    </section>
  );
};
