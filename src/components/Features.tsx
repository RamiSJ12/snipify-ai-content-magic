import { Sparkles, Share2, Palette, Zap, Video, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Content Snipping",
    label: "Smart AI",
    description: "Automatically identify the best moments in your videos and podcasts with advanced AI algorithms that understand context and engagement.",
    gradient: "from-[hsl(355,85%,65%)] to-[hsl(340,75%,60%)]"
  },
  {
    icon: Share2,
    title: "Multi-Platform Repurposing",
    label: "Cross-Platform",
    description: "Seamlessly share clips across YouTube, TikTok, Instagram, LinkedIn, and more with auto-optimized formats for each platform.",
    gradient: "from-[hsl(270,65%,55%)] to-[hsl(200,75%,60%)]"
  },
  {
    icon: Palette,
    title: "Custom Templates & Branding",
    label: "Brand-Ready",
    description: "Make every snippet look professional and on-brand with customizable templates, fonts, colors, and styling options.",
    gradient: "from-[hsl(200,75%,60%)] to-[hsl(170,65%,55%)]"
  },
  {
    icon: Zap,
    title: "Smart Automation Workflows",
    label: "Automated",
    description: "Set up intelligent workflows to automatically repurpose content and schedule posts—saving hours every week.",
    gradient: "from-[hsl(340,75%,60%)] to-[hsl(270,65%,55%)]"
  },
  {
    icon: Video,
    title: "Advanced Video Editor",
    label: "Professional",
    description: "Fine-tune your clips with our built-in editor featuring captions, transitions, effects, and audio enhancement tools.",
    gradient: "from-[hsl(355,85%,65%)] to-[hsl(270,65%,55%)]"
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    label: "Data-Driven",
    description: "Track performance across platforms, understand what content resonates, and optimize your strategy with deep analytics.",
    gradient: "from-[hsl(170,65%,55%)] to-[hsl(200,75%,60%)]"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-semibold text-[hsl(var(--primary))] mb-3 uppercase tracking-wider">Features Preview</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features<br />
            <span className="gradient-text">Coming Soon</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your long-form content into viral social media posts—automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-brand)] hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              <div className="mb-2">
                <span className="text-xs font-semibold text-[hsl(var(--primary))] uppercase tracking-wider">
                  {feature.label}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
