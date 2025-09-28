import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
      </div>
    </PageTransition>
  );
};

export default Index;
