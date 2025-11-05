import ServiceCard from "../ServiceCard";
import companyRegImage from "@assets/generated_images/Company_LLP_Registration_visual_e362cc0c.png";

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        image={companyRegImage}
        title="Company Registration"
        description="Complete assistance with company and LLP registration, including documentation and ROC filing."
        index={0}
      />
    </div>
  );
}
