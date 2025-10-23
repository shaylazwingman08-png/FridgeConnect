import Hero from "@/components/Hero";
import LocationCard from "@/components/LocationCard";
import HowItWorks from "@/components/HowItWorks";
import ImpactStats from "@/components/ImpactStats";
import GuidelinesList from "@/components/GuidelinesList";
import heroImage from '@assets/generated_images/Community_members_at_fridge_hero_a53330b8.png';

const communityGuidelines = [
  "Take only what you need - leave some for others",
  "Donate fresh, safe food that you would eat yourself",
  "Check expiration dates before leaving items",
  "Help keep the fridge clean and organized",
  "Respect the fridge, respect the community"
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        imageSrc={heroImage}
        title="Nourishing Our Community Together"
        subtitle="Free, accessible food for everyone. No questions asked, no judgment. Take what you need, leave what you can."
      />

      {/* Location Cards */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Our Locations</h2>
            <p className="text-muted-foreground text-lg">Find a community fridge near you</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <LocationCard
              title="Chapel Hill Fridge"
              address="123 Main Street, Chapel Hill, NC 27514"
              hours="Open 24/7"
              link="/chapel-hill"
            />
            <LocationCard
              title="UNC Campus Fridge"
              address="Student Union, UNC Campus, Chapel Hill, NC 27599"
              hours="Open 24/7"
              link="/unc"
            />
          </div>
        </div>
      </section>

      <HowItWorks />
      
      <ImpactStats />

      {/* Community Guidelines */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Community Guidelines</h2>
            <p className="text-muted-foreground text-lg">Simple rules to keep our fridges accessible for everyone</p>
          </div>
          
          <GuidelinesList guidelines={communityGuidelines} title="" />
          
          <p className="text-center text-muted-foreground mt-8 italic">
            "Respect the fridge, respect the community"
          </p>
        </div>
      </section>
    </div>
  );
}
