import { Link } from "wouter";
import { Heart } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Mission */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-3">Our Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing free, accessible food to our community through mutual aid and solidarity. No questions, no judgment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/" 
                  onClick={scrollToTop}
                  data-testid="link-footer-home"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  onClick={scrollToTop}
                  data-testid="link-footer-about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/chapel-hill" 
                  onClick={scrollToTop}
                  data-testid="link-footer-chapel-hill"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Chapel Hill Location
                </Link>
              </li>
              <li>
                <Link 
                  href="/unc" 
                  onClick={scrollToTop}
                  data-testid="link-footer-unc"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  UNC Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-3">
              <Link 
                href="/get-involved"
                onClick={scrollToTop}
                data-testid="link-footer-get-involved"
                className="hover:text-primary transition-colors"
              >
                Get Involved
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Want to donate food or volunteer? Contact us to learn more about how you can help.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Email: <a href="mailto:unc.mawg@gmail.com" className="text-primary hover:underline" data-testid="link-email">unc.mawg@gmail.com</a>
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/chcommunityfridge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover-elevate active-elevate-2"
                data-testid="link-instagram"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61569472798213" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover-elevate active-elevate-2"
                data-testid="link-facebook"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for our community
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chapel Hill Community Fridges. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
