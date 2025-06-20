import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript ", level: 90 },
        { name: "React.js", level: 92 },
        { name: "Python ", level: 90 },
        { name: "Tailwind CSS", level: 88 },
       
       
      ]
    },
    {
      
      skills: [
        { name: "Dot Net ", level: 80 },
        { name: "Word", level: 90 } ,
        { name: "Excel", level: 90 } ,
        { name: "PPT", level: 90 } ,
        
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-primary">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              {/* <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{category.title}</h3> */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Responsive Design", "UI/UX Design", "Progressive Web Apps", "Performance Optimization", 
              "Accessibility (WCAG)", "SEO Basics", "Cross-Browser Compatibility", "Mobile-First Design",
              "CSS Animations", "State Management", "Git Workflow", "CI/CD"].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-medium text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;