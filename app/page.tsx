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

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#07080b] text-[#f8fafc] selection:bg-white/20 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex flex-col">
        {/* Section 6: Hero with React Bits GridMotion 3D Tech Wall */}
        <Hero />

        {/* Section 7: About Me */}
        <About />

        {/* Section 8: Skills & Technologies */}
        <Skills />

        {/* Section 9: Professional Experience */}
        <Experience />

        {/* Section 10: Featured Projects (Most Important Section) */}
        <Projects />

        {/* Section 11: Education */}
        <Education />

        {/* Section 12: Certifications and Achievements */}
        <Certifications />

        {/* Section 13: How I Approach Development */}
        <Process />

        {/* Section 14: Contact */}
        <Contact />
      </main>

      {/* Section 15: Footer */}
      <Footer />
    </div>
  );
}
