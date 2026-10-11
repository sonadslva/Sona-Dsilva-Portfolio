import sona from '../assets/sonaimg1.jpg'

const roles = [
  {
    title: "Web Developer",
    organisation: "IMC Business Solutions",
    period: "2024 - Present",
    summary: "Building responsive React.js applications with Tailwind CSS for client projects.",
  },
  {
    title: "Technical Assistant",
    organisation: "Ayyankunnu Grama Panchayath, Kerala",
    period: "July 2025 - July 2026",
    summary: "Provided IT support across Windows and Linux systems, printers, and office networks.",
  },
];

const skills = [
  "React.js & Frontend Development",
  "Technical Support & Troubleshooting",
  "Python, Django & .NET",
  "Windows & Linux Systems",
  "Full Stack Development",
  "Printer & Network Setup",
];

const education = [
  {
    title: "BSc Computer Science",
    institution: "Calicut University",
    period: "2018-2021",
  },
  {
    title: "Python Programming",
    institution: "Soften Technologies",
    period: "2021-2022",
  },
  {
    title: "PGDCA",
    institution: "Keltron",
    period: "2023-2024",
  },
];

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

          {/* Row 1: Image + Description */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image Column */}
            <div className="w-full lg:w-5/12 flex-shrink-0">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto">
                <img
                  src={sona}
                  alt="Sona Dsilva"
                  className="rounded-lg shadow-xl w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-40 sm:h-40 border-4 sm:border-8 border-white dark:border-gray-900 rounded-lg bg-blue-600 dark:bg-blue-800 opacity-20"></div>
              </div>
            </div>

            {/* Description Column */}
            <div className="w-full lg:w-7/12">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Web Developer & Technical Assistant
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Hello! I'm Sona Dsilva, a web developer and technical support
                professional. I build modern web applications, and I also keep
                the systems, devices, and networks behind everyday work running
                smoothly.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                <span className="font-semibold text-gray-800 dark:text-gray-100">As a Web Developer</span> at
                IMC Business Solutions, I build responsive React.js applications
                with Tailwind CSS for clients, and I have backend experience with
                Python Django and .NET, including a 6-month Django internship.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                <span className="font-semibold text-gray-800 dark:text-gray-100">As a Technical Assistant</span> at
                Ayyankunnu Grama Panchayath, I supported staff with computer,
                printer, and LAN issues across Windows and Linux environments,
                handled routine IT maintenance, and coordinated with vendors for
                equipment support.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                I am always eager to learn new technologies and enhance my
                skills. When I'm not coding, I enjoy exploring new frameworks,
                improving performance optimizations, and staying updated with
                industry trends.
              </p>
            </div>
          </div>

          {/* Row 2: Full-width details */}
          <div className="mt-12 md:mt-16 pt-10 border-t border-gray-200 dark:border-gray-700">
            {/* Highlighted Roles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 border-l-4 border-blue-600 dark:border-blue-400 rounded-lg shadow-md p-4 sm:p-5"
                >
                  <h4 className="font-bold text-blue-600 dark:text-blue-400 text-base sm:text-lg">
                    {role.title}
                  </h4>
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                    {role.organisation}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                    {role.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {role.summary}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 sm:mb-10">
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
                <a
                  href="mailto:sonadsilva2000@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:underline text-sm sm:text-base break-all"
                >
                  sonadsilva2000@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base text-gray-900 dark:text-white">
                  Expertise:
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  Web Development & IT Support
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

            <div className="text-center lg:text-left">
              <a
                href="/Sona_DSilva_Resume.pdf"
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

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden">
            <div className="space-y-8">
              {education.map((edu, index) => (
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
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-300 dark:bg-blue-600 transform -translate-y-1/2"></div>

              <div className="flex justify-between relative">
                {education.map((edu, index) => (
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