import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Benefits from "@/components/benefits";
import About from "@/components/about";
import Process from "@/components/process";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Benefits />
      <About />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
