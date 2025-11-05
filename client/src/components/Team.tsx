import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, GraduationCap, Briefcase } from "lucide-react";

const teamMembers = [
  {
    name: "CA. Certified Professional",
    role: "Senior Chartered Accountant",
    credentials: "FCA, DISA (ICAI)",
    experience: "10+ Years",
    expertise: "Tax Planning & Compliance",
    image: "👨‍💼"
  },
  {
    name: "CA. Expert Consultant",
    role: "Financial Advisor",
    credentials: "ACA, B.Com",
    experience: "8+ Years",
    expertise: "GST & ROC Compliance",
    image: "👩‍💼"
  },
  {
    name: "Tax Specialist",
    role: "Income Tax Consultant",
    credentials: "M.Com, LLB",
    experience: "6+ Years",
    expertise: "Tax Filing & Litigation",
    image: "👨‍💼"
  }
];

export default function Team() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium border border-accent/30 inline-block mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-team-title">
            Expert Chartered Accountants
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team of qualified professionals brings decades of combined experience in taxation, compliance, and financial consulting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 text-center hover-elevate transition-all duration-300 h-full" data-testid={`card-team-${index}`}>
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="font-display font-semibold text-xl mb-1" data-testid={`text-team-name-${index}`}>
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span>{member.credentials}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span>{member.experience}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>{member.expertise}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
