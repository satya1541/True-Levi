import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does True Levy provide?",
    answer: "We offer comprehensive financial and tax consulting services including company registration, GST filing, income tax filing, ROC compliance, accounting and bookkeeping, tax planning, and project finance assistance. Our chartered accountants handle all aspects of business financial management."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is flexible and negotiable based on the specific services you need and the complexity of your requirements. We offer customized packages tailored to your business needs. Contact us for a personalized quote and we'll work with you to find a solution that fits your budget."
  },
  {
    question: "How long does company registration take?",
    answer: "Typically, company registration in India takes 7-15 working days, depending on the type of entity and document verification. We handle the entire process including name approval, MCA filing, and certificate issuance to ensure quick and smooth registration."
  },
  {
    question: "Do you provide GST registration and filing?",
    answer: "Yes, we provide end-to-end GST services including registration, monthly/quarterly return filing (GSTR-1, GSTR-3B), annual returns, GST compliance audits, and assistance with GST notices. Our team ensures timely and accurate filing to avoid penalties."
  },
  {
    question: "Can you help with income tax filing for individuals and businesses?",
    answer: "Absolutely! We handle income tax filing for individuals, freelancers, and businesses. This includes ITR filing, TDS returns, tax planning, advance tax calculations, and assistance with income tax notices and assessments."
  },
  {
    question: "What is ROC compliance and why is it important?",
    answer: "ROC (Registrar of Companies) compliance involves mandatory annual filings for companies including balance sheets, financial statements, and director reports. Non-compliance can lead to penalties and legal issues. We ensure your company remains compliant with all MCA requirements."
  },
  {
    question: "How can I contact True Levy for a consultation?",
    answer: "You can reach us via email at info@truelevy.in, call us at +91-9692000140, or fill out the contact form on our website. We offer a free initial consultation to understand your requirements and provide tailored solutions."
  },
  {
    question: "Do you serve clients across India?",
    answer: "Yes, we serve clients across all states and cities in India. While our office is in Bhubaneswar, Odisha, we provide remote consulting and virtual services to businesses nationwide with seamless online documentation and communication."
  },
  {
    question: "What makes True Levy different from other consultants?",
    answer: "Our team comprises experienced chartered accountants with deep expertise in Indian tax laws and regulations. We offer personalized service, transparent pricing, timely compliance, and dedicated support. Every rupee counts - we maximize your savings while ensuring full compliance."
  },
  {
    question: "Can you help with tax planning and optimization?",
    answer: "Yes, our chartered accountants provide strategic tax planning to legally minimize your tax liability. This includes structuring business expenses, optimizing deductions under various sections (80C, 80D, etc.), and planning for capital gains and investments."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-sm font-medium border border-primary/30 inline-block mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about our financial consulting, tax services, GST filing, and compliance solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-item-${index}`}>
                <AccordionTrigger className="text-left" data-testid={`faq-question-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground" data-testid={`faq-answer-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
