import { Code, Database, Settings, Laptop } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: <Laptop className="w-8 h-8" />,
    skills: ["HTML", "CSS", "JavaScript"],
    color: "electric-blue"
  },
  {
    category: "Programming",
    icon: <Code className="w-8 h-8" />,
    skills: ["C", "C++", "Java", "Python"],
    color: "violet-purple"
  },
  {
    category: "Tools",
    icon: <Settings className="w-8 h-8" />,
    skills: ["VS Code", "Git"],
    color: "electric-blue"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Technical</span> Skills
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skillsData.map((category, index) => (
            <div 
              key={category.category}
              className="glass-card-hover p-8 text-center scroll-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                category.color === 'electric-blue' 
                  ? 'bg-electric-blue/20 text-electric-blue glow-primary' 
                  : 'bg-violet-purple/20 text-violet-purple glow-violet'
              }`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {category.category}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-muted/30 rounded-full py-2 px-4 text-sm font-medium text-foreground border border-glass-border/20 hover:border-border-glow/30 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card p-8 scroll-reveal">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Proficiency Level</h3>
            <div className="space-y-6">
              {[
                { skill: "HTML/CSS", level: 90 },
                { skill: "JavaScript", level: 85 },
                { skill: "C/C++", level: 80 },
                { skill: "Java/Python", level: 75 },
                { skill: "Git/Version Control", level: 70 }
              ].map((item) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">{item.skill}</span>
                    <span className="text-foreground-muted">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-electric-blue to-violet-purple rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    />
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

export default SkillsSection;