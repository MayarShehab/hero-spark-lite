import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Star, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-30"
        />
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-hero-primary/30 via-transparent to-hero-accent/20" />
      </div>
      
      {/* Creative floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-hero-accent/30 rounded-full blur-2xl animate-pulse delay-300" />
      <div className="absolute top-1/3 right-20 w-48 h-48 bg-hero-secondary/25 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-hero-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse delay-500" />
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 right-1/3 w-16 h-16 border-2 border-white/30 rotate-45 animate-spin" style={{animationDuration: '20s'}} />
      <div className="absolute bottom-1/3 right-10 w-12 h-12 bg-hero-accent/40 transform rotate-12 animate-bounce" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm mb-8 hover:bg-white/20 transition-smooth animate-fade-in group">
          <Sparkles className="w-5 h-5 text-hero-accent group-hover:rotate-12 transition-transform" />
          <span className="font-medium">✨ Unleash Your Creative Potential</span>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 200}ms`}} />
            ))}
          </div>
        </div>
        
        {/* Dynamic headline with staggered animation */}
        <div className="space-y-4 mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight animate-scale-in text-white">
            HELLO!
          </h1>
        </div>
        
        {/* Enhanced description */}
        <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in">
          Transform your wildest ideas into reality with our revolutionary platform. 
          <span className="text-hero-accent font-semibold"> Join millions of creators</span> who are already 
          building the future, one innovation at a time.
        </p>
        
        {/* Creative CTA Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-10 py-5 h-auto group hover-scale relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-hero-accent to-hero-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-3">
              <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Start Creating Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          
          <Button 
            variant="hero-outline" 
            size="lg"
            className="text-lg px-10 py-5 h-auto group hover-scale"
          >
            <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
            Watch the Magic
          </Button>
        </div>
        
        {/* Creative stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20 animate-fade-in">
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">2M+</div>
            <div className="text-white/70">Creative Minds</div>
            <div className="w-16 h-1 bg-hero-accent mx-auto mt-2 group-hover:w-24 transition-all" />
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">99.9%</div>
            <div className="text-white/70">Success Rate</div>
            <div className="w-16 h-1 bg-hero-secondary mx-auto mt-2 group-hover:w-24 transition-all" />
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">24/7</div>
            <div className="text-white/70">Innovation</div>
            <div className="w-16 h-1 bg-hero-primary mx-auto mt-2 group-hover:w-24 transition-all" />
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center hover:border-white/60 transition-colors cursor-pointer">
          <div className="w-1 h-3 bg-hero-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;