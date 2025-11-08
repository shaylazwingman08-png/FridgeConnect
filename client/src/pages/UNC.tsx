import { useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import GuidelinesList from "@/components/GuidelinesList";
import uncImage from '@assets/unc image_1761593853514.jpg';
import uncMapImage from '@assets/union fridge loc_1761577618596.jpeg';

const locationGuidelines = [
  "Fridge is restocked on Saturday, Sunday, and Thursday afternoons and as donations are received. Check our Instagram, Facebook, or the status above for updates.",
  "Located across from Student Life and Leadership Office, Suite 2501",
  "Available to both students and community members",
  "Disability accessible entrances and exits",
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

      {/* Contact Forms */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="font-heading text-3xl font-semibold mb-4 text-center">Latest Fridge Status</h2>
          <p className="text-muted-foreground text-center mb-8">
            The most recent updates on the UNC fridge, uploaded by community members. Click 'check-in' below to update fridge status.
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
                      Frank Porter Graham Student Union<br />
                      209 South Road<br />
                      Chapel Hill, NC 27599
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="text-hours">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 7:30 AM - 11:00 PM<br /> Saturday: 9:00 AM - 11:00 PM<br /> Sunday: 11:00 AM - 11:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="text-contact">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Contact</h3>
                    <p className="text-muted-foreground">(919) 962-2285</p>
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

    </div>
  );
}
