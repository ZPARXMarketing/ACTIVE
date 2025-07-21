import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Process from "@/components/process";
import LeadCapture from "@/components/lead-capture";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Process />
      <LeadCapture />
      <Footer />
    </div>
  );
}
