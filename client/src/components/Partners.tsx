import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import maketakeLogo from "@assets/image (1)_1761905412767.png";
import amxLogo from "@assets/AMX-LOGO (3)_1761904994447.png";
import thynxLogo from "@assets/Thynx-logo_1761904722538.png";
import clinoLogo from "@assets/CLINO_LOGO (1)_1761904722539.png";
import ottoLogo from "@assets/logo2-removebg-preview_1762345912608.png";

const partners = [
  { id: 1, name: "Thynx", logo: thynxLogo },
  { id: 2, name: "Clino Health", logo: clinoLogo },
  { id: 3, name: "Maketake", logo: maketakeLogo },
  { id: 4, name: "AM VERSE X", logo: amxLogo },
  { id: 5, name: "OTTO", logo: ottoLogo },
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-sm font-medium border border-primary/30 inline-block mb-4">
            Our Network
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-partners-title">
            Partners & Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading businesses and organizations across industries. We're proud to work with companies that share our commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {partners.map((partner) => (
            <Card
              key={partner.id}
              className="p-8 flex items-center justify-center hover-elevate transition-all duration-300"
              data-testid={`card-partner-${partner.id}`}
            >
              <div className="w-full h-20 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} - True Levy client and partner`} 
                  className={`max-w-full max-h-full object-contain ${
                    partner.name === "Thynx" ? "dark:invert dark:brightness-0 dark:contrast-200" : 
                    partner.name === "OTTO" ? "mix-blend-multiply dark:mix-blend-screen dark:invert" : ""
                  }`}
                />
              </div>
            </Card>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Ready to join our growing list of satisfied clients? 
            <a href="#contact" className="text-accent hover:underline ml-1 font-medium">
              Get in touch today
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
