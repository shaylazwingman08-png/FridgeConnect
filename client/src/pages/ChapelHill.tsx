import { useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GuidelinesList from "@/components/GuidelinesList";
import chapelHillImage from '@assets/generated_images/Chapel_Hill_fridge_location_2bd035ac.png';

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

const locationGuidelines = [
  "Parking available on Main Street and surrounding side streets",
  "The fridge is located on the sidewalk near the corner of Main and Elm",
  "Well-lit area, safe for night access",
  "Please be respectful of neighboring businesses"
];

export default function ChapelHill() {
  const [showCheckIn, setShowCheckIn] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Location Hero */}
      <section className="relative h-[400px] flex items-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${chapelHillImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6 pb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">Chapel Hill Fridge</h1>
          <p className="text-lg text-white/90">Serving the Chapel Hill community</p>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="font-heading text-3xl font-semibold mb-4 text-center">Latest Fridge Status</h2>
          <p className="text-muted-foreground text-center mb-8">
            The most recent updates on the Chapel Hill fridge, uploaded by community members. Click 'check-in' below to update fridge status.
          </p>

          <div className="space-y-8">
            <div className="rounded-lg overflow-hidden border">
              <iframe 
                className="airtable-embed" 
                src="https://airtable.com/embed/applVpNxTchBzWog8/shrVvzEnoSnprUKYw?viewControls=on" 
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
                  src="https://airtable.com/embed/applVpNxTchBzWog8/pag5Wkg50K3eraOQy/form" 
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
      <section className="py-16 md:py-20">
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
                      125 West Main Suite 208<br />
                      Carrboro, NC 27510 (above Community Worx)
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

            {/* Map Placeholder */}
            <div>
              <div className="bg-muted rounded-lg h-[400px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Map View</p>
                  <p className="text-sm">123 Main Street, Chapel Hill, NC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Items */}
      <section className="py-16 md:py-20 bg-card">
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

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-heading text-3xl font-semibold mb-8 text-center">Gallery</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={chapelHillImage} 
                alt="Chapel Hill community fridge exterior" 
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
