import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    console.log("Subscribed to the newsletter with email:", email);
    setIsSubmitted(true);
    setError(""); // Clear any previous error
    setEmail(""); // Clear the input field
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join Our Daily{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Newsletter
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Subscribe to receive updates directly in your inbox!
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="elonmusk@gmail.com"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>

        {isSubmitted && (
          <p className="text-center mt-4 text-green-500">
            Thank you for subscribing!
          </p>
        )}
        {error && (
          <p className="text-center mt-4 text-red-500">
            {error}
          </p>
        )}
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
