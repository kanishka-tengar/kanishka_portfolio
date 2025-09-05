import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Emergency Ambulance Booking System",
    description:
      "Web-based Ambulance Request System using HTML, CSS, Bootstrap, PHP, and MySQL. Enables quick ambulance requests, call prioritization, location tracking, and efficient resource allocation with robust performance.",
    github: "https://github.com/PiyushMits123", // replace with actual repo
    live: "#",
    image: "/projects/ambulance.webp",
  },
  {
    title: "Employee Onboarding System",
    description:
      "MERN-based system to streamline hiring and provisioning. Automates account creation, access provisioning, task tracking, and ensures faster onboarding with a responsive UI.",
    github: "https://github.com/PiyushMits123", // replace with actual repo
    live: "#",
    image: "/projects/onboarding.webp",
  },
  {
    title: "AI Powered Resume Analyzer",
    description:
      "Full-stack AI-powered Resume Analyzer with Python backend. Allows users to upload resumes, compare with job descriptions, and receive improvement suggestions with match percentage.",
    github: "https://github.com/PiyushMits123", // replace with actual repo
    live: "#",
    image: "/projects/resume.webp",
  },
];

export default function Projects() {
  return (
   <section
  id="Projects"
  className="relative py-20
             bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
>

      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          My <span className="text-indigo-500">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative group rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-8">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-lg mb-6">{project.description}</p>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
