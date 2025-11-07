import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";
import aiTech from "@/assets/ai-tech.png";

const visionPoints = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Empower creators to maximize their content reach without spending hours on repurposing."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Leverage cutting-edge AI to automatically identify viral moments and optimize for each platform."
  },
  {
    icon: Users,
    title: "Creator Community",
    description: "Build a thriving ecosystem where creators share, learn, and grow together."
  },
  {
    icon: TrendingUp,
    title: "Scale Effortlessly",
    description: "From solo creators to enterprise teams—grow your content strategy without limits."
  }
];

const Vision = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(270,65%,55%)]/5 via-transparent to-[hsl(355,85%,65%)]/5" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <img 
                src={aiTech} 
                alt="AI Technology Visualization" 
                className="w-full h-auto rounded-3xl shadow-[var(--shadow-brand)]"
              />
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-[hsl(270,65%,55%)]/20 to-[hsl(340,75%,60%)]/20 blur-3xl" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="mb-6">
              <p className="text-sm font-semibold text-[hsl(var(--primary))] mb-3 uppercase tracking-wider">
                Our Vision
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Transforming Content Creation<br />
                <span className="gradient-text">One Clip at a Time</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe every creator deserves to amplify their voice without the technical burden. 
                Snipify AI is built to eliminate the gap between creation and distribution, 
                giving you more time to do what you love—create.
              </p>
            </div>

            <div className="space-y-6 mt-8">
              {visionPoints.map((point, index) => (
                <div 
                  key={point.title}
                  className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-[hsl(var(--primary))]/30 transition-colors"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center shadow-lg">
                      <point.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;