
import React from "react";
import AnimatedSection from "./AnimatedSection";

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming & Development",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "AngularJS", level: 75 },
      { name: "HTML/CSS", level: 90 },
      { name: "Python", level: 70 },
      { name: "C#", level: 65 },
    ],
  },
  {
    category: "Testing & QA",
    skills: [
      { name: "Test Plan Creation", level: 90 },
      { name: "Manual Testing", level: 95 },
      { name: "QA Documentation", level: 85 },
      { name: "Software Troubleshooting", level: 80 },
    ],
  },
  {
    category: "Engineering & Technical",
    skills: [
      { name: "AutoCAD", level: 85 },
      { name: "Hardware Troubleshooting", level: 75 },
      { name: "Electrical Wiring", level: 80 },
      { name: "PCB Assembly", level: 70 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Microsoft Azure", level: 70 },
      { name: "Git", level: 80 },
      { name: "MySQL", level: 75 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-muted/50 relative">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <h2 className="section-title">Technical Skills</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {skillsData.map((category, categoryIndex) => (
            <AnimatedSection 
              key={categoryIndex} 
              className="tech-card p-6"
              delay={categoryIndex * 100}
            >
              <h3 className="text-xl font-bold mb-6 text-tech-blue">{category.category}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-tech-blue to-tech-purple rounded-full"
                        style={{ 
                          width: `${skill.level}%`,
                          transition: "width 1.5s ease-in-out",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16">
          <div className="tech-card p-6">
            <h3 className="text-xl font-bold mb-6 text-center">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border border-border p-4 rounded-lg hover:bg-tech-purple/5 transition-colors">
                <h4 className="font-medium">Meta (Coursera)</h4>
                <p className="text-sm text-muted-foreground">Django Web Framework</p>
              </div>
              <div className="border border-border p-4 rounded-lg hover:bg-tech-purple/5 transition-colors">
                <h4 className="font-medium">Meta (Coursera)</h4>
                <p className="text-sm text-muted-foreground">Introduction to Databases for Back-End Development</p>
              </div>
              <div className="border border-border p-4 rounded-lg hover:bg-tech-purple/5 transition-colors">
                <h4 className="font-medium">Meta (Coursera)</h4>
                <p className="text-sm text-muted-foreground">Introduction to Front-End Development</p>
              </div>
              <div className="border border-border p-4 rounded-lg hover:bg-tech-purple/5 transition-colors">
                <h4 className="font-medium">Meta (Coursera)</h4>
                <p className="text-sm text-muted-foreground">Programming in Python</p>
              </div>
              <div className="border border-border p-4 rounded-lg hover:bg-tech-purple/5 transition-colors">
                <h4 className="font-medium">Meta (Coursera)</h4>
                <p className="text-sm text-muted-foreground">Version Control</p>
              </div>
              <div className="border border-border p-4 rounded-lg hover:bg-tech-purple/5 transition-colors">
                <h4 className="font-medium">Cisco</h4>
                <p className="text-sm text-muted-foreground">JavaScript Essentials 1</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-16 text-center">
          <div className="p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Awards</h3>
            <div className="tech-card p-6 border-2 border-tech-purple/20">
              <span className="inline-block bg-tech-purple/10 text-tech-purple rounded-full px-3 py-1 text-sm font-medium mb-2">
                2024
              </span>
              <h4 className="font-bold text-lg mb-2">Global Korea Scholarship</h4>
              <p className="text-muted-foreground">
                Awarded a fully funded scholarship by the Korean government to pursue exchange studies.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
