import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoUrl from "@assets/truelevy logo_1761891254375.png";
import trueLevyTextLogo from "@assets/download_1761896562532.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            data-testid="button-logo"
          >
            <img src={logoUrl} alt="True Levy" className="h-10 w-10" />
            <img src={trueLevyTextLogo} alt="True Levy" className="h-6" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover-elevate px-3 py-2 rounded-md text-sm font-medium transition-colors"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover-elevate px-3 py-2 rounded-md text-sm font-medium transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover-elevate px-3 py-2 rounded-md text-sm font-medium transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
            <Button
              variant="default"
              onClick={() => scrollToSection("contact")}
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover-elevate"
              data-testid="mobile-link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover-elevate"
              data-testid="mobile-link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover-elevate"
              data-testid="mobile-link-contact"
            >
              Contact
            </button>
            <Button
              variant="default"
              className="w-full mt-2"
              onClick={() => scrollToSection("contact")}
              data-testid="mobile-button-get-started"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
