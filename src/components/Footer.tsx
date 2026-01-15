import { Heart } from "lucide-react";
import novaBuddyLogo from "@/assets/novabuddy-logo.jpeg";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src={novaBuddyLogo} 
              alt="NovaBuddy Logo" 
              className="h-10 w-auto object-contain"
            />
            <span className="font-display font-bold text-lg gradient-text">
              NovaBuddy
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Features
            </a>
            <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Dashboard
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Team
            </a>
            <a href="#tech" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Tech
            </a>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>for Open Innovation</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 NovaBuddy Team. College Hackathon Project — Open Innovation Theme.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
