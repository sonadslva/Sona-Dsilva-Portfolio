import React, { useEffect, useState } from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "IMC Business Solutions",
      period: "2024 - Present",
      description:
        "Lead frontend development for multiple client projects, implementing modern React applications and websites with React.js and JavaScript using Tailwind CSS.",
      responsibilities: [
        "Developed and maintained scalable React.js applications for client projects.",
        "Designed and implemented responsive UI components using Tailwind CSS.",
        "Optimized application performance and ensured cross-browser compatibility.",
        "Collaborated with backend developers to integrate APIs and improve functionality.",
       
        "Conducted code reviews and implemented best coding practices.",
        "Managed project timelines and delivered high-quality applications on schedule.",
      ],
    },
    {
      title: "Software Developer",
      company: "Soften Technologies",
      period: "2022 - 2023",
      description:
        "Developed and maintained full-stack web applications using Django, React, and RESTful APIs. Built scalable backend solutions, optimized database performance, and implemented secure authentication systems.",
      responsibilities: [
        "Designed and developed RESTful APIs using Django and Django REST Framework.",
        
        "Developed dynamic frontend components using React and integrated them with Django.",
        "Optimized database queries and ensured efficient data management using PostgreSQL.",
        
        "Collaborated with cross-functional teams to enhance application performance and security.",
      ],
    },
   
  ];

  // Generate a random delay for each element to create natural swaying effect
  const [delays, setDelays] = useState([]);
  
  useEffect(() => {
    // Create random delays for each element
    const newDelays = experiences.map(() => Math.random() * 2);
    setDelays(newDelays);
  }, []);

  return (
    <section id="experience">
    <div className="bbg-gray-50 dark:bg-gray-800 f p-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white ">
          Work Experience
        </h2>
        
        <div className="relative pt-10">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-400 animate-pulse"></div>
          
          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative flex ${isLeft ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`w-5/12 ${isLeft ? 'mr-8' : 'ml-8'}`}
                    style={{
                      animation: `sway${isLeft ? 'Left' : 'Right'} ${3 + Math.random()}s ease-in-out infinite`,
                      animationDelay: `${delays[index]}s`,
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 top-0 w-6 h-6 rounded-full bg-blue-500 shadow-md transform -translate-x-1/2 hover:scale-110 transition-all" 
                      style={{
                        animation: `pulse ${2 + Math.random()}s ease-in-out infinite`,
                        animationDelay: `${delays[index] * 0.5}s`,
                      }}></div>
                    
                    {/* Content */}
                    <div className={`bg-gray-50 w-[500px]  dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all ${isLeft ? 'border-2' : 'border-2'} border-blue-500`}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.title}</h3>
                        <span className="text-sm paragraph italic">{exp.period}</span>
                      </div>
                      <h4 className="text-lg font-semibold paragraph mb-3">{exp.company}</h4>
                      <p className="paragraph mb-4">{exp.description}</p>
                      <ul className="list-disc pl-5 paragraph space-y-1">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="hover:text-blue-600 transition-colors">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes swayLeft {
          0% { transform: rotate(0deg) translateX(0); }
          25% { transform: rotate(-1deg) translateX(-5px); }
          50% { transform: rotate(0deg) translateX(0); }
          75% { transform: rotate(1deg) translateX(5px); }
          100% { transform: rotate(0deg) translateX(0); }
        }
        
        @keyframes swayRight {
          0% { transform: rotate(0deg) translateX(0); }
          25% { transform: rotate(1deg) translateX(5px); }
          50% { transform: rotate(0deg) translateX(0); }
          75% { transform: rotate(-1deg) translateX(-5px); }
          100% { transform: rotate(0deg) translateX(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          50% { transform: translate(-50%, 0) scale(1.2); }
        }
      `}</style>
    </div>
    </section>
  );
};

export default Experience;