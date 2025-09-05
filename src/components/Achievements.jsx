import React from "react";
import { motion } from "framer-motion";
import { FaCrown, FaUsers } from "react-icons/fa";

const achievements = [
  {
    icon: <FaCrown size={36} />,
    title: "Founded GFG Student Chapter",
    description:
      "Established the official GeeksforGeeks Student Chapter at my college, building a vibrant community of passionate programmers and tech enthusiasts.",
    color: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    icon: <FaUsers size={36} />,
    title: "Vice President - GFG Chapter",
    description:
      "Led the chapter as Vice President, organizing coding competitions, hackathons, and workshops that enhanced the technical culture of the campus.",
    color: "from-yellow-500 via-orange-500 to-red-500",
  },
];

export default function Achievements() {
  return (
   <section
  id="achievements"
  className="relative py-20
             bg-gradient-to-b from-pink-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
>

      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white tracking-wide"
        >
          Achievements <span className="text-indigo-500">& Leadership</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className={`p-10 rounded-3xl shadow-2xl bg-gradient-to-r ${item.color} text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] transition transform`}
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="p-5 bg-white/20 rounded-full shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold">{item.title}</h3>
              </div>
              <p className="text-xl leading-relaxed opacity-95">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
