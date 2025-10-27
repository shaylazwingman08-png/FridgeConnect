import { useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import GuidelinesList from "@/components/GuidelinesList";
import uncImage from '@assets/unc image_1761593853514.jpg';
import uncMapImage from '@assets/union fridge loc_1761577618596.jpeg';

const locationGuidelines = [
  "Located near the Student Union main entrance",
  "Accessible to both students and community members",
  "Campus parking available in Visitor Lot A",
  "Well-lit area with regular campus security patrols"
];

export default function UNC() {
  const [showCheckIn, setShowCheckIn] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Location Hero */}
      <section className="relative h-[400px] flex items-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${uncImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6 pb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">UNC Campus Fridge</h1>
          <p className="text-lg text-white/90">Supporting the UNC community</p>
        </div>
      </section>

      {/* Essential Information */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Location Info */}
            <div>
              <h2 className="font-heading text-2xl font-semibold mb-6">Location & Hours</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4" data-testid="text-address">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Student Union Building<br />
                      UNC Campus<br />
                      Chapel Hill, NC 27599
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="text-hours">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-muted-foreground">Open 24 hours a day, 7 days a week</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="text-contact">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Contact</h3>
                    <p className="text-muted-foreground">info@communityfridges.org</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-heading text-xl font-semibold mb-4">Location Notes</h3>
                <GuidelinesList guidelines={locationGuidelines} title="" />
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="rounded-lg overflow-hidden h-[400px]">
                <img 
                  src={uncMapImage} 
                  alt="UNC Union fridge location map" 
                  className="w-full h-full object-cover"
                  data-testid="map-unc"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="font-heading text-3xl font-semibold mb-4 text-center">Get in Touch</h2>
          <p className="text-muted-foreground text-center mb-8">
            Have questions, feedback, or want to help maintain this fridge? Let us know!
          </p>
          
          <div className="space-y-8">
            <div className="rounded-lg overflow-hidden border">
              <iframe 
                className="airtable-embed" 
                src="https://airtable.com/embed/appJuNvCqQkOpOqjC/shr2mPqmXSX630nRg?viewControls=on" 
                frameBorder="0" 
                width="100%" 
                height="533" 
                style={{ background: 'transparent', border: '1px solid #ccc' }}
                data-testid="iframe-airtable-form-1"
              />
            </div>

            <div className="flex justify-center">
              <Button 
                variant="default"
                size="lg"
                className="px-12 py-6 text-lg"
                onClick={() => {
                  setShowCheckIn(true);
                  setTimeout(() => {
                    const checkInForm = document.querySelector('[data-testid="iframe-airtable-form-2"]');
                    checkInForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
                data-testid="button-check-in"
              >
                Check in
              </Button>
            </div>

            {showCheckIn && (
              <div id="check-in-form" className="rounded-lg overflow-hidden border">
                <iframe 
                  className="airtable-embed" 
                  src="https://airtable.com/embed/appJuNvCqQkOpOqjC/pagA3gSslVqpzaD26/form" 
                  frameBorder="0" 
                  width="100%" 
                  height="533" 
                  style={{ background: 'transparent', border: '1px solid #ccc' }}
                  data-testid="iframe-airtable-form-2"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-10 md:py-14 bg-card">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-heading text-3xl font-semibold mb-8 text-center">Gallery</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={uncImage} 
                alt="UNC campus community fridge exterior" 
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden bg-muted flex items-center justify-center h-[300px]">
              <p className="text-muted-foreground">Community photos coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
