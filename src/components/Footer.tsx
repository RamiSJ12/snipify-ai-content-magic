import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="Snipify AI" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Your content, smarter, faster, everywhere.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Follow Us</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                Twitter
              </a>
              <a href="#" className="block text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <div className="space-y-2 text-sm">
              <a href="#features" className="block text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                Features
              </a>
              <a href="#early-access" className="block text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                Early Access
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Snipify AI. All rights reserved. Coming soon to revolutionize your content workflow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
