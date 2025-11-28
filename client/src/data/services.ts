import companyRegImage from "@assets/generated_images/Company_LLP_Registration_Service_7ee00573.png";
import rocFilingImage from "@assets/generated_images/ROC_Filing_Service_b34c67b3.png";
import gstImage from "@assets/generated_images/GST_Registration_Filing_Service_d184a3bf.png";
import incomeTaxImage from "@assets/generated_images/Income_Tax_TDS_Filing_658e1afd.png";
import financialStatementsImage from "@assets/generated_images/Financial_Statements_Preparation_Service_8537fe97.png";
import projectFinanceImage from "@assets/generated_images/Project_Finance_Assistance_Service_e924f6cd.png";
import epfEsiImage from "@assets/generated_images/EPF_ESI_Registration_Service_38b770ae.png";
import regulatoryImage from "@assets/generated_images/Regulatory_License_Support_Service_7266a037.png";
import dscImage from "@assets/generated_images/Digital_Signature_Certificate_Service_efa6fd23.png";
import loanImage from "@assets/generated_images/business_loan_service.png";
import copyrightTrademarkImage from "@assets/generated_images/copyright_trademark_service.png";
import msmeUdyamImage from "@assets/generated_images/msme_udyam_registration_service.png";

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "company-registration",
    image: companyRegImage,
    title: "Company / LLP Registration",
    description: "Complete assistance with company and LLP registration, including documentation and ROC filing.",
  },
  {
    id: "roc-filing",
    image: rocFilingImage,
    title: "ROC Filing",
    description: "Expert handling of all ROC compliance requirements, annual returns, and statutory filings.",
  },
  {
    id: "gst",
    image: gstImage,
    title: "GST Registration & Filing",
    description: "Seamless GST registration and timely monthly/quarterly filing to ensure compliance.",
  },
  {
    id: "income-tax",
    image: incomeTaxImage,
    title: "Income Tax & TDS Filing",
    description: "Professional income tax return filing and TDS compliance for individuals and businesses.",
  },
  {
    id: "financial-statements",
    image: financialStatementsImage,
    title: "Financial Statements",
    description: "Preparation of comprehensive financial statements including balance sheets and P&L accounts.",
  },
  {
    id: "project-finance",
    image: projectFinanceImage,
    title: "Project Finance Assistance",
    description: "Expert guidance on project financing, funding options, and financial planning strategies.",
  },
  {
    id: "epf-esi",
    image: epfEsiImage,
    title: "EPF / ESI Registration",
    description: "Complete support for EPF and ESI registration and compliance management.",
  },
  {
    id: "regulatory",
    image: regulatoryImage,
    title: "Regulatory License Support",
    description: "Comprehensive assistance with regulatory licenses and ongoing compliance consulting.",
  },
  {
    id: "dsc",
    image: dscImage,
    title: "Digital Signature Certificate (DSC) Registration",
    description: "Quick and hassle-free DSC registration for secure digital signing of documents and government filings.",
  },
  {
    id: "loan",
    image: loanImage,
    title: "Loan Assistance",
    description: "Expert guidance on business loans, working capital financing, and loan documentation support for your growth needs.",
  },
  {
    id: "copyright-trademark",
    image: copyrightTrademarkImage,
    title: "Copyright & Trademark Registration",
    description: "Complete assistance with intellectual property protection including copyright and trademark registration and compliance.",
  },
  {
    id: "msme-udyam",
    image: msmeUdyamImage,
    title: "MSME / Udyam Registration",
    description: "Quick Udyam registration for MSMEs to unlock government benefits including priority lending, subsidies, and preference in government tenders.",
  },
];
