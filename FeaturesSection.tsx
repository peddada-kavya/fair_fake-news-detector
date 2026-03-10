import { motion } from "framer-motion";
import { PenTool, Heart, Key, Languages, ExternalLink } from "lucide-react";

const features = [
  { icon: PenTool, title: "Writing Style Analysis", desc: "Detects sensationalist language, grammatical errors, and unusual formatting common in fabricated articles." },
  { icon: Heart, title: "Sentiment Analysis", desc: "Measures emotional tone and bias indicators that often distinguish fake from legitimate reporting." },
  { icon: Key, title: "Keyword Patterns", desc: "Identifies clickbait phrases, misleading headlines, and manipulative vocabulary patterns." },
  { icon: Languages, title: "Linguistic Features", desc: "Analyzes sentence structure, complexity, and readability metrics for authenticity signals." },
  { icon: ExternalLink, title: "Fact-Checking Signals", desc: "Cross-references claims against known fact-checking databases and source credibility scores." },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Features Used for Detection</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Multiple analytical dimensions work together for accurate classification</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-elevated rounded-xl p-6 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
