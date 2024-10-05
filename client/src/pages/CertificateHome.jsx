import { Button } from "../components/ui/button";
import React from "react";

function CertificateHome() {
  return (
    <section className="container place-items-center gap-10 py-16 md:py-20">
      <div className="text-center">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Welcome to{" "}
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Credora
            </span>
          </h1>
        </main>
        <p className="text-xl text-muted-foreground mx-auto lg:mx-0 py-4">
          Issue and verify your certificates{" "}
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            securely
          </span>{" "}
          and{" "}
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            efficiently!
          </span>
        </p>
        {/* <div className="shadow"></div> */}
        <div className="py-12 flex justify-center space-x-10"> {/* Changed this line */}
          <Button>
            View Certificates
          </Button>
          <Button>
            Issue Certificates
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CertificateHome;
