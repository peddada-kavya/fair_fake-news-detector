import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = ({ onTryModel }: { onTryModel: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            AI-Powered Misinformation Detection
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Fake News{" "}
            <span className="text-gradient">Detection</span>{" "}
            System
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            AI-powered system to classify news articles as real or fake
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Misinformation spreads faster than ever in the digital age. Our machine learning model analyzes linguistic patterns, sentiment, and writing style to help identify potentially fabricated news content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="hero-gradient text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
            onClick={onTryModel}
          >
            Try the Model
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6"
            onClick={onTryModel}
          >
            Learn More <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
