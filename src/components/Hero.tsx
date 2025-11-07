import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";
const Hero = () => {
  return <section className="relative overflow-hidden">
      {/* Floating bubbles background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-[hsl(355,85%,65%)] to-[hsl(340,75%,60%)] opacity-20 blur-3xl animate-float" />
        <div className="absolute top-40 right-[15%] w-40 h-40 rounded-full bg-gradient-to-br from-[hsl(270,65%,55%)] to-[hsl(200,75%,60%)] opacity-20 blur-3xl animate-float-delayed" />
        <div className="absolute bottom-20 left-[20%] w-36 h-36 rounded-full bg-gradient-to-br from-[hsl(200,75%,60%)] to-[hsl(170,65%,55%)] opacity-20 blur-3xl animate-float" />
        <div className="absolute top-60 right-[35%] w-24 h-24 rounded-full bg-gradient-to-br from-[hsl(340,75%,60%)] to-[hsl(270,65%,55%)] opacity-15 blur-2xl animate-float-delayed" />
      </div>

      <div className="container py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="animate-fade-in">
            

            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Automate, Repurpose<br />
              <span className="gradient-text">& Amplify Your Content</span>
            </h1>

            <p className="mb-4 text-lg md:text-xl text-muted-foreground">
              Turn your videos, podcasts, and livestreams into multiple social media posts in seconds—powered by AI.
            </p>

            <p className="mb-8 text-base font-medium text-foreground/70">
              Create Once. Share Everywhere. Effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-brand text-white border-0 shadow-[var(--shadow-brand)] hover:opacity-90 transition-opacity">
                Notify Me When It's Ready
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-2">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["🎬 Video Content", "🎙️ Podcasts", "📱 Social Media", "🤖 AI-Powered"].map(feature => <div key={feature} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium">
                  {feature}
                </div>)}
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative animate-fade-in" style={{
          animationDelay: "200ms"
        }}>
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-brand)] border border-border/50">
              <img src={heroDashboard} alt="Snipify AI Dashboard Preview" className="w-full h-auto" />
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[hsl(355,85%,65%)]/20 via-[hsl(270,65%,55%)]/20 to-[hsl(200,75%,60%)]/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;