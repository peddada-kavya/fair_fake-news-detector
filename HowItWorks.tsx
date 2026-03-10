import { motion } from "framer-motion";
import { Database, Cpu, BarChart3, Zap } from "lucide-react";

const steps = [
  { icon: Database, title: "Data Preprocessing", desc: "Raw text is cleaned by removing stopwords, punctuation, and applying lemmatization to normalize the input." },
  { icon: BarChart3, title: "Feature Extraction", desc: "TF-IDF vectorization and NLP techniques convert text into numerical features the model can understand." },
  { icon: Cpu, title: "ML Model Classification", desc: "Trained classifiers like Logistic Regression, Naive Bayes, or Random Forest analyze the extracted features." },
  { icon: Zap, title: "Prediction Output", desc: "The model outputs a classification (Fake/Real) with a confidence score based on learned patterns." },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">How the AI Model Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A simplified look at the machine learning pipeline behind the detection system</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated rounded-xl p-6 text-center relative"
            >
              <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="absolute top-4 right-4 text-xs font-bold text-muted-foreground/40">0{i + 1}</span>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
