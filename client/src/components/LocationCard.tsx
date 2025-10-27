import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import { ReactNode } from "react";

interface LocationCardProps {
  title: string;
  address: string;
  hours: ReactNode;
  link: string;
}

export default function LocationCard({ title, address, hours, link }: LocationCardProps) {
  return (
    <Card className="hover-elevate transition-all">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-3" data-testid={`text-address-${title.toLowerCase().replace(" ", "-")}`}>
          <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-muted-foreground">{address}</p>
        </div>
        <div className="flex items-start gap-3" data-testid={`text-hours-${title.toLowerCase().replace(" ", "-")}`}>
          <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-muted-foreground">{hours}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link}>
          <Button 
            variant="default" 
            className="w-full"
            data-testid={`button-view-details-${title.toLowerCase().replace(" ", "-")}`}
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
