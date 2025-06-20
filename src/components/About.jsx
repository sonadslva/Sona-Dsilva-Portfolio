import sona from '../assets/sonaimg1.jpg'

const About = () => {
    return (
      <>
      <section
        id="about"
        className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-primary">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 h-200">
              <div className="relative">
                <img
                  src={sona}
                  alt="Sona"
                  className="rounded-lg shadow-xl max-w-full mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-8 border-white dark:border-gray-900 rounded-lg"></div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Full Stack Developer
              </h3>

              <p className="paragraph mb-6">
                Hello! I'm Sona Dsilva, a passionate full-stack developer with
                experience in React.js and backend technologies like Python
                Django and .NET.
              </p>

              <p className="paragraph mb-6">
                I have 6 months of experience in React.js web development and
                have completed a 6-month internship in Python Django. My
                expertise spans across frontend and backend development, helping
                to create efficient and scalable applications.
              </p>

              <p className="paragraph mb-8">
                I am always eager to learn new technologies and enhance my
                skills. When I'm not coding, I enjoy exploring new frameworks,
                improving performance optimizations, and staying updated with
                industry trends.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    React.js Development
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Python & Django
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    .NET Development
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Full Stack Development
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">
                    Name:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sona Dsilva
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">
                    Email:
                  </h4>
                  <a href="mailto:sonadsilva2000@gmail.com" className="text-gray-600 dark:text-gray-400 hover:underline">
                    sonadsilva2000@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">
                    Expertise:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    React.js, Django, .NET
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">
                    Available:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Freelance & Full-time
                  </p>
                </div>
              </div>

              <a href="Sona DSilva.pdf" className="btn-primary" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="py-8 md:py-10 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">Education</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">My Academic Qualifications</p>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </div>

        {/* Horizontal Timeline */}
        <div className="w-full overflow-x-auto">
          <div className="flex items-center justify-center space-x-70 relative">
            
            {/* Line Connecting Nodes */}
            <div className="absolute top-1/2 left-0 right-0 mx-auto w-3/4 h-1 bg-blue-300 dark:bg-blue-600"></div>

            {/* Qualification 1 */}
            <div className="relative text-center bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg w-40">
              <div className="w-32 h-32 flex items-center justify-center border-4 border-blue-600 dark:border-blue-400 rounded-full shadow-lg">
                <p className="text-sm text-gray-800 dark:text-gray-300 font-semibold">
                  BSc Computer Science <br /> Calicut University <br /> 2018-2021
                </p>
              </div>
            </div>

            {/* Qualification 2 */}
            <div className="relative text-center bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg w-40">
              <div className="w-32 h-32 flex items-center justify-center border-4 border-blue-600 dark:border-blue-400 rounded-full shadow-lg">
                <p className="text-sm text-gray-800 dark:text-gray-300 font-semibold">
                  Python Programming <br /> Soften Technologies <br /> 2021-2022
                </p>
              </div>
            </div>

            {/* Qualification 3 */}
            <div className="relative text-center bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg w-40">
              <div className="w-32 h-32 flex items-center justify-center border-4 border-blue-600 dark:border-blue-400 rounded-full shadow-lg">
                <p className="text-sm text-gray-800 dark:text-gray-300 font-semibold">
                  PGDCA <br /> Keltron <br /> 2023-2024
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
     </>
    );
  };
  
  export default About;