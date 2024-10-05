import { buttonVariants } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Facebook, Instagram, Linkedin } from "lucide-react";

// Updated teamList with the correct full names, roles, and descriptions
const teamList = [
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgPimc_RQYYbUhV3A_xER8GPifFju7nveLA&s", // Placeholder for Mahadevan KS
    name: "Mahadevan KS",
    position: "Co-Founder & Blockchain Developer",
    description: "Learning blockchain technology and decentralized systems.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/ksmahadevan",
      },
      {
        name: "Facebook",
        url: "https://www.x.com/mahadevan__ks",
      },
    ],
  },
  {
    imageUrl: "https://avatar.iran.liara.run/public/30", // Placeholder for Mohammed Iqbal Khan
    name: "Mohammed Iqbal Khan",
    position: "Co-Founder & Frontend Developer",
    description: "Passionate about crafting user-friendly interfaces.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/miqbalkhan/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://avatar.iran.liara.run/public/11", // Placeholder for Siddharth Vinayak
    name: "Siddharth Vinayak",
    position: "Research Specialist",
    description: "Focused on innovative research and development.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/elonmusk",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      case "Facebook":
        return <Facebook size="20" />;
      case "Instagram":
        return <Instagram size="20" />;
      default:
        return null;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground text-center">
        Meet our talented team committed to excellence.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
        {teamList.map(({ imageUrl, name, position, description, socialNetworks }) => (
          <Card
            key={name}
            className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
          >
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <img
                src={imageUrl}
                alt={`${name} ${position}`}
                className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">
                {position}
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center pb-2">
              <p>{description}</p>
            </CardContent>

            <CardFooter>
              {socialNetworks.map(({ name, url }) => (
                <div key={name}>
                  <a
                    rel="noreferrer noopener"
                    href={url}
                    target="_blank"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
