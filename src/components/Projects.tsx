
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

interface Project {
  id: number;
  title: string;
  type: string;
  year: string;
  description: string;
  technologies?: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Fusionsync",
    type: "Final Year Project",
    year: "2024",
    description: "Bridging System For Seamless Data Synchronization And Template Integration",
    technologies: ["Node.js", "React", "MongoDB", "RESTful APIs", "WebSockets"]
  },
  {
    id: 2,
    title: "Integrated IoT Water Management",
    type: "Integrated Design Project",
    year: "2024",
    description: "Integrated Internet of Things Water Management and Nutrient Delivery System for Cattle Feeding",
    technologies: ["IoT Sensors", "Arduino", "Python", "MQTT", "Data Visualization"]
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <h2 className="section-title">Projects</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projectsData.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              className="tech-card hover:shadow-xl transition-all duration-300 group"
              animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"}
              delay={index * 150}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block bg-tech-purple/10 text-tech-purple rounded-full px-3 py-1 text-xs font-medium mb-2">
                      {project.year}
                    </span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-tech-blue">{project.type}</p>
                  </div>
                  <button 
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="text-muted-foreground hover:text-tech-purple transition-colors"
                    aria-label={expandedProject === project.id ? "Collapse project details" : "Expand project details"}
                  >
                    {expandedProject === project.id ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 15l-6-6-6 6"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    )}
                  </button>
                </div>
                
                <p className="text-muted-foreground">{project.description}</p>
                
                {expandedProject === project.id && project.technologies && (
                  <div className="mt-6 animate-fade-in">
                    <h4 className="font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-muted rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
