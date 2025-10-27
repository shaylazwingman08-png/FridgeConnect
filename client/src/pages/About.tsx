import { Card, CardContent } from "@/components/ui/card";
import { HandHeart, Users, Leaf } from "lucide-react";
import communityFridgeLogo from '@assets/Community Fridge Logo (1)_1761576122674.png';

const howItWorksList = [
  {
    title: "Taking Food",
    points: [
      "No ID required, no questions asked",
      "Take what you need for you and your family",
      "Check expiration dates before taking items",
      "Help keep items organized for others"
    ]
  },
  {
    title: "Giving Food",
    points: [
      "Donate fresh, unexpired food you'd eat yourself",
      "Package items in clean, sealed containers",
      "Label homemade items with date and ingredients",
      "Avoid items in glass containers when possible"
    ]
  }
];

const acceptedItems = [
  "Fresh fruits and vegetables",
  "Prepared meals in sealed containers",
  "Dairy products (milk, cheese, yogurt)",
  "Eggs and bread",
  "Canned and packaged foods",
  "Beverages and drinks"
];

const notAccepted = [
  "Expired or spoiled food",
  "Items in glass containers",
  "Opened packages",
  "Alcohol or tobacco products"
];

const getInvolvedOptions = [
  {
    icon: HandHeart,
    title: "Donate Food",
    description: "Drop off fresh produce, prepared meals, or non-perishable items at either location."
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Help with fridge maintenance, cleaning, and organization. All support is welcome!"
  },
  {
    icon: Leaf,
    title: "Spread the Word",
    description: "Tell others about the community fridges and help us grow this mutual aid network."
  }
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
            Our community fridges are built on the principle of mutual aid and solidarity. We believe that access to fresh, nutritious food is a human right, not a privilege.
          </p>
          <div className="rounded-lg overflow-hidden">
            <img 
              src={communityFridgeLogo} 
              alt="Community Fridge Logo" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Food insecurity affects millions of people across the United States, including right here in our own community. Too often, those who need help face barriers like stigma, complicated applications, or limited hours.
            </p>
            <p>
              That's why we created the Community Fridges project. Our fridges are available 24/7, require no paperwork or proof of need, and operate on a simple principle: take what you need, leave what you can.
            </p>
            <p>
              What started as a grassroots effort to address food waste and food insecurity has grown into a thriving mutual aid network. Our fridges are stocked daily by community members who believe in taking care of each other.
            </p>
          </div>
        </div>
      </section>

      {/* How Our Fridges Work */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8 text-center">How Our Fridges Work</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {howItWorksList.map((section, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-heading text-xl font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-md">
            <p className="text-center font-medium">
              Remember: <span className="text-primary">No questions asked, no judgment.</span> Everyone is welcome.
            </p>
          </div>
        </div>
      </section>

      {/* What You Can Donate */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-heading text-3xl font-semibold mb-8 text-center">What You Can Donate</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-semibold mb-4 text-primary">✓ Accepted Items</h3>
                <ul className="space-y-2">
                  {acceptedItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-semibold mb-4 text-destructive">✗ Please Don't Donate</h3>
                <ul className="space-y-2">
                  {notAccepted.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8 text-center">Get Involved</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {getInvolvedOptions.map((option, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Want to help or learn more?</p>
            <p className="text-lg">
              Email us at <a href="mailto:info@communityfridges.org" className="text-primary hover:underline font-medium" data-testid="link-contact-email">info@communityfridges.org</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
