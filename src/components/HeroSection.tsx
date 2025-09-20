import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-hero-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-hero-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8 hover:bg-white/20 transition-smooth">
          <Sparkles className="w-4 h-4" />
          <span>✨ Experience the Future</span>
        </div>
        
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          Build Something
          <span className="block bg-gradient-to-r from-hero-accent to-white bg-clip-text text-transparent">
            Amazing
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          Transform your ideas into reality with our cutting-edge platform. 
          Join thousands of creators who are already building the future.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-4 h-auto group"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="hero-outline" 
            size="lg"
            className="text-lg px-8 py-4 h-auto group"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-white/70">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-white/70">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/70">Support</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;