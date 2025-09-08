import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20
             bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Decorative Background Blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          About <span className="text-indigo-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
         {/* Left: Bio Card */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition transform md:min-h-[350px]"
>
  <h3 className="text-3xl font-bold mb-6 text-indigo-500">
    Who am I?
  </h3>
  <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
    I am{" "}
    <span className="font-bold text-yellow-500">Kanishka Tengar </span>, a{" "}
    <span className="text-indigo-500 font-semibold">
      Full Stack Developer
    </span>{" "}
    and{" "}
    <span className="text-pink-500 font-semibold">
      Competitive Programmer
    </span>
    .  
    I enjoy building{" "}
    <span className="text-indigo-400 font-bold">scalable web apps</span> and
    solving challenging{" "}
    <span className="text-pink-400 font-bold">coding problems</span>.  
    As active member of the{" "}
    <span className="font-bold">GeeksforGeeks Student Chapter and Funtech Club</span>,
    I’ve gained experience in{" "}
    <span className="text-yellow-400 font-bold">leadership & collaboration</span>.
  </p>
</motion.div>


         {/* Education */}
<motion.div
  whileHover={{ scale: 1.08, rotate: 1 }}
  className="p-8 bg-gradient-to-r from-indigo-500/90 to-purple-500/90 text-white rounded-2xl shadow-xl flex items-start gap-6 transition transform"
>
  <div className="p-4 bg-white/20 rounded-full shadow-inner">
    <FaUserGraduate size={34} />
  </div>
  <div>
    <h4 className="text-2xl font-bold mb-2">Education</h4>
    <p className="text-lg leading-relaxed opacity-90">
      B.Tech in Information Technology   
      Madhav Institute of Technology & Science, Gwalior –{" "}
      <span className="font-semibold">Batch 2027</span>
    </p>
  </div>
</motion.div>

{/* Development */}
<motion.div
  whileHover={{ scale: 1.08, rotate: -1 }}
  className="p-8 bg-gradient-to-r from-pink-500/90 to-red-500/90 text-white rounded-2xl shadow-xl flex items-start gap-6 transition transform"
>
  <div className="p-4 bg-white/20 rounded-full shadow-inner">
    <FaLaptopCode size={34} />
  </div>
  <div>
    <h4 className="text-2xl font-bold mb-2">Development</h4>
    <p className="text-lg leading-relaxed opacity-90">
      Skilled in MERN stack, REST APIs, and modern web development.
    </p>
  </div>
</motion.div>

{/* Leadership */}
<motion.div
  whileHover={{ scale: 1.08 }}
  className="p-8 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 text-white rounded-2xl shadow-xl flex items-start gap-6 transition transform"
>
  <div className="p-4 bg-white/20 rounded-full shadow-inner">
    <FaUsers size={34} />
  </div>
  <div>
    <h4 className="text-2xl font-bold mb-2">Volunteering</h4>
    <p className="text-lg leading-relaxed opacity-90">
      Member of  GeeksforGeeks Student Chapter and served as{" "}
      <span className="font-bold">active member in Management Domain</span>.
    </p>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}
