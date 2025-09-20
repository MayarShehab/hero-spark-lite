import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronLeft, ChevronRight, Rocket, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    id: 1,
    icon: Rocket,
    badge: "🚀 Launch Faster",
    title: "Build Something",
    highlight: "Amazing",
    description: "Transform your ideas into reality with our cutting-edge platform. Join thousands of creators who are already building the future.",
    stats: [
      { value: "50K+", label: "Active Users" },
      { value: "99.9%", label: "Uptime" },
      { value: "24/7", label: "Support" }
    ]
  },
  {
    id: 2,
    icon: Shield,
    badge: "🔒 Secure & Reliable",
    title: "Create With",
    highlight: "Confidence",
    description: "Enterprise-grade security meets developer-friendly tools. Build applications that scale with bulletproof reliability and performance.",
    stats: [
      { value: "256-bit", label: "Encryption" },
      { value: "SOC 2", label: "Compliant" },
      { value: "Global", label: "CDN" }
    ]
  },
  {
    id: 3,
    icon: Zap,
    badge: "⚡ Lightning Fast",
    title: "Deploy in",
    highlight: "Seconds",
    description: "From development to production in just a few clicks. Experience the fastest deployment pipeline that scales automatically with your needs.",
    stats: [
      { value: "< 30s", label: "Deploy Time" },
      { value: "Auto", label: "Scaling" },
      { value: "Edge", label: "Network" }
    ]
  }
];

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0">
              <div className="text-center max-w-5xl mx-auto px-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8 hover:bg-white/20 transition-smooth animate-fade-in">
                  <slide.icon className="w-4 h-4" />
                  <span>{slide.badge}</span>
                </div>
                
                {/* Main headline */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 animate-scale-in">
                  {slide.title}
                  <span className="block bg-gradient-to-r from-hero-accent to-white bg-clip-text text-transparent">
                    {slide.highlight}
                  </span>
                </h1>
                
                {/* Subheading */}
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
                  {slide.description}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-fade-in">
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="text-lg px-8 py-4 h-auto group hover-scale"
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="hero-outline" 
                    size="lg"
                    className="text-lg px-8 py-4 h-auto group hover-scale"
                  >
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 animate-fade-in">
                  {slide.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
        <Button
          variant="hero-outline"
          size="icon"
          onClick={scrollPrev}
          className="pointer-events-auto hover-scale"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="hero-outline"
          size="icon"
          onClick={scrollNext}
          className="pointer-events-auto hover-scale"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover-scale ${
              index === selectedIndex 
                ? "bg-white" 
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;