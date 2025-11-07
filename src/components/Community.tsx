import { MessageSquare, Users, Award, Share2, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import communityImg from "@/assets/community.png";

const communityFeatures = [
  {
    icon: MessageSquare,
    title: "Connect & Chat",
    description: "Join real-time conversations with fellow creators and share your wins."
  },
  {
    icon: Users,
    title: "Share Your Work",
    description: "Post your best snippets, get feedback, and inspire others in the community."
  },
  {
    icon: Award,
    title: "Learn Together",
    description: "Access tutorials, tips, and strategies from top content creators."
  },
  {
    icon: TrendingUp,
    title: "Grow Together",
    description: "Collaborate on projects, cross-promote content, and build your audience."
  }
];

const stats = [
  { number: "10K+", label: "Creators Ready", icon: Users },
  { number: "500K+", label: "Clips Generated", icon: Share2 },
  { number: "2M+", label: "Community Posts", icon: Heart }
];

const Community = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-[hsl(355,85%,65%)]/10 to-[hsl(270,65%,55%)]/10 blur-3xl animate-float" />
      <div className="absolute bottom-40 left-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-[hsl(200,75%,60%)]/10 to-[hsl(170,65%,55%)]/10 blur-3xl animate-float-delayed" />

      <div className="container relative">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-semibold text-[hsl(var(--primary))] mb-3 uppercase tracking-wider">
            Join the Community
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Thriving Creator<br />
            <span className="gradient-text">Community Awaits</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with thousands of creators, share your content, get feedback, 
            and grow together in our vibrant community platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Community image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src={communityImg} 
                alt="Snipify AI Community" 
                className="w-full h-auto rounded-3xl shadow-[var(--shadow-brand)] border border-border/50"
              />
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-[hsl(340,75%,60%)]/20 via-[hsl(270,65%,55%)]/20 to-[hsl(200,75%,60%)]/20 blur-3xl" />
            </div>
          </div>

          {/* Right: Features grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {communityFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 rounded-2xl border border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all duration-300 group"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--accent))]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-muted/30 p-8 md:p-12 shadow-[var(--shadow-soft)] animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] mb-4 shadow-lg">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6 border-t border-border">
            <p className="text-lg font-medium mb-4">Ready to be part of something bigger?</p>
            <Button size="lg" className="gradient-brand text-white border-0 shadow-[var(--shadow-brand)] hover:opacity-90 transition-opacity">
              Join the Waitlist Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;