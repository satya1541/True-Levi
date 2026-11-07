import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function TechnicalServices() {
  return (
    <section id="technical-services" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-sm font-medium border border-primary/30 inline-block mb-6">
            Our Other Technical Services
          </span>
          
          <div className="mt-8">
            <a 
              href="https://newlinelabs.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="link-technical-services"
            >
              <Button size="lg" className="gap-2">
                Visit Newline Labs
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            <p className="text-muted-foreground mt-4 text-sm">
              Explore our technical services for web development, mobile apps, Cloud Deployment and custom software solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
