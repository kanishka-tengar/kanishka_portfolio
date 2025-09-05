import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaProjectDiagram } from "react-icons/fa";

const skills = {
  languages: ["C", "C++", "Python", "SQL", "JavaScript","JAVA"],
  itConstructs: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Operating Systems",
    "Database Management Systems (DBMS)",
    "Computer Networks",
    "Cloud Computing",
    "Data Science",
    "Digital Image Processing",
    "Networking",
  ],
  webTech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "MongoDB",
    "NodeJS",
    "ExpressJS",
    "MySQL",
    "Tailwind CSS",
    "Bootstrap",
  ],
  tools: ["Microsoft Visual Studio", "GitHub","MYSQL Workbench"],
};

const badgeBase =
  "px-5 py-2.5 rounded-full text-base font-semibold shadow-md backdrop-blur-md transition transform duration-300 hover:scale-110 hover:shadow-xl";

export default function Skills() {
  return (
    <section
  id="skills"
  className="relative py-20
             bg-gradient-to-b from-yellow-50 via-green-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
>

      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.25),transparent_40%)]"></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white"
        >
          Technical <span className="text-indigo-600">Skills</span>
        </motion.h2>

        {/* Grid */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-10">
  <div className="flex-1 min-w-[300px]">
    <SkillCard
      icon={<FaCode className="text-indigo-600 text-3xl" />}
      title="Languages"
      items={skills.languages}
      glow="from-indigo-500/40 to-purple-500/40"
    />
  </div>
  <div className="flex-1 min-w-[300px]">
    <SkillCard
      icon={<FaProjectDiagram className="text-pink-600 text-3xl" />}
      title="IT Constructs"
      items={skills.itConstructs}
      glow="from-pink-500/40 to-red-500/40"
    />
  </div>
  <div className="flex-1 min-w-[300px]">
    <SkillCard
      icon={<FaDatabase className="text-yellow-600 text-3xl" />}
      title="Web Development & Database"
      items={skills.webTech}
      glow="from-yellow-500/40 to-orange-500/40"
    />
  </div>
  <div className="flex-1 min-w-[300px]">
    <SkillCard
      icon={<FaTools className="text-green-600 text-3xl" />}
      title="Development Tools"
      items={skills.tools}
      glow="from-green-500/40 to-emerald-500/40"
    />
  </div>
</div>

      </div>
    </section>
  );
}

function SkillCard({ icon, title, items, glow }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative"
    >
      {/* Main Card */}
      <div
        className={`p-10 rounded-2xl bg-white/80 dark:bg-gray-800/70 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden transition duration-500`}
      >
        {/* Glow border (active on card hover anywhere) */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${glow} opacity-0 group-hover:opacity-100 blur-2xl transition duration-500`}
        ></div>

        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            {icon}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {items.map((item, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2.5 rounded-full text-base font-semibold bg-gray-200/80 text-gray-900 dark:bg-gray-700/80 dark:text-white border border-gray-300 dark:border-gray-600 shadow-md backdrop-blur-md transition"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
