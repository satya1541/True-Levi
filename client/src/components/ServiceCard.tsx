import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ image, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full hover-elevate transition-all duration-300 hover:shadow-lg group" data-testid={`card-service-${index}`}>
        <div className="flex flex-col h-full">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={image} 
              alt={`${title} - Professional financial consulting service by True Levy India`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-display font-semibold mb-3" data-testid={`text-service-title-${index}`}>
              {title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
              {description}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
