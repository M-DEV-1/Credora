import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import cubeLeg from "../assets/cube-leg.png";

const serviceList = [
  {
    title: "Secure Data Management",
    description:
      "Our platform provides secure and efficient data management tailored for institutional needs, ensuring data integrity and confidentiality.",
  },
  {
    title: "Collaborative Research Tools",
    description:
      "Enhance your research capabilities with our collaborative tools designed for teams, making sharing and communication seamless.",
  },
  {
    title: "Advanced Analytics",
    description:
      "Leverage advanced analytics to gain insights and drive decision-making, optimizing institutional operations and strategies.",
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        <div className="flex flex-col items-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl mt-4 mb-8">
            Discover our range of services tailored specifically for institutions, enabling collaboration, efficiency, and security.
          </p>

          <div className="flex flex-col gap-6">
            {serviceList.map(({ title, description }) => (
              <Card key={title} className="hover:scale-105 transition-transform duration-300 hover:border-primary hover:shadow-md hover:shadow-primary-foreground">
                <CardHeader className="space-y-1 flex flex-col md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-3 rounded-2xl flex items-center justify-center">
                    {/* Placeholder for potential icon */}
                    {/* {icon} */}
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[400px] lg:w-[500px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
