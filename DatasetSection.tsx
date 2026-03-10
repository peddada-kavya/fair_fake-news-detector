import { motion } from "framer-motion";
import { Database, FileText } from "lucide-react";

const DatasetSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Training Dataset</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">The foundation of our model's learning</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-elevated rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex gap-4">
            <div className="w-32 h-32 rounded-xl bg-primary/10 flex flex-col items-center justify-center">
              <FileText className="h-8 w-8 text-primary mb-1" />
              <span className="text-2xl font-bold text-primary">23K</span>
              <span className="text-xs text-muted-foreground">Real Articles</span>
            </div>
            <div className="w-32 h-32 rounded-xl bg-destructive/10 flex flex-col items-center justify-center">
              <Database className="h-8 w-8 text-destructive mb-1" />
              <span className="text-2xl font-bold text-destructive">21K</span>
              <span className="text-xs text-muted-foreground">Fake Articles</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Balanced Binary Classification Dataset</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The model was trained on a curated dataset of over 44,000 news articles, split approximately equally between verified real news from reputable sources and confirmed fake news articles. The dataset includes diverse topics, writing styles, and publication dates to ensure robust generalization.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DatasetSection;
