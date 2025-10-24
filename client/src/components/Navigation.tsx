import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "How it Works" },
    { path: "/chapel-hill", label: "Chapel Hill Fridge" },
    { path: "/unc", label: "UNC Union Fridge" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link 
          href="/" 
          data-testid="link-home"
          className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2 -ml-3"
        >
          <span className="font-heading text-xl font-bold text-primary">Chapel Hill Community Fridges</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              data-testid={`link-${link.label.toLowerCase().replace(/ /g, "-")}`}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate ${
                isActive(link.path)
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/ /g, "-")}`}
                className={`block px-4 py-3 rounded-md text-base font-medium hover-elevate ${
                  isActive(link.path)
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
