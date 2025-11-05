import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-sm font-medium border border-primary/30 inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-services-title">
            Comprehensive Financial & Tax Consulting Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a complete range of financial consulting, tax advisory, GST services, income tax filing, company incorporation, ROC compliance, and business consulting services to help your business stay compliant, optimize taxes, and achieve sustainable growth across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
