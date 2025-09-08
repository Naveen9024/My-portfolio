import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "naveensaini1106@gmail.com",
      href: "mailto:naveensaini1106@gmail.com",
      color: "electric-blue"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+91 9024817585",
      href: "https://wa.me/919024817585",
      color: "violet-purple"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9024817585",
      href: "tel:+919024817585",
      color: "electric-blue"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Jaipur, Rajasthan",
      href: "#",
      color: "violet-purple"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Naveen9024",
      color: "electric-blue"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/naveen-saini-a50527296",
      color: "violet-purple"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      url: "mailto:naveensaini1106@gmail.com",
      color: "electric-blue"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      name: "Phone",
      url: "tel:+919024817585",
      color: "violet-purple"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 scroll-reveal">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/20 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      item.color === 'electric-blue' 
                        ? 'bg-electric-blue/20 text-electric-blue group-hover:bg-electric-blue/30' 
                        : 'bg-violet-purple/20 text-violet-purple group-hover:bg-violet-purple/30'
                    } transition-colors duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-foreground-muted">{item.title}</p>
                      <p className="font-medium text-foreground group-hover:text-gradient-primary transition-all duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                      social.color === 'electric-blue'
                        ? 'border-electric-blue/30 hover:border-electric-blue/50 hover:bg-electric-blue/10 glow-primary'
                        : 'border-violet-purple/30 hover:border-violet-purple/50 hover:bg-violet-purple/10 glow-violet'
                    }`}
                  >
                    <div className={social.color === 'electric-blue' ? 'text-electric-blue' : 'text-violet-purple'}>
                      {social.icon}
                    </div>
                    <span className="font-medium text-foreground">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input border border-glass-border/30 rounded-lg focus:outline-none focus:border-border-glow transition-colors duration-300 text-foreground"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input border border-glass-border/30 rounded-lg focus:outline-none focus:border-border-glow transition-colors duration-300 text-foreground"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-input border border-glass-border/30 rounded-lg focus:outline-none focus:border-border-glow transition-colors duration-300 text-foreground"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-glass-border/30 rounded-lg focus:outline-none focus:border-border-glow transition-colors duration-300 text-foreground"
                    placeholder="Let's work together"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-glass-border/30 rounded-lg focus:outline-none focus:border-border-glow transition-colors duration-300 text-foreground resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="glass-card-hover p-6 text-center scroll-reveal">
            <div className="w-12 h-12 bg-electric-blue/20 text-electric-blue rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Email Me</h4>
            <p className="text-sm text-foreground-muted mb-4">For business inquiries</p>
            <Button variant="glow" size="sm" asChild>
              <a href="mailto:naveensaini1106@gmail.com">Send Email</a>
            </Button>
          </div>

          <div className="glass-card-hover p-6 text-center scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-violet-purple/20 text-violet-purple rounded-full flex items-center justify-center mx-auto mb-4 glow-violet">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">WhatsApp</h4>
            <p className="text-sm text-foreground-muted mb-4">Quick messages</p>
            <Button variant="glow" size="sm" asChild>
              <a href="https://wa.me/919024817585" target="_blank" rel="noopener noreferrer">
                Chat Now
              </a>
            </Button>
          </div>

          <div className="glass-card-hover p-6 text-center scroll-reveal" style={{ animationDelay: '0.4s' }}>
            <div className="w-12 h-12 bg-electric-blue/20 text-electric-blue rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Call Me</h4>
            <p className="text-sm text-foreground-muted mb-4">Let's talk directly</p>
            <Button variant="glow" size="sm" asChild>
              <a href="tel:+919024817585">Call Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;