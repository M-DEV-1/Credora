import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons"; // Ensure these icons are appropriate for the context

// Array of features with their respective properties
const features = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description: "Easily access and verify your certificates from anywhere at any time with our user-friendly platform.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description: "Seamlessly scale your certificate management system as your needs grow with our flexible solutions.",
  },
  {
    icon: <GiftIcon />,
    title: "Gamification",
    description: "Engage users with gamified elements to encourage continuous learning and certificate achievement.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Discover how Credora empowers individuals and organizations to securely issue and verify digital certificates.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }) => (
          <Card key={title} className="bg-muted/50 transform transition-transform duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
