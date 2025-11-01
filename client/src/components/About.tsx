import { motion } from "framer-motion";
import { CheckCircle2, Award, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import consultantPhoto from "@assets/image_1761906343757.png";

const features = [
  "Experienced team of qualified professionals",
  "Personalized service for every client",
  "Timely compliance and filing management",
  "Transparent pricing with no hidden costs",
  "Dedicated support throughout the process",
  "Deep knowledge of Indian tax and regulatory framework",
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium border border-accent/30 inline-block mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-about-title">
              Your Trusted Financial Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At True Levy, we understand that every rupee counts. That's why we're committed to providing exceptional financial and business consulting services that help you maximize value while staying fully compliant.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our team of experienced professionals brings deep expertise in taxation, company law, and regulatory compliance. We work closely with businesses of all sizes to deliver personalized solutions that meet their unique needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium border border-accent/30 inline-block mb-4">
              Our Expert
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold" data-testid="text-consultant-heading">
              Meet Your Consultant
            </h3>
          </div>

          <Card className="max-w-4xl mx-auto p-8 md:p-12">
            <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
                  <img 
                    src={consultantPhoto} 
                    alt="Pratap Rath" 
                    className="relative w-64 h-64 rounded-full object-cover border-4 border-primary/20 shadow-xl"
                    data-testid="img-consultant-photo"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-2" data-testid="text-consultant-name">
                    Pratap Rath
                  </h4>
                  <p className="text-lg text-primary font-medium" data-testid="text-consultant-title">
                    Founder & Lead Consultant
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <Award className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-2xl font-bold" data-testid="text-experience-years">10+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                    <FileCheck className="h-8 w-8 text-accent flex-shrink-0" />
                    <div>
                      <div className="text-2xl font-bold" data-testid="text-filings-count">5000+</div>
                      <div className="text-sm text-muted-foreground">Successful Filings</div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed" data-testid="text-consultant-bio">
                  With over a decade of experience in financial and business consulting, Pratap specializes in tax planning, company registration, ROC compliance, and GST services. His deep understanding of Indian regulatory frameworks and commitment to client success has helped thousands of businesses achieve their financial goals while maintaining full compliance.
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
