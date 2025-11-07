import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Features from "@/components/Features";
import Community from "@/components/Community";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Vision />
        <Features />
        <Community />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
