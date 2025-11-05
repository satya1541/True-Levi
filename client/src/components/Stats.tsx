import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 499, suffix: "+", label: "Happy Clients" },
  { value: 4999, suffix: "+", label: "Filings Completed" },
  { value: 100, suffix: "%", label: "Success Rate" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl sm:text-5xl font-display font-bold mb-2" data-testid={`text-stat-value-${index}`}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm sm:text-base text-primary-foreground/90" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
