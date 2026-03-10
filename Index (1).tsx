import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ModelDemo from "@/components/ModelDemo";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import PerformanceSection from "@/components/PerformanceSection";
import ProcessSection from "@/components/ProcessSection";
import DatasetSection from "@/components/DatasetSection";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

const Index = () => {
  const demoRef = useRef<HTMLDivElement>(null);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <HeroSection onTryModel={scrollToDemo} />
      <div ref={demoRef}>
        <ModelDemo />
      </div>
      <HowItWorks />
      <FeaturesSection />
      <PerformanceSection />
      <ProcessSection />
      <DatasetSection />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Index;
