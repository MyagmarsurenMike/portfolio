import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import Projects from "@/component/Projects";
import Timeline from "@/component/Timeline";
import TechStack from "@/component/TechStack";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import BreathingBulbs from "@/component/BreathingBulbs";
import CustomCursor from "@/component/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <BreathingBulbs />
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}
