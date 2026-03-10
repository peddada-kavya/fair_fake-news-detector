import { motion } from "framer-motion";
import { Code2, Brain, MessageSquare, Palette, Layout } from "lucide-react";

const stack = [
  { icon: Code2, label: "Python" },
  { icon: Brain, label: "Machine Learning" },
  { icon: MessageSquare, label: "NLP" },
  { icon: Layout, label: "React" },
  { icon: Palette, label: "Tailwind CSS" },
];

const TechStack = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Tech Stack</h2>
          <p className="text-muted-foreground">Technologies powering the detection system</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {stack.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-elevated rounded-xl p-6 flex flex-col items-center gap-3 w-32 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <t.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm font-medium">{t.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
