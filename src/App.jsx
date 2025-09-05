import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AdminQueries from "./components/AdminQueries";
import Experience from "./components/Experience";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Portfolio */}
        <Route
          path="/"
          element={
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
              <Header />

              <main className="pt-16">
                <section id="Home">
                  <Home />
                </section>

                <section id="About">
                  <About />
                </section>

                <section id="Experience">
                  <Experience />
                </section>

                <section id="Projects">
                  <Projects />
                </section>


                <section id="Skills">
                  <Skills />
                </section>

                <section id="Achievements">
                  <Achievements />
                </section>

                

                <section id="Contact">
                  <ContactForm />
                </section>
              </main>

              <Footer />
            </div>
          }
        />

        {/* Admin Dashboard */}
        <Route path="/Admin" element={<AdminQueries />} />
      </Routes>
    </Router>
  );
}
