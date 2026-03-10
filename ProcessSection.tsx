import { motion } from "framer-motion";
import { FileText, Filter, Brain, CheckSquare } from "lucide-react";

const steps = [
  { icon: FileText, step: "Step 1", title: "Text Cleaning", desc: "Remove HTML tags, special characters, stopwords, and normalize text through stemming/lemmatization." },
  { icon: Filter, step: "Step 2", title: "Feature Extraction", desc: "Apply TF-IDF vectorization and extract n-grams, sentiment scores, and readability features." },
  { icon: Brain, step: "Step 3", title: "Model Prediction", desc: "Feed processed features into trained ML classifier to compute probability scores." },
  { icon: CheckSquare, step: "Step 4", title: "Output Classification", desc: "Return final label (Fake/Real) with confidence score above decision threshold." },
];

const ProcessSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">How Fake News is Detected</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">The step-by-step classification pipeline</p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated rounded-xl p-6 flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{s.step}</span>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
