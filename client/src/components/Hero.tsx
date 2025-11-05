import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

interface HeroProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  showCTA?: boolean;
}

export default function Hero({ imageSrc, title, subtitle, showCTA = true }: HeroProps) {
  const [location] = useLocation();
  const isHomePage = location === '/';

  const handleFindFridge = () => {
    const locationsSection = document.getElementById('locations');
    if (locationsSection) {
      locationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      
      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        
        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isHomePage ? (
              <Button 
                size="lg" 
                variant="default"
                className="text-lg"
                onClick={handleFindFridge}
                data-testid="button-find-fridge"
              >
                Find a Fridge
              </Button>
            ) : (
              <Link href="/chapel-hill">
                <Button 
                  size="lg" 
                  variant="default"
                  className="text-lg"
                  data-testid="button-find-fridge"
                >
                  Find a Fridge
                </Button>
              </Link>
            )}
            <Link href="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-background/30"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
