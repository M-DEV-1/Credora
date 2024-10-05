import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.jsx";

const FAQList = [
  {
    question: "Is Credora free to use?",
    answer: "Yes, Credora allows users to issue and verify limited certificates for free on our platform.",
    value: "item-1",
  },
  {
    question: "How do I issue a certificate?",
    answer:
      "To issue a certificate, fill out the Certificate Form with the recipient's details, upload any relevant files, and submit. Your certificate will be securely stored on the blockchain.",
    value: "item-2",
  },
  {
    question: "Can I verify a certificate?",
    answer:
      "Yes, you can verify any certificate issued through Credora by entering the recipient's address or certificate ID on our verification page.",
    value: "item-3",
  },
  {
    question: "What type of certificates can I issue?",
    answer: "Credora allows you to issue a variety of certificates, including educational credentials, achievement certificates, and more.",
    value: "item-4",
  },
  {
    question: "What if I need support?",
    answer:
      "If you have any questions or need assistance, feel free to contact us through our support page. We're here to help!",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
