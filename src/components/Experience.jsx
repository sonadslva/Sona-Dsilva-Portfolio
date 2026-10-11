import React, { useMemo } from 'react';

const experiences = [
  {
    title: "Technical Assistant",
    company: "Ayyankunnu Grama Panchayath, Kerala, India",
    period: "July 2025 - July 2026",
    description:
      "Provided day-to-day IT support for panchayath staff, keeping computers, printers, and office systems running smoothly across Windows and Linux environments.",
    responsibilities: [
      "Provided technical support to staff, resolving day-to-day computer, software, printer, and system-related issues.",
      "Performed basic hardware and software troubleshooting for desktop computers and office IT equipment.",
      "Installed, configured, and troubleshot Sharp, Canon, and Epson printers, including drivers and network connectivity.",
      "Supported Windows and Linux environments, including system configuration, software installation, and troubleshooting.",
      "Diagnosed basic LAN and network connectivity issues affecting computers and network-connected printers.",
      "Assisted users with application errors, system-access issues, and common technical problems.",
      "Supported routine IT maintenance, digital record management, and day-to-day technical operations.",
      "Followed appropriate data-handling practices and coordinated with vendors for IT equipment maintenance and support.",
    ],
  },
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

const Experience = () => {
  // Generate random animation values once, so they don't change on every re-render
  const motion = useMemo(
    () =>
      experiences.map(() => ({
        delay: Math.random() * 2,
        swayDuration: 3 + Math.random(),
        pulseDuration: 2 + Math.random(),
      })),
    []
  );

  return (
    <section
      id="experience"
      className="bg-gray-50 dark:bg-gray-800 py-12 md:py-16 lg:py-20 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900 dark:text-white">
          Work Experience
        </h2>

        <div className="relative pt-8 md:pt-10">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-400 dark:bg-blue-600 animate-pulse md:transform md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const m = motion[index];

              return (
                <div
                  key={index}
                  className={`relative flex ${isLeft ? 'justify-start md:justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`w-full md:w-5/12 ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}
                    style={{
                      animation: `sway${isLeft ? 'Left' : 'Right'} ${m.swayDuration}s ease-in-out infinite`,
                      animationDelay: `${m.delay}s`,
                    }}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 shadow-md transform -translate-x-1/2 hover:scale-110 transition-all"
                      style={{
                        animation: `dotPulse ${m.pulseDuration}s ease-in-out infinite`,
                        animationDelay: `${m.delay * 0.5}s`,
                      }}
                    ></div>

                    {/* Content card */}
                    <div
                      className={`
                        bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all
                        border-l-4 md:border-l-0 border-blue-500 ml-8 md:ml-0
                        ${isLeft ? 'md:border-r-2' : 'md:border-l-2'} md:border-blue-500
                      `}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            {exp.title}
                          </h3>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {exp.company}
                          </h4>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-300 mt-1 sm:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {resp}
                          </li>
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

      <style>{`
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

        @keyframes dotPulse {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          50% { transform: translate(-50%, 0) scale(1.2); }
        }
      `}</style>
    </section>
  );
};

export default Experience;