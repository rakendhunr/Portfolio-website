import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="section">
       <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;