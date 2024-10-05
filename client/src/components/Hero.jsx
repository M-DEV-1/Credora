import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons"; // Ensure this imports correctly
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Credora
            </span>{" "}
            - A Decentralised
          </h1>{" "}
          Certificate{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Verification
            </span>{" "}
            System
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Issue and verify your certificates securely and efficiently!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link to="/certificate-home">
            <Button className="w-full md:w-1/3 hover:text-primary border-spacing-2 hover:bg-white hover:border border-primary">
              Get Started
            </Button>
          </Link>
          <a
            href="https://github.com/M-DEV-1/Credora" // Replace with your actual GitHub repository link
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/3 inline-flex items-center justify-center border border-primary rounded-md p-2 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
          >
            <GitHubLogoIcon className="mr-2" />
            View on GitHub
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
