import React from "react";
import Header from "./components/headers/header";
import Footer from "./components/footer/footer";
import Contact from "./pages/contact";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Landing from "./pages/landing";
import Skills from "./pages/skills";
import Education from "./pages/education";

import "./App.css";

function App() {
  const sectionStyle = {
    margin: "0px 0", // No vertical margin for sections
  };

  return (
    <>
      <Header />
      <main style={{ scrollBehavior: "smooth" }}>
        <section id="home" style={sectionStyle}>
          <Landing />
        </section>

        <section id="about" style={sectionStyle}>
          <About />
        </section>

        <section id="skills" style={sectionStyle}>
          <Skills />
        </section>
        <section id="projects" style={sectionStyle}>
          <Projects />
        </section>

        <section id="education" style={sectionStyle}>
          <Education />
        </section>

        {/* Only one instance of Contact rendered here */}
        <section id="contact" style={sectionStyle}>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
