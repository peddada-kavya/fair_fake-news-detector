import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const metrics = [
  { name: "Accuracy", value: 94.2 },
  { name: "Precision", value: 93.8 },
  { name: "Recall", value: 92.5 },
  { name: "F1 Score", value: 93.1 },
];

const colors = ["hsl(210, 100%, 56%)", "hsl(172, 66%, 50%)", "hsl(152, 60%, 48%)", "hsl(38, 92%, 55%)"];

const PerformanceSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Model Performance</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Evaluation metrics from testing on held-out dataset</p>
        </motion.div>

        <div className="grid sm:grid-cols-4 gap-4 mb-10">
          {metrics.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated rounded-xl p-6 text-center"
            >
              <p className="text-sm text-muted-foreground mb-1">{m.name}</p>
              <p className="text-3xl font-bold text-gradient">{m.value}%</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-elevated rounded-xl p-6"
        >
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={metrics} barSize={48}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
              <XAxis dataKey="name" tick={{ fontSize: 13, fill: "hsl(215, 12%, 55%)" }} />
              <YAxis domain={[85, 100]} tick={{ fontSize: 13, fill: "hsl(215, 12%, 55%)" }} />
              <Tooltip
                formatter={(value: number) => [`${value}%`, "Score"]}
                contentStyle={{ backgroundColor: "hsl(220, 18%, 12%)", border: "1px solid hsl(220, 14%, 22%)", borderRadius: "8px", color: "hsl(210, 20%, 92%)" }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {metrics.map((_, i) => (
                  <Cell key={i} fill={colors[i]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceSection;
