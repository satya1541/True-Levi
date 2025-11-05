import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Experienced team of qualified chartered accountants and tax consultants",
  "Personalized financial consulting service for every client",
  "Timely GST, income tax, and ROC compliance filing management",
  "Transparent pricing with no hidden costs for all services",
  "Dedicated expert support throughout the registration and filing process",
  "Deep knowledge of Indian tax laws, GST regulations, and company compliance framework",
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-sm font-medium border border-primary/30 inline-block mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-about-title">
              Your Trusted Financial & Tax Consulting Partner in India
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At True Levy, we understand that every rupee counts. That's why we're committed to providing exceptional financial consulting, tax advisory, GST services, income tax filing, and business consulting services that help you maximize value while staying fully compliant with Indian tax laws and regulations.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our team of experienced chartered accountants and tax professionals brings deep expertise in taxation, company registration, GST compliance, ROC filing, and regulatory compliance. We work closely with businesses of all sizes across India to deliver personalized financial solutions that meet their unique needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg hover-elevate transition-colors"
                data-testid={`feature-${index}`}
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base" data-testid={`text-feature-${index}`}>{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
