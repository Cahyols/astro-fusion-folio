
import { useEffect, useState } from "react";
import ParticleBackground from "./ParticleBackground";

const heroTitles = [
  "Software Engineer",
  "QA Specialist",
  "Electronic Engineer",
  "AutoCAD Engineer",
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentTitle = heroTitles[titleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      } else if (isDeleting && displayText === "") {
        // Move to next title
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % heroTitles.length);
        return;
      }
      
      // Set typing speed
      setTypingSpeed(isDeleting ? 50 : 100);
      
      // Update display text
      setDisplayText(prev => {
        if (isDeleting) {
          return prev.substring(0, prev.length - 1);
        } else {
          return currentTitle.substring(0, prev.length + 1);
        }
      });
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-10">
      <ParticleBackground color="#8B5CF6" density={70} />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Ahmad Isshahrul Isskandar
          </h1>
          
          <div className="h-12 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-bold tech-gradient-text">
              {displayText}
              <span className="animate-pulse ml-0.5">|</span>
            </h2>
          </div>
          
          <p className="mt-6 mb-10 text-xl text-muted-foreground max-w-2xl">
            Fresh graduate with a Bachelor's degree in Electronic Engineering, specializing
            in software development, quality assurance, and engineering solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#experience" className="tech-button">
              View Experience
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-white dark:bg-tech-navy text-foreground border border-tech-purple hover:bg-tech-purple/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
          
          <div className="mt-20 animate-bounce flex justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-tech-purple"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Abstract decorative elements */}
      <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-tech-blue/10 blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-tech-purple/10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
