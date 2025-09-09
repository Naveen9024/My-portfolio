import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ["Full Stack", "Web Developer", "Programmer", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Navigation />
      {/* Background with hero glow effect */}
      <div className="absolute inset-0 hero-glow">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-tertiary" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden glass-card p-2 floating">
                <img 
                  src="/lovable-uploads/674234f5-68ac-4eb8-a8b6-d87daca88fb7.png" 
                  alt="Naveen Saini - Full Stack Developer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-electric-blue/30 rounded-full blur-lg animate-glow-pulse" />
              <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-violet-purple/30 rounded-full blur-lg animate-glow-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Center Content */}
          <div className="space-y-8 scroll-reveal order-1 lg:order-2 lg:col-span-1">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
                <div className="mb-4">
                  <span className="text-foreground text-3xl lg:text-5xl block">
                    Naveen Saini
                  </span>
                </div>
                <div className="h-20 flex items-center justify-center lg:justify-start">
                  <span className={`text-gradient-primary transition-all duration-500 animate-pulse ${
                    currentTitle === 0 ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'
                  } ${currentTitle === 0 ? 'block' : 'hidden'}`}>
                    Full Stack
                  </span>
                  <span className={`text-gradient-secondary transition-all duration-500 animate-pulse ${
                    currentTitle === 1 ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'
                  } ${currentTitle === 1 ? 'block' : 'hidden'}`}>
                    Web Developer
                  </span>
                  <span className={`text-gradient-primary transition-all duration-500 animate-pulse ${
                    currentTitle === 2 ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'
                  } ${currentTitle === 2 ? 'block' : 'hidden'}`}>
                    Programmer
                  </span>
                  <span className={`text-gradient-secondary transition-all duration-500 animate-pulse ${
                    currentTitle === 3 ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'
                  } ${currentTitle === 3 ? 'block' : 'hidden'}`}>
                    Problem Solver
                  </span>
                </div>
              </h1>
              
              <p className="text-lg text-foreground-muted leading-relaxed max-w-xl text-center lg:text-left">
                I'm a developer who crafts responsive websites. My job is to make sure every site I build is fast, 
                user-friendly, and looks amazing on any screen. Currently pursuing B.Tech at Jaipur Engineering College.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="text-lg px-8 py-4"
              >
                View Work
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-4"
              >
                Get in Touch
                <Download className="w-5 h-5" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-glass-border/30">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gradient-primary">5+</div>
                <div className="text-xs lg:text-sm text-foreground-muted">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gradient-secondary">4+</div>
                <div className="text-xs lg:text-sm text-foreground-muted">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gradient-primary">1+</div>
                <div className="text-xs lg:text-sm text-foreground-muted">Years Learning</div>
              </div>
            </div>
          </div>

          {/* Right Content - Abstract Image */}
          <div className="relative order-3 lg:order-3">
            <div className="relative glass-card p-8 floating">
              <img 
                src={heroImage} 
                alt="Futuristic abstract developer workspace"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-electric-blue/20 rounded-full blur-xl animate-glow-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-violet-purple/20 rounded-full blur-xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
        
        {/* Quick Contact Section */}
        <div className="absolute bottom-20 right-8 hidden lg:block scroll-reveal" style={{ animationDelay: '1.4s' }}>
          <div className="glass-card p-4 space-y-3">
            <h3 className="text-sm font-semibold text-foreground mb-2">Quick Connect</h3>
            <div className="flex flex-col space-y-2">
              <Button 
                variant="glow" 
                size="sm" 
                className="justify-start"
                onClick={() => window.open('mailto:naveensaini@email.com')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button 
                variant="glow" 
                size="sm" 
                className="justify-start"
                onClick={() => window.open('https://wa.me/1234567890')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                variant="glow" 
                size="sm" 
                className="justify-start"
                onClick={() => window.open('tel:+1234567890')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;