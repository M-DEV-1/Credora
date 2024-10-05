import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card.jsx";

const testimonials = [
  {
    image: "https://i.pravatar.cc/150?img=10", // Emma Watson
    name: "Emma Watson",
    userName: "@EmmaWatson",
    comment: "Credora has transformed the way we approach our projects. Their tools make collaboration seamless and effective. Highly recommend!",
  },
  {
    image: "https://i.pravatar.cc/150?img=20", // Dwayne Johnson
    name: "Dwayne Johnson",
    userName: "@TheRock",
    comment: "Working with Credora was a game changer for our team. The platform is user-friendly and provides great support for any queries!",
  },
  {
    image: "https://i.pravatar.cc/150?img=30", // Taylor Swift
    name: "Taylor Swift",
    userName: "@taylorswift",
    comment: "As a creative, I need tools that inspire me. Credora does just that. Their service is top-notch and the community is fantastic.",
  },
  {
    image: "https://i.pravatar.cc/150?img=40", // Elon Musk
    name: "Elon Musk",
    userName: "@elonmusk",
    comment: "Credora's innovative approach to project management is impressive. I appreciate their focus on both functionality and user experience. It’s rare to find a platform that balances power with usability, enabling teams to be more productive without sacrificing creativity. I believe that with tools like these, the future of collaboration is bright.",
  },
  {
    image: "https://i.pravatar.cc/150?img=50", // Leonardo DiCaprio
    name: "Leonardo DiCaprio",
    userName: "@LeoDiCaprio",
    comment: "I've tried many platforms, but none compare to Credora's efficiency. It's not just a tool; it's a complete ecosystem for success.",
  },
  {
    image: "https://i.pravatar.cc/150?img=60", // Jennifer Lawrence
    name: "Jennifer Lawrence",
    userName: "@jlawrence",
    comment: "Credora has really stepped up my productivity. The features are intuitive, and I love how responsive the team is to feedback. It feels like a partnership!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        Credora
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Hear what our users and partners have to say about their experience with us.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(({ image, name, userName, comment }) => (
          <Card
            key={userName}
            className="max-w-md md:break-inside-avoid overflow-hidden"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage alt={name} src={image} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{userName}</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="text-lg">
              {comment}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
