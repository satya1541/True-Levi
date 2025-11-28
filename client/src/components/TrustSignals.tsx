import { motion } from "framer-motion";
import { Shield, Award, CheckCircle2, Lock, FileCheck, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const trustBadges = [
  {
    icon: Shield,
    title: "SSL Secured",
    description: "256-bit encryption",
  },
  {
    icon: Award,
    title: "CA Certified",
    description: "Chartered Accountants",
  },
  {
    icon: FileCheck,
    title: "ROC Compliant",
    description: "Government certified",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "GDPR compliant",
  },
  {
    icon: Building2,
    title: "GSTIN Verified",
    description: "Registered GST provider",
  },
  {
    icon: CheckCircle2,
    title: "100% Accuracy",
    description: "Guaranteed filing",
  },
];

export default function TrustSignals() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4" data-testid="text-trust-title">
            Trusted & Certified Financial Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your financial data and tax information are protected by industry-leading security standards and professional certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="p-6 text-center hover-elevate transition-all duration-300 group h-full" 
                  data-testid={`card-trust-${index}`}
                >
                  <div className="mb-3 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm mb-1" data-testid={`text-trust-title-${index}`}>
                    {badge.title}
                  </h3>
                  <p className="text-xs text-muted-foreground" data-testid={`text-trust-desc-${index}`}>
                    {badge.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
