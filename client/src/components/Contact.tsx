import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Star, MessageCircle, CheckCircle2, XCircle, X } from "lucide-react";
import { services } from "@/data/services";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const testimonials = [
  {
    id: 1,
    review: "True Levy has been instrumental in helping us streamline our financial processes. Their expertise in tax compliance saved us both time and money. Highly professional and reliable service!",
    name: "Ravi Ghosh",
    initials: "RG",
    role: "Business Owner",
  },
  {
    id: 2,
    review: "Outstanding service! The team at True Levy guided us through company registration and GST filing with such ease. Their attention to detail and prompt responses made the entire process smooth.",
    name: "Navin Panda",
    initials: "NP",
    role: "Startup Founder",
  },
  {
    id: 3,
    review: "We've been working with True Levy for over two years now. Their accounting and bookkeeping services are top-notch. They always ensure we stay compliant and maximize our returns.",
    name: "Akash Rout",
    initials: "AR",
    role: "Managing Director",
  },
  {
    id: 4,
    review: "True Levy's financial consulting has transformed how we manage our business finances. Their insights and strategic advice have been invaluable to our growth. I cannot recommend them enough!",
    name: "Nirupuma Das",
    initials: "ND",
    role: "CEO, Tech Solutions",
  },
];

interface PopupState {
  show: boolean;
  type: 'success' | 'error';
  title: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popup, setPopup] = useState<PopupState>({
    show: false,
    type: 'success',
    title: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return await res.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        setPopup({
          show: true,
          type: 'success',
          title: 'Message Sent Successfully!',
          message: data.message || "We'll get back to you within 24 hours. Check your email for confirmation."
        });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setPopup({
          show: true,
          type: 'error',
          title: 'Failed to Send Message',
          message: data.error || "Please try again or contact us directly at info@truelevy.in"
        });
      }
    },
    onError: (error: any) => {
      setPopup({
        show: true,
        type: 'error',
        title: 'Failed to Send Message',
        message: error?.message || "Please try again or contact us directly at info@truelevy.in"
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-sm font-medium border border-primary/30 inline-block mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-contact-title">
            Contact True Levy - Expert Financial Consultants
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to take your business to the next level? Contact our experienced chartered accountants and tax consultants today for a free consultation on GST filing, income tax, company registration, ROC compliance, and financial advisory services across India.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    required
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger id="service" data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    required
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg" 
                  data-testid="button-submit"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:info@truelevy.in?subject=Inquiry%20about%20True%20Levy%20Services&body=Hi%20True%20Levy%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20financial%20consulting%20services.%0A%0AThank%20you." 
                      className="text-muted-foreground hover:text-primary transition-colors" 
                      data-testid="link-email"
                    >
                      info@truelevy.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a 
                      href="tel:+919692000140" 
                      className="text-muted-foreground hover:text-primary transition-colors" 
                      data-testid="link-phone"
                    >
                      +91-9692000140
                    </a>
                    <div className="flex gap-2 mt-2">
                      <a
                        href="tel:+919692000140"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm"
                        data-testid="button-call-now"
                      >
                        <Phone className="h-3 w-3" />
                        Call Now
                      </a>
                      <a
                        href="https://wa.me/919692000140?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20financial%20consulting%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-green-600/10 text-green-600 dark:text-green-400 hover:bg-green-600/20 transition-colors text-sm"
                        data-testid="button-whatsapp"
                      >
                        <MessageCircle className="h-3 w-3" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office</h4>
                    <p className="text-muted-foreground" data-testid="text-address">
                      Plot-9429, Cuttack - Puri Bypass Rd<br />
                      B.B.Nagar, Baragarh<br />
                      Bhubaneswar, Odisha 751002
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-accent/5 border-accent/20">
              <h4 className="font-display font-semibold text-lg mb-2">Business Hours</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Saturday: 10 AM - 7 PM</p>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-sm font-medium border border-primary/30 inline-block mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6" data-testid="text-testimonials-title">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say about our services.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ x: 1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -1000, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Card className="p-8 md:p-12">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" data-testid={`star-rating-${i}`} />
                      ))}
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid={`text-review-${testimonials[currentIndex].id}`}>
                      "{testimonials[currentIndex].review}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center font-semibold text-lg text-primary">
                        {testimonials[currentIndex].initials}
                      </div>
                      <div>
                        <p className="font-semibold text-lg" data-testid={`text-reviewer-${testimonials[currentIndex].id}`}>
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <AnimatePresence>
      {popup.show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setPopup({ ...popup, show: false })}
            data-testid="popup-overlay"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-md"
            >
              <Card className="p-8 shadow-2xl border-2 bg-background">
              <div className="flex justify-end mb-2">
                <button
                  onClick={() => setPopup({ ...popup, show: false })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-close-popup"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mx-auto mb-6"
                >
                  {popup.type === 'success' ? (
                    <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" data-testid="icon-success" />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto">
                      <XCircle className="h-12 w-12 text-red-600 dark:text-red-400" data-testid="icon-error" />
                    </div>
                  )}
                </motion.div>

                <h3 className="text-2xl font-display font-bold mb-3" data-testid="text-popup-title">
                  {popup.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed" data-testid="text-popup-message">
                  {popup.message}
                </p>

                <Button
                  onClick={() => setPopup({ ...popup, show: false })}
                  className="w-full"
                  size="lg"
                  data-testid="button-popup-close"
                >
                  {popup.type === 'success' ? 'Great, Thanks!' : 'Close'}
                </Button>
              </div>
              </Card>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
