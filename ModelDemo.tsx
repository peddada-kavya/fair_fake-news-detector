import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle, AlertTriangle, Loader2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const languages = [
  { code: "auto", label: "Auto Detect" },
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "hi", label: "Hindi" },
  { code: "ar", label: "Arabic" },
  { code: "zh", label: "Chinese" },
  { code: "pt", label: "Portuguese" },
  { code: "ru", label: "Russian" },
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
  { code: "tr", label: "Turkish" },
  { code: "it", label: "Italian" },
  { code: "ur", label: "Urdu" },
  { code: "bn", label: "Bengali" },
  { code: "ta", label: "Tamil" },
  { code: "te", label: "Telugu" },
  { code: "ml", label: "Malayalam" },
];

const ModelDemo = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("auto");
  const [result, setResult] = useState<null | { prediction: string; confidence: number; reasoning?: string; detected_language?: string }>(null);
  const [loading, setLoading] = useState(false);

  const handleDetect = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke("detect-fake-news", {
        body: { text: text.trim(), language },
      });

      if (error) {
        console.error("Edge function error:", error);
        toast.error("Analysis failed. Please try again.");
        return;
      }

      if (data?.error) {
        toast.error(data.error);
        return;
      }

      setResult({
        prediction: data.prediction,
        confidence: Math.min(Math.max(data.confidence, 50), 98),
        reasoning: data.reasoning,
        detected_language: data.detected_language,
      });
    } catch (e) {
      console.error("Detection error:", e);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isFake = result?.prediction === "Fake News";

  return (
    <section id="demo" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Try the Model</h2>
          <p className="text-muted-foreground">Paste a news article in any language to check if it's real or fake</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-elevated rounded-2xl p-6 sm:p-8"
        >
          {/* Language Selector */}
          <div className="mb-4">
            <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
              <Globe className="h-4 w-4" />
              Language
            </label>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    language === lang.code
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          <Textarea
            placeholder="Paste a news article or headline here in any language..."
            className="min-h-[160px] text-base resize-none mb-4 bg-muted/50 border-border"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            className="w-full hero-gradient text-base py-5"
            onClick={handleDetect}
            disabled={loading || !text.trim()}
          >
            {loading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Search className="mr-2 h-5 w-5" />
            )}
            {loading ? "Analyzing with AI..." : "Detect News"}
          </Button>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6"
              >
                <div className={`rounded-xl p-6 flex flex-col items-center gap-3 ${
                  isFake ? "bg-destructive/10 border border-destructive/20" : "bg-success/10 border border-success/20"
                }`}>
                  {isFake ? (
                    <AlertTriangle className="h-10 w-10 text-destructive" />
                  ) : (
                    <CheckCircle className="h-10 w-10 text-success" />
                  )}
                  <span className={`text-2xl font-bold ${isFake ? "text-destructive" : "text-success"}`}>
                    {result.prediction}
                  </span>
                  {result.detected_language && (
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">
                      Detected: {result.detected_language}
                    </span>
                  )}
                  <div className="w-full max-w-xs">
                    <div className="flex justify-between text-sm text-muted-foreground mb-1">
                      <span>Confidence</span>
                      <span>{result.confidence}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${result.confidence}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`h-full rounded-full ${isFake ? "bg-destructive" : "bg-success"}`}
                      />
                    </div>
                  </div>
                  {result.reasoning && (
                    <p className="text-sm text-muted-foreground text-center mt-2 max-w-md">
                      {result.reasoning}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelDemo;
