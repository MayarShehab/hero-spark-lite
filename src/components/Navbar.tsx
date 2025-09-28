import { Button } from "@/components/ui/button";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-lg' 
        : 'bg-white/10 backdrop-blur-lg border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-button rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
              <Zap className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-hero-accent transition-colors duration-300">BuildAmazing</span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-all duration-300 story-link relative group py-2"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100 transform" />
              </a>
            ))}
          </div>

          {/* Enhanced Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Sign In
            </Button>
            <Button 
              variant="outline" 
              className="text-white border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              Sign Up
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-hero-accent to-hero-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Get Started</span>
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-300 hover:scale-110 relative overflow-hidden group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <div className="relative">
              {isMenuOpen ? (
                <X className="w-6 h-6 transform rotate-0 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 transform rotate-0 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-xl rounded-lg mt-2 border border-white/20 shadow-xl">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex items-center justify-between">
                  {item.name}
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </span>
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/30">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20 justify-start transition-all duration-300 hover:scale-105 hover:translate-x-2"
              >
                Sign In
              </Button>
              <Button 
                variant="outline" 
                className="text-white border-white/30 hover:bg-white/20 justify-start transition-all duration-300 hover:scale-105 hover:translate-x-2"
              >
                Sign Up
              </Button>
              <Button 
                variant="hero" 
                size="sm"
                className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:translate-x-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-hero-accent to-hero-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Get Started</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;