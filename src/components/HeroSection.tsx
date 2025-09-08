import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with hero glow effect */}
      <div className="absolute inset-0 hero-glow">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-tertiary" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 scroll-reveal">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient-primary">Full Stack</span><br />
                <span className="text-foreground">Web Developer</span><br />
                <span className="text-gradient-secondary">& Problem Solver</span>
              </h1>
              
              <p className="text-xl text-foreground-muted leading-relaxed max-w-2xl">
                I'm a developer who crafts responsive websites. My job is to make sure every site I build is fast, 
                user-friendly, and looks amazing on any screen. Currently pursuing B.Tech at Jaipur Engineering College.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-glass-border/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-primary">5+</div>
                <div className="text-sm text-foreground-muted">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-secondary">4+</div>
                <div className="text-sm text-foreground-muted">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-primary">1+</div>
                <div className="text-sm text-foreground-muted">Years Learning</div>
              </div>
            </div>
          </div>

          {/* Right Content - Abstract Image */}
          <div className="relative">
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