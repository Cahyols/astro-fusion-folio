
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  isActive?: boolean;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "AutoCAD ENGINEER",
    company: "Emerson",
    location: "Petaling Jaya, Selangor",
    date: "Feb 2025 - Present",
    description: [
      "Created detailed electrical loop drawings using AutoCAD under the guidance of a Senior Drafter to ensure accurate documentation and minimize wiring errors.",
      "Developed and updated wiring diagrams by interpreting engineering specifications to improve system assembly and troubleshooting efficiency.",
      "Reviewed and revised electrical loop drawings to ensure compliance with industry standards, reducing potential field errors.",
      "Collaborated with the Senior Drafter to optimize design processes and enhance the clarity of electrical diagrams for stakeholders.",
    ],
    isActive: true,
  },
  {
    id: 2,
    title: "PART TIME BARISTA",
    company: "Starbucks",
    location: "Petaling Jaya, Selangor",
    date: "Dec 2021 - Present",
    description: [
      "Educated customers on coffee brewing and products through personalized service, leading to increased upselling success and customer loyalty.",
      "Managed inventory by monitoring and restocking supplies, ensuring product availability and smooth operations.",
      "Delivered exceptional service by promptly addressing customer needs and managing orders, enhancing customer satisfaction.",
      "Demonstrated time management by completing all daily tasks efficiently, contributing to overall operational success.",
    ],
  },
  {
    id: 3,
    title: "SOFTWARE ENGINEER & TESTING",
    company: "Petronas Digital",
    location: "Wilayah Persekutuan, Kuala Lumpur",
    date: "July 2023 - April 2024",
    description: [
      "Created detailed test plans and cases for user acceptance testing by collaborating with coworker and business analyst, ensuring software met customer requirements and improved reliability.",
      "Documented best practices and streamlined procedures for software testing, leading to greater accuracy and defect reduction.",
      "Developed backend services using Node.js and built frontend interfaces with Angular, accelerating production deployment.",
      "Supported the development and testing of new software applications by coordinating with cross-functional teams, ensuring a smooth transition to production.",
    ],
  },
  {
    id: 4,
    title: "PART TIME DESSERT CREW",
    company: "Snowflakes Sunway Pyramid",
    location: "Petaling Jaya, Selangor",
    date: "Jan 2019 - Dec 2021",
    description: [
      "Prepared and served desserts by following SOPs, ensuring consistent quality and timely service.",
      "Assisted in training new team members by demonstrating best practices, promoting efficiency and teamwork.",
      "Boosted sales by applying upselling techniques and engaging with customers, leading to higher revenue.",
      "Maintained dining area cleanliness by adhering to 70-second rules, ensuring a positive dining experience.",
      "Supported the team leader by creating work schedules, optimizing staff coordination and coverage.",
    ],
  },
  {
    id: 5,
    title: "IT TECHNICIAN SUPPORT",
    company: "Serveconnect",
    location: "Cheras, Kuala Lumpur",
    date: "April 2021 - Oct 2021",
    description: [
      "Assembled PCs from scratch, partitioned storage based on standards, and updated BIOS configurations to enhance system performance and readiness.",
      "Installed the latest drivers and loaded specified software packages, ensuring all systems met operational requirements.",
      "Conducted quality control tests by running diagnostics and resolving hardware or software issues, ensuring proper functionality.",
      "Provided hands-on user training on equipment and software usage, increasing user confidence and reducing IT support needs.",
      "Maintained servers, firewalls, and CCTV systems through routine monitoring, ensuring system stability and data security.",
      "Troubleshot and resolved user-reported IT issues quickly, minimizing system downtimes and improving overall user satisfaction.",
    ],
  },
  {
    id: 6,
    title: "ELECTRICAL TECHNICIAN",
    company: "Lanefour",
    location: "Shah Alam, Selangor",
    date: "Dec 2020 - March 2021",
    description: [
      "Conducted wiring and soldering for mechanical and electrical assemblies by following technical diagrams, ensuring high-quality RTU box construction for TNB.",
      "Performed functional tests to identify potential issues early, enhancing the overall reliability of the final product.",
      "Followed strict safety protocols during assembly, mitigating risks and ensuring compliance with industry standards.",
      "Supported the team by troubleshooting assembly issues, reducing delays and optimizing production time.",
    ],
  },
  {
    id: 7,
    title: "ELECTRICAL TECHNICIAN INTERNSHIP",
    company: "Lanefour",
    location: "Shah Alam, Selangor",
    date: "July 2020 - Nov 2020",
    description: [
      "Conducted wiring and soldering for mechanical and electrical assemblies by following technical diagrams, ensuring high-quality RTU box construction for TNB.",
      "Performed functional tests to identify potential issues early, enhancing the overall reliability of the final product.",
      "Followed strict safety protocols during assembly, mitigating risks and ensuring compliance with industry standards.",
      "Supported the team by troubleshooting assembly issues, reducing delays and optimizing production time.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<number>(experienceData[0].id);

  return (
    <section id="experience" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <h2 className="section-title">Professional Experience</h2>
        </AnimatedSection>
        
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Tabs - Company list on mobile and desktop */}
          <div className="lg:w-1/3 overflow-x-auto lg:overflow-visible">
            <div className="flex flex-row lg:flex-col lg:border-l-2 border-muted min-w-max lg:min-w-0">
              {experienceData.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={cn(
                    "px-4 py-3 text-left whitespace-nowrap transition-all duration-200",
                    activeTab === exp.id
                      ? "border-b-2 lg:border-b-0 lg:border-l-2 border-tech-purple text-tech-purple font-medium lg:-ml-[2px]"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <p className="lg:text-lg font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground hidden lg:block">{exp.date}</p>
                </button>
              ))}
            </div>
          </div>
          
          {/* Content - Experience details */}
          <div className="lg:w-2/3">
            {experienceData.map((exp) => (
              <AnimatedSection
                key={exp.id}
                className={cn(
                  "tech-card p-6 md:p-8 transition-opacity duration-300",
                  activeTab === exp.id ? "block" : "hidden"
                )}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold flex items-center">
                      {exp.title} 
                      {exp.isActive && (
                        <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-tech-blue">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <p className="text-sm font-medium bg-tech-purple/10 px-3 py-1 rounded-full text-tech-purple inline-block">
                    {exp.date}
                  </p>
                </div>
                
                <ul className="mt-4 space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-tech-purple flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="mt-16">
          <div className="tech-card p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h4 className="font-bold">Bachelor of Electronic Engineering</h4>
                  <p className="text-tech-blue">Universiti Tun Hussein Onn (UTHM)</p>
                  <p className="text-sm text-muted-foreground">Batu Pahat, Johor</p>
                </div>
                <p className="text-sm font-medium bg-tech-purple/10 px-3 py-1 rounded-full text-tech-purple inline-block">
                  Oct 2021 - Feb 2025
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h4 className="font-bold">Diploma in Electrical Engineering</h4>
                  <p className="text-tech-blue">Politeknik Merlimau Melaka</p>
                  <p className="text-sm text-muted-foreground">Merlimau, Melaka</p>
                  <p className="text-sm text-tech-purple mt-1">Graduate with Honors</p>
                </div>
                <p className="text-sm font-medium bg-tech-purple/10 px-3 py-1 rounded-full text-tech-purple inline-block">
                  Dec 2017 - Jun 2020
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;
