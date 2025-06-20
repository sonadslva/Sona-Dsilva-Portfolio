import sona from '../assets/sonaimg1.jpg'

const About = () => {
    return (
      <>
      <section
        id="about"
        className="py-12 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="section-container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative max-w-xs mx-auto lg:mx-0">
                <img
                  src={sona}
                  alt="Sona Dsilva"
                  className="rounded-lg shadow-xl w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-40 sm:h-40 border-4 sm:border-8 border-white dark:border-gray-900 rounded-lg bg-blue-600 dark:bg-blue-800 opacity-20"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Full Stack Developer
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Hello! I'm Sona Dsilva, a passionate full-stack developer with
                experience in React.js and backend technologies like Python
                Django and .NET.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                I have 6 months of experience in React.js web development and
                have completed a 6-month internship in Python Django. My
                expertise spans across frontend and backend development, helping
                to create efficient and scalable applications.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                I am always eager to learn new technologies and enhance my
                skills. When I'm not coding, I enjoy exploring new frameworks,
                improving performance optimizations, and staying updated with
                industry trends.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  "React.js Development",
                  "Python & Django",
                  ".NET Development",
                  "Full Stack Development"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div>
                  <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base text-gray-900 dark:text-white">
                    Name:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    Sona Dsilva
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base text-gray-900 dark:text-white">
                    Email:
                  </h4>
                  <a href="mailto:sonadsilva2000@gmail.com" className="text-gray-600 dark:text-gray-400 hover:underline text-sm sm:text-base">
                    sonadsilva2000@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base text-gray-900 dark:text-white">
                    Expertise:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    React.js, Django, .NET
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base text-gray-900 dark:text-white">
                    Available:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    Freelance & Full-time
                  </p>
                </div>
              </div>

              <a 
                href="Sona DSilva.pdf" 
                className="btn-primary inline-block px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="section-container px-4 sm:px-6">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">Education</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">My Academic Qualifications</p>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
          </div>

          {/* Vertical Timeline for Mobile, Horizontal for Desktop */}
          <div className="lg:hidden">
            {/* Mobile Vertical Timeline */}
            <div className="space-y-8">
              {[
                {
                  title: "BSc Computer Science",
                  institution: "Calicut University",
                  period: "2018-2021"
                },
                {
                  title: "Python Programming",
                  institution: "Soften Technologies",
                  period: "2021-2022"
                },
                {
                  title: "PGDCA",
                  institution: "Keltron",
                  period: "2023-2024"
                }
              ].map((edu, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white dark:bg-gray-900 rounded-full"></div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 dark:text-white">{edu.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.institution}</p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-300 dark:bg-blue-600 transform -translate-y-1/2"></div>
              
              <div className="flex justify-between relative">
                {[
                  {
                    title: "BSc Computer Science",
                    institution: "Calicut University",
                    period: "2018-2021"
                  },
                  {
                    title: "Python Programming",
                    institution: "Soften Technologies",
                    period: "2021-2022"
                  },
                  {
                    title: "PGDCA",
                    institution: "Keltron",
                    period: "2023-2024"
                  }
                ].map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="w-32 h-32 flex items-center justify-center border-4 border-blue-600 dark:border-blue-400 rounded-full shadow-lg bg-white dark:bg-gray-800 p-4 text-center">
                      <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-300">{edu.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{edu.institution}</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{edu.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  };
  
  export default About;