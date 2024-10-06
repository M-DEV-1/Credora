import React from 'react';
import { LogoIcon } from "./Icons.jsx";

const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-18 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            Credora
          </a>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/M-DEV-1" // Change to your GitHub
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/mahadevan__ks" // Change to your Twitter
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/ksmahadevan" // Change to your LinkedIn
              className="opacity-60 hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg">About Credora</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing" // Update to your pricing page
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-6 text-center">
        <h3>
          &copy; 2024 Credora | Made by Team TwentyOne
        </h3>
      </section>
    </footer>
  );
};

export default Footer;