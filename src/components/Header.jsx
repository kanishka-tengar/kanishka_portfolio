import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    const headerOffset = 64; // height of your fixed header in px
    const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false); // close mobile menu
  }
};


  const menuItems = [
    { label: "Home", id: "#Home" },
    { label: "About", id: "#About" },
    { label: "Experience", id: "#Experience" },
    { label: "Projects", id: "#Projects" },
    { label: "Skills", id: "#Skills" },
    { label: "Achievements", id: "#Achievements" },
    { label: "Contact", id: "#Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-lg transition-colors duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16">
        {/* Logo */}
        <h1
          className="text-2xl md:text-3xl font-extrabold text-white cursor-pointer hover:text-yellow-400 transition-colors duration-300"
          onClick={() => scrollToSection("#Home")}
        >
          Piyush<span className="text-gray-100 dark:text-gray-300">Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(item.id)}
              className="relative text-white dark:text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-sans text-lg"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-400 transition-all duration-300 hover:w-full rounded"></span>
            </button>
          ))}
        </nav>

        {/* Dark mode + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-yellow-400 hover:text-white transition-colors duration-300"
          >
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg bg-white dark:bg-gray-700 hover:bg-yellow-400 hover:text-white transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg overflow-y-auto max-h-[calc(100vh-4rem)] transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-4 py-6 px-6">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left text-white dark:text-gray-300 font-medium hover:text-yellow-400 transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
