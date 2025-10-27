import { MapPin, Heart, Users } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Find a Fridge",
    description: "Visit one of our two convenient locations in Chapel Hill or on the UNC campus."
  },
  {
    icon: Heart,
    title: "Take or Give",
    description: "Take what you need. Leave what you can. Everyone is welcome to use the fridge, no questions asked."
  },
  {
    icon: Users,
    title: "Build Community",
    description: "Together, we create a network of mutual aid where everyone looks out for each other."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Using our community fridges is simple and welcoming for everyone
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center"
              data-testid={`card-step-${index + 1}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
