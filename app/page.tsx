import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MagneticButtons } from "@/components/MagneticButtons";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <main>
        <Services />
        <WhyUs />
        <Projects />
        <Process />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MagneticButtons />
    </div>
  );
}
