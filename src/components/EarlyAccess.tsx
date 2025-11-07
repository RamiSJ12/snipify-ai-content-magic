import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Sparkles, Target, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you as soon as Snipify AI launches.",
      });
      setEmail("");
    }
  };

  return (
    <section id="early-access" className="py-12 md:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(270,65%,55%)]/5 via-[hsl(340,75%,60%)]/5 to-[hsl(355,85%,65%)]/5" />
      
      <div className="container relative">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border-2 border-border bg-card p-8 md:p-12 shadow-[var(--shadow-brand)] animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Be the First to Know!
              </h2>
              <p className="text-lg text-muted-foreground">
                Sign up to get early access and exclusive updates from Snipify AI.<br />
                No spam, just the good stuff.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 text-base"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="gradient-brand text-white border-0 hover:opacity-90 transition-opacity h-12"
                >
                  Notify Me
                </Button>
              </div>
            </form>

            <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-border">
              {[
                { icon: Sparkles, text: "Get exclusive early access" },
                { icon: Target, text: "Priority beta testing" },
                { icon: Mail, text: "Product updates" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-[hsl(var(--primary))]" />
                  </div>
                  <span className="text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[hsl(var(--primary))]" />
                No spam
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[hsl(var(--primary))]" />
                Unsubscribe anytime
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[hsl(var(--primary))]" />
                Early access
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
