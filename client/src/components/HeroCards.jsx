import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar.jsx";
import { Badge } from "./ui/badge.jsx";
import { Button, buttonVariants } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card.jsx";
import { Check, Linkedin } from "lucide-react"; 
import { LightBulbIcon } from "./Icons.jsx"; 
import { GitHubLogoIcon } from "@radix-ui/react-icons"; 

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-12 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 transform transition-transform duration-300 hover:scale-105">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="User Avatar"
              src="https://i.insider.com/64c7a2c9048ff200190deaf5?width=800&format=jpeg&auto=webp" // Change this to an appropriate image
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Elon Musk</CardTitle>
            <CardDescription>@elon_musk</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Credora has completely transformed how I manage and verify my certificates!</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10 transform transition-transform duration-300 hover:scale-105">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://pbs.twimg.com/profile_images/1822517376967127040/7387LD_A_400x400.jpg" // Change this to an appropriate image
            alt="Mahadevan's Avatar"
            className="absolute grayscale-0 -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Mahadevan KS</CardTitle>
          <CardDescription className="font-normal text-primary">
            Co-Founder & Developer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            At Credora, we empower individuals and organizations to securely issue and verify digital certificates.
          </p>
        </CardContent>

        <CardFooter>
          <div className="flex space-x-2">
            <a
              rel="noreferrer noopener"
              href="https://github.com/M-DEV-1"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">GitHub icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/mahadevan__ks"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Twitter icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>Twitter</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/ksmahadevan/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">LinkedIn icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10 transform transition-transform duration-300 hover:scale-105">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Free
            <Badge variant="secondary" className="text-sm text-primary">
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>
            Use Credora to issue and verify certificates without any costs!
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Start Free Trial</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["4 Team members", "5 GB off-chain Storage", "Unlimited certificates"].map(
              (benefit) => (
                <span key={benefit} className="flex items-center">
                  <Check className="text-green-500" />
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 transform transition-transform duration-300 hover:scale-105">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Reliable Verification</CardTitle>
            <CardDescription className="text-md mt-2">
              Ensure the authenticity of your certificates with our secure and decentralized verification system.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
