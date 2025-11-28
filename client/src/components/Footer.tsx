import { Mail, Phone, MapPin } from "lucide-react";
import logoUrl from "@assets/truelevy logo_1761891254375.png";
import trueLevyTextLogo from "@assets/download-removebg-preview_1762235080127.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
              data-testid="footer-button-logo"
            >
              <img src={logoUrl} alt="True Levy Financial Consultant Logo" className="h-10 w-10 mix-blend-multiply dark:mix-blend-screen" />
              <img src={trueLevyTextLogo} alt="True Levy Financial & Tax Consulting" className="h-6 dark:invert dark:brightness-0 dark:contrast-200" />
            </button>
            <p className="text-sm text-muted-foreground mb-4">
              Because Every Rupee Counts
            </p>
            <p className="text-sm text-muted-foreground">
              Professional financial and business consulting services for businesses across India.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Company / LLP Registration</li>
              <li>ROC Filing</li>
              <li>GST Registration & Filing</li>
              <li>Income Tax & TDS Filing</li>
              <li>Financial Statements</li>
              <li>Project Finance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@truelevy.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91-9692000140</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Plot-9429, Cuttack - Puri Bypass Rd, B.B.Nagar, Baragarh, Bhubaneswar, Odisha 751002</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} True Levy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
