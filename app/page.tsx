import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HammerCursor from "@/components/HammerCursor";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#07080b] text-[#f8fafc] selection:bg-white/20 selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Interactive Hammer Cursor with Real Strike & Impact Physics */}
      <HammerCursor />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex flex-col bg-[#07080b] w-full max-w-full overflow-x-hidden">
        {/* Section: Hero with React Bits GridMotion 3D Tech Wall */}
        <Hero />

        {/* Foreground Content Sections on Deep Black Canvas */}
        <div className="relative bg-[#07080b] w-full max-w-full overflow-x-hidden">
          {/* Section: About Me */}
          <About />

          {/* Section: Skills & Technologies */}
          <Skills />

          {/* Section: Professional Experience */}
          <Experience />

          {/* Section: Featured Projects */}
          <Projects />

          {/* Section: Education */}
          <Education />

          {/* Section: Certifications and Achievements */}
          <Certifications />

          {/* Section: How I Approach Development */}
          <Process />

          {/* Section: Contact */}
          <Contact />
        </div>
      </main>

      {/* Section: Footer */}
      <Footer />
    </div>
  );
}
