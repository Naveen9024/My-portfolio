import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificationsData = [
  {
    title: "Full Stack Web Development",
    issuer: "Tech Education Platform",
    date: "2024",
    description: "Comprehensive certification covering frontend and backend development technologies, including HTML, CSS, JavaScript, and modern frameworks.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web APIs"],
    verified: true,
    credentialId: "FSWD-2024-001"
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "AI Learning Institute",
    date: "2024",
    description: "Advanced certification in generative artificial intelligence, covering machine learning concepts, AI tools, and practical applications.",
    skills: ["Machine Learning", "AI Tools", "Prompt Engineering", "AI Ethics"],
    verified: true,
    credentialId: "GAI-2024-002"
  },
  {
    title: "Python Programming",
    issuer: "Programming Academy",
    date: "2023",
    description: "Complete Python programming certification covering syntax, data structures, algorithms, and real-world application development.",
    skills: ["Python", "Data Structures", "Algorithms", "OOP", "Libraries"],
    verified: true,
    credentialId: "PY-2023-003"
  },
  {
    title: "Linux System Administration",
    issuer: "Open Source Institute",
    date: "2023",
    description: "Linux certification covering system administration, command line operations, shell scripting, and server management.",
    skills: ["Linux CLI", "Shell Scripting", "System Admin", "Server Management"],
    verified: true,
    credentialId: "LINUX-2023-004"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-background-secondary relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-secondary">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div 
              key={index}
              className="glass-card-hover p-8 scroll-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-violet-purple rounded-lg flex items-center justify-center glow-primary">
                    <Award className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-foreground-muted text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                
                {cert.verified && (
                  <div className="flex items-center space-x-2 text-success">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-foreground-muted leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-xs font-medium text-electric-blue"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-glass-border/30">
                <div className="flex items-center space-x-2 text-foreground-muted text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
                
                <Button variant="glow" size="sm">
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </Button>
              </div>

              {/* Credential ID */}
              <div className="mt-4 pt-4 border-t border-glass-border/20">
                <p className="text-xs text-foreground-muted">
                  Credential ID: <span className="font-mono text-electric-blue">{cert.credentialId}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Continuous Learning
            </h3>
            <p className="text-foreground-muted mb-6">
              I believe in staying updated with the latest technologies and continuously expanding my skill set through professional certifications and hands-on projects.
            </p>
            <Button variant="hero">
              <Award className="w-5 h-5" />
              View All Certifications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;