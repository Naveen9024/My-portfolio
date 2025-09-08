import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Smartphone, Monitor } from "lucide-react";

const projectsData = [
  {
    title: "Responsive Web Application",
    description: "A modern, fully responsive web application built with HTML, CSS, and JavaScript. Features include dynamic content, smooth animations, and mobile-first design principles.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Development"
  },
  {
    title: "Interactive Portfolio Website",
    description: "A sleek portfolio website showcasing modern web development techniques with glassmorphism effects, smooth scrolling, and interactive elements.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "Animation"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend"
  },
  {
    title: "Business Landing Page",
    description: "A professional business landing page with modern design, optimized performance, and conversion-focused layout. Built with clean, semantic code.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "SEO"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Design"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            A showcase of my recent work and development projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="glass-card-hover group cursor-pointer scroll-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-electric-blue/20 backdrop-blur-sm border border-electric-blue/30 rounded-full text-xs font-medium text-electric-blue">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="glass" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button variant="glass" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient-primary transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted/30 border border-glass-border/20 rounded text-xs font-medium text-foreground-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Button variant="glow" size="sm">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                  
                  <div className="flex space-x-2 text-foreground-muted">
                    <Monitor className="w-4 h-4" />
                    <Smartphone className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 scroll-reveal">
          <Button variant="hero" size="lg">
            <Code className="w-5 h-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;