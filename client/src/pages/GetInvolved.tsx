import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HandHeart, Users, Heart, ExternalLink } from "lucide-react";

export default function GetInvolved() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-10 md:py-14 bg-card">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6">Get Involved</h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Join our community effort to ensure everyone has access to fresh, nutritious food. Whether you have a few minutes or a few hours, your contribution makes a difference.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-heading text-3xl font-semibold mb-8 text-center">Ways to Help</h2>
          
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <HandHeart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Donate Food</h3>
              <p className="text-muted-foreground leading-relaxed">
                Drop off fresh produce or prepared meals at either location.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Volunteer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Join MAWG and help with donation outreach and fridge network expansion, or volunteer when you have time with donation pick-up and fridge cleaning. Fill out a form below!
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Donate Funds</h3>
              <p className="text-muted-foreground leading-relaxed">
                Support our mutual aid fund to help us invest in community projects. Link below!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Interest Form */}
      <section className="py-10 md:py-14 bg-card">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="font-heading text-3xl font-semibold mb-8 text-center">Volunteer Opportunities</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>General Volunteer Interest</CardTitle>
              <CardDescription>
                Express interest in volunteering and we'll reach out with opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Not sure how you want to help yet? Fill out this form and we'll connect you with volunteer opportunities that match your interests and availability.
              </p>
              <Button 
                asChild
                className="w-full"
                data-testid="button-interest-form"
              >
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfTmPQlzgOJOocD5YFb1MAeXZ5_-nWpAecTkDuuAj71hsjlSQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Express Interest <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Our Mutual Aid Fund */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                <Heart className="w-8 h-8 text-primary fill-primary" />
              </div>
              <CardTitle className="text-2xl">Support the Campus Y Mutual Aid Fund</CardTitle>
              <CardDescription>
                Your financial contribution helps us maintain the fridges, purchase supplies, and expand our reach
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every donation, no matter the size, helps us continue providing free, accessible food to our community. Funds go directly toward fridge maintenance, electricity costs, and purchasing fresh food.
              </p>
              <Button 
                asChild
                size="lg"
                data-testid="button-donate"
              >
                <a 
                  href="https://www.gofundme.com/f/campus-y-mutual-aid-fund?attribution_id=sl:6beb40ae-0c6f-4cd9-bb3b-a02b5115b566&lang=en_US&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Donate Now <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Volunteer Cleaning Form */}
      <section className="py-10 md:py-14 bg-card">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="font-heading text-3xl font-semibold mb-8 text-center">Current Volunteer Cleaning Form</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Fridge Cleaning & Maintenance</CardTitle>
              <CardDescription>
                Sign up for a shift to help clean and maintain our community fridges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We need volunteers to help keep our fridges clean and organized. Tasks include wiping down shelves, checking expiration dates, and ensuring everything is in good condition.
              </p>
              <Button 
                asChild
                className="w-full"
                data-testid="button-cleaning-form"
              >
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScf8Vq98IfiuGcWQxKKD0N0HyyEjTwbsAh42wzJkxcGDGXCdQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Sign Up for Cleaning <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-10 md:py-14 bg-card">
        <div className="container mx-auto max-w-3xl px-4 md:px-6 text-center">
          <h2 className="font-heading text-2xl font-semibold mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            If you'd like to learn more about volunteer opportunities or have ideas for how to support the community fridges, we'd love to hear from you.
          </p>
          <p className="text-lg">
            Email us at <a href="mailto:unc.mawg@gmail.com" className="text-primary hover:underline font-medium" data-testid="link-contact-email">unc.mawg@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
