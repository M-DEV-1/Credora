import React from 'react';
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";  // Image for AI-Powered insights
import image3 from "../assets/reflecting.png"; // Image for Intuitive user interface
import image4 from "../assets/looking-ahead.png"; // Image for Responsive Design

const features = [
  {
    title: "Secure Certificate Issuance",
    description:
      "Utilize blockchain technology to issue certificates securely and transparently, ensuring authenticity.",
    image: image4,
  },
  {
    title: "User-Friendly Interface",
    description:
      "Our intuitive interface makes it easy for both issuers and recipients to navigate the platform effortlessly.",
    image: image3,
  },
  {
    title: "Real-Time Verification",
    description:
      "Certificates can be verified instantly using the recipient's address or certificate ID, enhancing trust.",
    image: image,
  },
];

const featureList = [
  "Blockchain Technology",
  "Instant Verification",
  "Secure Storage",
  "User-Friendly Design",
  "Cross-Platform Access",
  "Minimalist Interface",
  "Mobile Compatibility",
  "Data Privacy",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm hover:scale-105 transition-transform ease-in-out hover:bg-primary hover:text-white">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }) => (
          <Card key={title} className="hover:scale-105 transition-transform hover:shadow-md">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt={title} // Changed to dynamic alt text
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
