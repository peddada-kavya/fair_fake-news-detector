import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-heading font-semibold text-lg">Fake News Detection System</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Fighting misinformation with the power of artificial intelligence
        </p>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Fake News Detection System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
