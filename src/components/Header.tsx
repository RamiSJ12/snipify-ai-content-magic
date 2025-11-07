import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Snipify AI" className="h-8 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#early-access" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Early Access
          </a>
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
        </div>
        
        <Button className="md:hidden" variant="ghost" size="sm">
          Menu
        </Button>
      </nav>
    </header>
  );
};

export default Header;
