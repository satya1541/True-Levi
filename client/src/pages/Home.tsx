import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import TrustSignals from "@/components/TrustSignals";
import About from "@/components/About";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <TrustSignals />
      <Services />
      <About />
      <Partners />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}
