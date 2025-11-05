import Hero from "@/components/Hero";
import LocationCard from "@/components/LocationCard";
import HowItWorks from "@/components/HowItWorks";
import ImpactStats from "@/components/ImpactStats";
import GuidelinesList from "@/components/GuidelinesList";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import heroImage from "@assets/generated_images/Community_members_at_fridge_hero_a53330b8.png";

const communityGuidelines = [
  "Take only what you need - leave some for others",
  "Donate fresh, safe food that you would eat yourself",
  "Check expiration dates before leaving items",
  "Help keep the fridge clean and organized",
  "Respect the fridge, respect the community",
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        imageSrc={heroImage}
        title="Feeding our neighbors, together."
        subtitle="Free, accessible food without questions or judgement. Take what you need, leave what you can."
      />

      {/* Location Cards */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              Our Locations
            </h2>
            <p className="text-muted-foreground text-lg">
              Find a community fridge near you
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <LocationCard
              title="Chapel Hill Fridge"
              address="125 West Main Suite 208, Carrboro, NC 27510 (above Community Worx)"
              hours={<>Monday, Tuesday, Thursday: 10:30 AM - 4:30 PM<br />Wednesday: 10:30 AM - 2:30 PM</>}
              link="/chapel-hill"
            />
            <LocationCard
              title="UNC Campus Fridge"
              address="UNC Student Union across from Student Life and Leadership Suite in 2501"
              hours={<>Monday - Friday: 7:30 AM - 11:00 PM<br />Saturday: 9:00 AM - 11:00 PM<br />Sunday: 11:00 AM - 11:00 PM</>}
              link="/unc"
            />
          </div>
        </div>
      </section>

      <HowItWorks />

      <ImpactStats />

      {/* Community Guidelines */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              Community Guidelines
            </h2>
            <p className="text-muted-foreground text-lg">
              Simple rules to keep our fridges accessible for everyone
            </p>
          </div>

          <GuidelinesList guidelines={communityGuidelines} title="" />

          <p className="text-center text-muted-foreground mt-8 italic">
            "Respect the fridge, respect the community"
          </p>

          <div className="mt-12 text-center">
            <h3 className="font-heading text-xl font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                data-testid="button-instagram"
              >
                <a
                  href="https://www.instagram.com/chcommunityfridge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <FaInstagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                data-testid="button-facebook"
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61569472798213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <FaFacebook className="w-5 h-5" />
                  Facebook
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
