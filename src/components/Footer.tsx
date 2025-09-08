import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/Naveen9024"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/naveen-saini-a50527296"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
      url: "mailto:naveensaini1106@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      name: "Phone",
      url: "tel:+919024817585"
    }
  ];

  return (
    <footer className="bg-background-secondary border-t border-glass-border/30 relative">
      {/* Scroll to Top Button */}
      <Button
        variant="glass"
        size="icon"
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-lg glow-primary"
        onClick={scrollToTop}
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gradient-primary mb-4">
                Naveen Saini
              </h3>
              <p className="text-foreground-muted leading-relaxed max-w-md">
                Full Stack Web Developer passionate about creating modern, responsive websites and solving complex problems through code. Always learning and evolving with technology.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-foreground-muted">
                <Mail className="w-4 h-4 text-electric-blue" />
                <a href="mailto:naveensaini1106@gmail.com" className="hover:text-electric-blue transition-colors">
                  naveensaini1106@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-foreground-muted">
                <Phone className="w-4 h-4 text-violet-purple" />
                <a href="tel:+919024817585" className="hover:text-violet-purple transition-colors">
                  +91 9024817585
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-foreground-muted hover:text-electric-blue transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-foreground-muted hover:text-electric-blue transition-colors duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>

            {/* Newsletter/Updates */}
            <div className="mt-8 p-4 glass-card rounded-lg">
              <h5 className="text-sm font-semibold text-foreground mb-2">Stay Updated</h5>
              <p className="text-xs text-foreground-muted mb-3">
                Follow my journey in web development
              </p>
              <div className="flex space-x-2">
                <a 
                  href="https://github.com/Naveen9024" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-electric-blue/10 hover:bg-electric-blue/20 text-electric-blue rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/naveen-saini-a50527296" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-violet-purple/10 hover:bg-violet-purple/20 text-violet-purple rounded-lg transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-glass-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-foreground-muted text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Naveen Saini using modern web technologies.</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-4 text-xs text-foreground-muted">
              <span className="px-2 py-1 bg-electric-blue/10 text-electric-blue rounded">React</span>
              <span className="px-2 py-1 bg-violet-purple/10 text-violet-purple rounded">TypeScript</span>
              <span className="px-2 py-1 bg-electric-blue/10 text-electric-blue rounded">Tailwind CSS</span>
            </div>
          </div>

          <div className="text-center mt-6 text-xs text-foreground-muted">
            © {new Date().getFullYear()} Naveen Saini. All rights reserved.
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-electric-blue/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-violet-purple/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;