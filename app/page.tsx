import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <main>
      <ScrollObserver />
      <div className="bg-grid fixed inset-0 pointer-events-none z-0 opacity-100" aria-hidden="true" />
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
