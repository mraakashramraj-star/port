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
import SlicedWaves from "@/components/SlicedWaves";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#07080b] text-[#f8fafc] selection:bg-white/20 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex flex-col">
        {/* Section 6: Hero with React Bits GridMotion 3D Tech Wall */}
        <Hero />

        {/* FROM ABOUT ME TO CONTACT: SlicedWaves Animation Background from React Bits */}
        <div className="relative">
          {/* Sticky SlicedWaves WebGL2 Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="sticky top-0 w-full h-screen pointer-events-none">
              <SlicedWaves
                color1="#ffd9a8"
                color2="#ff5fa2"
                color3="#5b8cff"
                ribbons={3}
                spacing={28}
                perspective={0.45}
                blur={0.6}
                glow={1}
                position={0.78}
                mouseInteraction={true}
                className="w-full h-full opacity-65"
              />
              {/* Subtle gradient vignette to keep text ultra-legible and integrate smoothly */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#07080b]/80 via-transparent to-[#07080b]/85 pointer-events-none" />
            </div>
          </div>

          {/* Foreground Sections */}
          <div className="relative z-10">
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
          </div>
        </div>
      </main>

      {/* Section 15: Footer */}
      <Footer />
    </div>
  );
}
