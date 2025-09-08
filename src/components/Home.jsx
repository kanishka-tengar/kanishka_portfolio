import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-20 overflow-hidden font-sans
             bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"
    >
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Left Side: Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 md:w-1/2 text-center md:text-left space-y-6 backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-xl"
      >
        {/* Typewriter effect */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
          <span className="typewriter">I am Kanishka Tengar </span>
        </h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-yellow-300"
        >
          Full Stack Developer | Competitive Programmer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg text-gray-200 max-w-lg mx-auto md:mx-0 leading-relaxed"
        >
          Crafting <span className="font-bold text-white">modern web apps</span> with the{" "}
          <span className="text-indigo-200 font-semibold">MERN stack</span> and solving{" "}
          <span className="font-bold text-pink-200">competitive programming challenges</span> is my passion.  
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="/kanishka_resume_portfolio.pdf"
            download
            className="px-6 py-3 rounded-lg bg-yellow-400 text-gray-900 font-semibold flex items-center gap-2 shadow-lg hover:bg-yellow-300 transition"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex gap-6 justify-center md:justify-start text-2xl mt-4"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kanishka-tengar-a443a7261/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/kanishka_tengar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition transform hover:scale-125"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side: Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <img
          src="/kanishkapic.png"
          alt="Kanishka Tengar"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.4)] border-4 border-yellow-400 object-cover"
        />
      </motion.div>
    </section>
  );
}
