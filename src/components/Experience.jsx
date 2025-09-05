import React, { useEffect, useState } from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Cyber Security Intern",
      company: "CDAC, Noida",
      period: "Jun 2025 - Jul 2025 · 2 mos",
      location: "Remote",
      description: [
        "Gaining hands-on experience with cyber threat analysis, network security, ethical hacking, and digital forensics through structured modules and virtual labs.",
        "Learning real-world applications of cyber defense mechanisms and compliance protocols.",
        "Developing skills in securing systems, identifying vulnerabilities, and understanding incident response strategies.",
        "Focus Areas: Cybersecurity and Penetration Testing",
      ],
    },
    {
      title: "Full-stack Developer",
      company: "Null Classes",
      period: "Jan 2025 - May 2025 · 5 mos",
      location: "Remote",
      description: [
        "Worked as a Full Stack Developer Intern, contributing to designing and developing responsive web applications using MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Integrated REST APIs, participated in Agile development cycles, and deployed projects on cloud platforms like Heroku/Vercel.",
        "Followed best coding and version control practices.",
        "Focus Areas: Engineering",
      ],
    },
  ];

  // Scroll animation state
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".exp-card");
      const newVisible = [];
      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          newVisible.push(idx);
        }
      });
      setVisibleCards(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="Experience"
      className="w-full py-24 px-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-center text-gray-800 dark:text-white tracking-wide font-sans">
        Experience
      </h2>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`exp-card w-full bg-gray-100 dark:bg-gray-700 p-10 rounded-3xl shadow-lg border border-transparent transform transition-all duration-500
              ${visibleCards.includes(idx) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              hover:bg-indigo-100 dark:hover:bg-indigo-800 cursor-pointer`}
          >
            <h3 className="text-3xl font-bold mb-2 font-serif hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
              {exp.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1 font-medium hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300">
              {exp.company} · {exp.location}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 italic hover:text-indigo-400 dark:hover:text-indigo-200 transition-colors duration-300">
              {exp.period}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200">
              {exp.description.map((point, i) => (
                <li
                  key={i}
                  className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
