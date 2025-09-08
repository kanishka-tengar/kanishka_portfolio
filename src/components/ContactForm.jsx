import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Add actual submission logic here
  };

  return (
    <section
  className="w-full min-h-screen flex flex-col items-center justify-center p-6
             bg-gradient-to-b from-purple-50 via-pink-50 to-indigo-50"
>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text">
        Get in Touch
      </h2>

      {/* Contact Info + Form */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Feel free to reach out directly via email or phone:
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <span className="font-semibold">📧 Email:</span>
              <a
                href="mailto:as07amritsingh@gmail.com"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                kanishkatengar239@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <span className="font-semibold">📞 Phone:</span>
              <a
                href="tel:+916261395550"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                7024183138
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-6 p-8 rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-105 bg-white dark:bg-gray-800"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 hover:shadow-lg transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 hover:shadow-lg transition-all duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="p-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 hover:shadow-lg transition-all duration-300"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-lg font-semibold p-4 rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Gradient text animation */}
      <style>
        {`
          @keyframes text {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-text {
            background-size: 200% 200%;
            animation: text 5s ease infinite;
          }
        `}
      </style>
    </section>
  );
}
