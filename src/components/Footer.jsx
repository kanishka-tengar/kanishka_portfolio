import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Copyright */}
        <p className="text-sm md:text-base text-center md:text-left font-light">
          © {year} Kanishka Tengar . All Rights Reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-6 justify-center md:justify-end text-xl">
          {[
            { icon: <FaGithub />, link: "https://github.com/yourusername" },
            { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername" },
            { icon: <FaTwitter />, link: "https://twitter.com/yourusername" },
            { icon: <FaInstagram />, link: "https://instagram.com/yourusername" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-125 hover:text-yellow-400 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
