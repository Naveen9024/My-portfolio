import { Calendar, MapPin, Code2 } from "lucide-react";

const experienceData = [
  {
    title: "Full Stack Development Journey",
    organization: "Self-Learning & Projects",
    period: "2023 - Present",
    location: "Jaipur, India",
    description: "Focused on mastering modern web technologies including HTML, CSS, JavaScript, and various development tools. Built multiple projects to strengthen practical skills.",
    highlights: [
      "Completed comprehensive full-stack web development course",
      "Built responsive websites with modern design principles",
      "Learned version control with Git and collaborative development"
    ]
  },
  {
    title: "B.Tech Student",
    organization: "Jaipur Engineering College",
    period: "2023 - Present",
    location: "Jaipur, Rajasthan",
    description: "Pursuing Bachelor of Technology with focus on computer science fundamentals and programming languages.",
    highlights: [
      "Strong foundation in C and C++ programming",
      "Problem-solving and algorithmic thinking",
      "Computer science fundamentals and data structures"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background-secondary relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-secondary">Experience</span> & Journey
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            My learning path and experiences in technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-violet-purple to-electric-blue"></div>
            
            <div className="space-y-12">
              {experienceData.map((item, index) => (
                <div 
                  key={index}
                  className="relative flex items-start space-x-8 scroll-reveal"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-violet-purple rounded-full flex items-center justify-center shadow-lg glow-primary">
                      <Code2 className="w-8 h-8 text-background" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 glass-card-hover p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-gradient-primary mb-2">
                        {item.organization}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-foreground-muted mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground-muted mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-foreground">Key Highlights:</h5>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-foreground-muted">
                            <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;