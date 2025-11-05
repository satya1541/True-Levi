import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp, Save, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    title: "E-commerce Startup Tax Optimization",
    client: "Tech E-Commerce Pvt Ltd",
    challenge: "High tax liability impacting profitability",
    solution: "Restructured expense categories, optimized input tax credit claims, implemented tax-efficient salary structure",
    results: [
      "Reduced tax liability by ₹3.2 lakhs annually",
      "100% GST compliance maintained",
      "Improved cash flow by 18%"
    ],
    savings: "₹3.2L",
    icon: TrendingUp
  },
  {
    title: "Manufacturing Company ROC Compliance",
    client: "Industrial Manufacturing Ltd",
    challenge: "Pending ROC filings with penalty notices",
    solution: "Cleared 3 years of pending annual returns, updated statutory registers, streamlined compliance process",
    results: [
      "All pending filings completed within 30 days",
      "Avoided penalties worth ₹2.5 lakhs",
      "Established monthly compliance calendar"
    ],
    savings: "₹2.5L",
    icon: CheckCircle2
  },
  {
    title: "Professional Services GST Structuring",
    client: "Consulting Services Group",
    challenge: "Complex multi-state GST registrations and ITC management",
    solution: "Consolidated GST registrations, automated return filing system, optimized input tax credit reconciliation",
    results: [
      "Saved ₹4.8 lakhs in ITC optimization",
      "Reduced filing time by 60%",
      "Zero GST notices since implementation"
    ],
    savings: "₹4.8L",
    icon: Save
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium border border-accent/30 inline-block mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-case-studies-title">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real results we've delivered for businesses across India. See how our financial consulting expertise has helped companies save money and stay compliant.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover-elevate transition-all duration-300 h-full flex flex-col" data-testid={`card-case-study-${index}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {study.savings}
                      </div>
                      <div className="text-xs text-muted-foreground">Saved</div>
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-lg mb-2" data-testid={`text-case-study-title-${index}`}>
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    {study.client}
                  </p>

                  <div className="space-y-4 flex-grow">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Challenge:</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-1">Solution:</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
