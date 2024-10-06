import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Check } from "lucide-react";

const PopularPlanType = {
  NO: 0,
  YES: 1,
};

const pricingList = [
  {
    title: "Basic Institution",
    popular: PopularPlanType.NO,
    price: 0,
    description:
      "Ideal for small institutions to manage their operations effectively.",
    buttonText: "Get Started",
    benefitList: [
      "Up to 5 users",
      "1 GB Storage",
      "Basic reporting tools",
      "Community support",
      "Compliance assistance",
    ],
  },
  {
    title: "Professional Institution",
    popular: PopularPlanType.YES,
    price: 15,
    description:
      "Comprehensive features for medium to large institutions with advanced needs.",
    buttonText: "Start Free Trial",
    benefitList: [
      "Up to 20 users",
      "5 GB Storage",
      "Advanced reporting tools",
      "Priority support",
      "Enhanced compliance features",
    ],
  },
  {
    title: "Enterprise Institution",
    popular: PopularPlanType.NO,
    price: 50,
    description:
      "Tailored solutions for large institutions with extensive requirements.",
    buttonText: "Contact Us",
    benefitList: [
      "Unlimited users",
      "Custom storage options",
      "Full analytics suite",
      "Dedicated account manager",
      "Comprehensive compliance management",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Empowering Institutions with
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Credora{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Explore our tailored plans designed for institutional needs.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing) => (
          <Card
            key={pricing.title}
            className={`transition-transform transform ${
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            } hover:scale-105`} // Added hover scale effect
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES && (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most Popular
                  </Badge>
                )}
              </CardTitle>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
            <Link to="/certificate/home">
              <Button className="w-full">{pricing.buttonText}</Button>
            </Link>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex flex-col space-y-2"> {/* Improved spacing */}
              {pricing.benefitList.map((benefit) => (
                <span key={benefit} className="flex items-center">
                  <Check className="text-green-500" />
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
