import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Star, Zap, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Dynamic Background with Parallax - Mobile Optimized */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-30 transition-transform duration-1000 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0001})`
          }}
        />
        {/* Interactive mesh gradient overlay - Reduced on mobile */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-hero-primary/30 via-transparent to-hero-accent/20 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              hsl(244 71% 32% / 0.3) 0%, 
              transparent 50%, 
              hsl(217 91% 60% / 0.2) 100%)`
          }}
        />
      </div>
      
      {/* Enhanced floating elements with mouse interaction - Responsive */}
      <div 
        className="absolute top-16 md:top-20 left-4 md:left-10 w-20 h-20 md:w-32 md:h-32 bg-hero-accent/30 rounded-full blur-2xl animate-pulse delay-300 transition-transform duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      />
      <div 
        className="absolute top-1/3 right-8 md:right-20 w-32 h-32 md:w-48 md:h-48 bg-hero-secondary/25 rounded-full blur-3xl animate-pulse delay-700 transition-transform duration-1000"
        style={{
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 md:left-1/3 w-48 h-48 md:w-72 md:h-72 bg-hero-primary/20 rounded-full blur-3xl animate-pulse delay-1000 transition-transform duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * -0.01}px)`
        }}
      />
      <div 
        className="absolute top-1/2 left-4 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-white/20 rounded-full blur-xl animate-pulse delay-500 transition-transform duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      
      {/* Enhanced geometric shapes - Mobile responsive */}
      <div 
        className="absolute top-1/4 right-1/3 w-10 h-10 md:w-16 md:h-16 border-2 border-white/30 rotate-45 animate-spin transition-transform duration-1000" 
        style={{
          animationDuration: '20s',
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px) rotate(45deg)`
        }} 
      />
      <div 
        className="absolute bottom-1/3 right-4 md:right-10 w-8 h-8 md:w-12 md:h-12 bg-hero-accent/40 transform rotate-12 animate-bounce transition-transform duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.015}px) rotate(12deg)`
        }}
      />
      
      {/* Additional floating particles - Fewer on mobile */}
      <div className="hidden md:block absolute top-10 right-1/4 w-2 h-2 bg-white/60 rounded-full animate-ping delay-200" />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 md:w-3 md:h-3 bg-hero-accent/60 rounded-full animate-ping delay-1500" />
      <div className="hidden md:block absolute top-1/2 right-10 w-1 h-1 bg-hero-secondary/80 rounded-full animate-ping delay-800" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Enhanced floating badge with accessibility */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm mb-8 hover:bg-white/20 transition-all duration-500 animate-fade-in group cursor-pointer hover:scale-105"
             role="banner"
             aria-label="New feature announcement">
          <Sparkles className="w-5 h-5 text-hero-accent group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-medium">✨ Unleash Your Creative Potential</span>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 200}ms`}} />
            ))}
          </div>
        </div>
        
        {/* Enhanced dynamic headline with improved typography - Mobile responsive */}
        <div className="space-y-4 mb-6 md:mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight animate-scale-in text-white relative px-4">
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">
              HELLO!
            </span>
            <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-4 h-4 md:w-8 md:h-8 bg-hero-accent/30 rounded-full blur-lg animate-pulse" />
          </h1>
        </div>
        
        {/* Enhanced description with better readability - Mobile optimized */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed animate-fade-in font-light px-4">
          Transform your wildest ideas into reality with our revolutionary platform. 
          <span className="text-hero-accent font-semibold bg-hero-accent/10 px-2 py-1 rounded-md"> Join millions of creators</span> who are already 
          building the future, one innovation at a time.
        </p>
        
        {/* Enhanced CTA Section with improved interactions - Mobile responsive */}
         <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 animate-fade-in px-4">
           <Button 
             variant="hero" 
             size="lg"
             className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 h-auto group hover-scale relative overflow-hidden shadow-2xl hover:shadow-hero transition-all duration-300 w-full sm:w-auto"
             aria-label="Start creating with our platform"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-hero-accent to-hero-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             <span className="relative flex items-center justify-center gap-3">
               <Zap className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
               Start Creating Now
               <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
             </span>
           </Button>
           
           <Button 
             variant="hero-outline" 
             size="lg"
             className="text-base md:text-lg px-8 md:px-10 py-4 md:py-5 h-auto group hover-scale border-2 hover:border-hero-accent transition-all duration-300 w-full sm:w-auto"
             aria-label="Watch demonstration video"
           >
             <Play className="w-4 h-4 md:w-5 md:h-5 mr-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
             Watch the Magic
           </Button>
         </div>
        
        {/* Enhanced stats grid with better animations - Mobile responsive */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12 border-t border-white/20 animate-fade-in px-4"
              role="region"
              aria-label="Platform statistics">
           <div className="text-center group cursor-pointer" tabIndex={0} role="button" aria-label="2 million creative minds using our platform">
             <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-hero-accent">2M+</div>
             <div className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors duration-300">Creative Minds</div>
             <div className="w-12 md:w-16 h-1 bg-hero-accent mx-auto mt-2 group-hover:w-16 md:group-hover:w-24 transition-all duration-300 rounded-full" />
           </div>
           <div className="text-center group cursor-pointer" tabIndex={0} role="button" aria-label="99.9% success rate for projects">
             <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-hero-secondary">99.9%</div>
             <div className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors duration-300">Success Rate</div>
             <div className="w-12 md:w-16 h-1 bg-hero-secondary mx-auto mt-2 group-hover:w-16 md:group-hover:w-24 transition-all duration-300 rounded-full" />
           </div>
           <div className="text-center group cursor-pointer" tabIndex={0} role="button" aria-label="24/7 innovation and support">
             <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-hero-primary">24/7</div>
             <div className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors duration-300">Innovation</div>
             <div className="w-12 md:w-16 h-1 bg-hero-primary mx-auto mt-2 group-hover:w-16 md:group-hover:w-24 transition-all duration-300 rounded-full" />
           </div>
         </div>
      </div>
      
      {/* Enhanced scroll indicator with accessibility */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        role="button"
        tabIndex={0}
        aria-label="Scroll down to see more content"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center hover:border-white/60 transition-all duration-300 group-hover:scale-110 relative overflow-hidden">
          <div className="w-1 h-3 bg-hero-accent rounded-full mt-2 animate-pulse group-hover:bg-white transition-colors duration-300" />
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </div>
        <ChevronDown className="w-4 h-4 text-white/60 mx-auto mt-2 group-hover:text-white transition-colors duration-300 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;