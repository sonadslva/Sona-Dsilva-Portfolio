import React from 'react';
import abhaya from '../assets/abhaya.jpg'
import imc from '../assets/imc.jpg'
import dds from '../assets/ddd.jpg'
import chasam from '../assets/chasam.jpg'
import chinju from '../assets/chinjustore.jpg'
import adfitness from '../assets/adfitness.jpg'
const Projects = () => {
  const projects = [
    {
      title: "ABHAYA AYURVEDIC",
      category: "Website",
      image: abhaya,
      description: "I created a responsive and user-friendly website for an Ayurvedic hospital, enabling patients to explore treatments, book appointments, and access wellness resources. Built with React.js and Django, it ensures a seamless and efficient user experience.",
      technologies: ["React", "Tailwind CSS"],
      link: "https://abhayaayurvedic.onrender.com"
    },
    {
      title: "IMC BUSSINESS SOLUTIONS",
      category: "Website",
      image: imc,
      description: "I created a responsive website for IMC Business Solutions, highlighting its IT services with seamless navigation and modern design.",
      technologies: ["React", "Tailwind CSS"],
      link: "https://imcwebsite.onrender.com"
    },
    {
      title: "DIGITAL DISPLAY SYSTEM",
      category: "Web Application",
      image: dds,
      description: "I developed a full-stack web application for a digital display system, enabling businesses to showcase menus and pricing dynamically. It offers real-time updates, smooth performance, and an intuitive user experience.",
      technologies: ["React", "Tailwind CSS"],
      link: "https://digitaldisplaysystem.onrender.com"
    },
    {
      title: "CHASAM AYURVEDIC AND SPICE GARDEN",
      category: "Web Application",
      image: chasam,
      description: "I created a web application for Chasam Ayurvedic and Spice Garden, providing an intuitive platform to explore Ayurvedic products and organic spices.",
      technologies: ["React", "Tailwind CSS"],
      link: "https://chasam.sysmac.co.in"
    },
    {
      title: "CHINJU STORE",
      category: "Web Application",
      image: chinju,
      description: "An e-commerce platform built for Chinju Store to showcase and sell grocery products, offering a user-friendly shopping experience with modern design and smooth navigation.",
      technologies: ["React", "Tailwind CSS"],
      link: "https://chinjustore.onrender.com"
    },
    {
      title: "AD FITNESS",
      category: "Website",
      image: adfitness,
      description: "A personal website built for a freelance fitness trainer to promote training programs, share fitness tips, and connect with clients through an engaging and responsive interface.",
      technologies: ["React", "Tailwind CSS"],
      link: "https://adfitness-b5y6.onrender.com/"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-primary">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="paragraph max-w-2xl mx-auto mt-8">
            Here are some of my recent projects. Each project solves a unique problem and showcases different skills and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <span className="text-sm font-medium text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}  
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <a href="#projects" className="btn-primary">
            View All Projects
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects; 