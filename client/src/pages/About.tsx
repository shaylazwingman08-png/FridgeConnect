import { Card, CardContent } from "@/components/ui/card";
import { HandHeart, Users, Leaf } from "lucide-react";
import communityFridgeLogo from '@assets/Community Fridge Logo (1)_1761576122674.png';

const howItWorksList = [
  {
    title: "Taking Food",
    points: [
      "No ID required, no questions asked",
      "Take what you need for you and your family",
      "Some of the food is past the best-by date, but still has a few days until going bad. Use your best judgement, and throw out any food with signs of spoiling. ",
      "Help keep items organized for others",
      "After you take food, please use the 'Check in' button to update the fridge status on the page of the fridge you visited"
    ]
  },
  {
    title: "Giving Food",
    points: [
      "Donate fresh food you'd eat yourself",
      "Package items in clean, sealed containers",
      "Label homemade items with ingredients, date and any allergens",
      "Avoid items in glass containers when possible",
      "After you donate food or clean the fridge, please use the 'Check in' button to update the fridge status on the page of the fridge you visited"
    ]
  }
];

const acceptedItems = [
  "Fresh fruits and vegetables",
  "Prepared meals in sealed containers",
  "Dairy products (milk, cheese, yogurt)",
  "Eggs and bread",
  "Beverages and drinks"
];

const notAccepted = [
  "Expired or spoiled food",
  "Leftovers you have eaten from",
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
    description: "Help with planning, and fridge maintenance, cleaning, and organization. All support is welcome!"
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
      <section className="py-10 md:py-14 bg-card">
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
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              1 in 10 residents of Orange County experience food insecurity annually, and 1 in 5 students at UNC Chapel Hill have experienced food insecurity in the past month. While around 40% of the US food supply is wasted, our neighbors are going hungry.
            </p>
            <p>
              That's why the Mutual Aid Working Group (MAWG), a community of students at UNC Chapel Hill, founded the Chapel Hill Community Fridge network in 2024 through the Campus Y. Our fridges save and redistribute surplus food from local sources, providing free, accessible meals to the community. We require no paperwork, idendification, or proof of need and operate on a simple principle: take what you need, leave what you can.
            </p>
            <p>
              What began as a grassroots effort to address food insecurity and food waste has grown into a network of two fridges. After receiving a generous grant from the Carolina Parents Council, our second fridge was placed in the UNC Student Union in 2025. Our fridges are stocked and cleaned multiple times per week by students and community members who believe in taking care of each other unconditionally. If you would like to help in any way, please visit our 'Get Involved' page.
            </p>
          </div>
        </div>
      </section>

      {/* How Our Fridges Work */}
      <section className="py-10 md:py-14 bg-card">
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
              Remember: <span className="text-primary">No questions, no judgment.</span> Everyone is welcome.
            </p>
          </div>
        </div>
      </section>

      {/* What You Can Donate */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-heading text-3xl font-semibold mb-8 text-center">What You Can Donate</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-semibold mb-4 text-green-600">✓ Accepted Items</h3>
                <ul className="space-y-2">
                  {acceptedItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
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
      <section className="py-10 md:py-14">
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
              Email us at <a href="mailto:unc.mawg@gmail.com" className="text-primary hover:underline font-medium" data-testid="link-contact-email">unc.mawg@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
