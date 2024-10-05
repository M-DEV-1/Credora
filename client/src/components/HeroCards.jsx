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
import { AlignVerticalSpaceBetween, Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons.jsx";
import { GitHubLogoIcon, SpaceBetweenHorizontallyIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom"

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-12 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 transform transition-transform duration-300 hover:scale-105">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="User Avatar"
              src="https://pbs.twimg.com/profile_images/1815749056821346304/jS8I28PL_400x400.jpg" // Change this to an appropriate image
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg flex items-center space-x-4">
            Elon Musk - Parody&nbsp;
              <svg
                viewBox="0 0 22 22"
                aria-label="Verified account"
                role="img"
                className="w-5 h-5" // Adjust size here
                data-testid="icon-verified"
              >
                <g>
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                </g>
              </svg>
            </CardTitle>
            <CardDescription>@elonmuskADO</CardDescription>
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
          <Link to="/certificate-home">
          <Button className="w-full">Start Free Trial</Button>
          </Link>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["5 Team members", "1 GB off-chain Storage", "Unlimited certificates"].map(
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
