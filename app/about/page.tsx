import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import React from "react";
import GlassNavbar from "../Navbar";

export default function AboutPage() {
  return (
    <div>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <GlassNavbar />
          <div className="flex flex-col items-center py-6">
            <p className=" bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/40 playfair-display-italic ">
              UI/UX Designer
            </p>
            <div className="mt-6 space-y-1 text-sm md:text-lg lg:text-md font-normal montserrat from-white/80 to-white/20 ">
              <p>UX/UI Designer</p>
              <p>App Designer</p>
              <p>Brand Designer</p>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl text-[#4B3BA3] font-bold italic playfair-display-italic mt-4 mb-2">
          Hi, I'm Ioana
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#7B6FC2] italic playfair-display-italic mb-10">
          and this is my designing journey
        </h2>

        {/* Timeline */}
        <div className="relative pl-16 mb-16">
          {/* Dotted line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 flex flex-col items-center">
            <div className="h-full border-l-2 border-dotted border-[#B6A8F7]" />
          </div>
          {/* Timeline items */}
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute -left-16 top-0 text-[#7B6FC2] font-semibold text-lg montserrat-regular">
                2023
              </div>
              <div className="bg-transparent">
                <p className="text-[#4B3BA3] text-md montserrat-regular">
                  Early passion for creativity through drawing, painting, and
                  visual exploration.
                  <br />
                  Later combined with an interest in programming and technology
                  during high school.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-16 top-0 text-[#7B6FC2] font-semibold text-lg montserrat-regular">
                2023
              </div>
              <div className="bg-transparent">
                <p className="text-[#4B3BA3] text-md montserrat-regular">
                  Discovery of UI/UX and Graphic Design, leading to a clear
                  career direction.
                  <br />
                  Courses, self-learning, and continuous skill development.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-16 top-0 text-[#7B6FC2] font-semibold text-lg montserrat-regular">
                2024
              </div>
              <div className="bg-transparent">
                <p className="text-[#4B3BA3] text-md montserrat-regular">
                  Focus on improving design skills and gaining real-world
                  experience. First client projects and hands-on work centered
                  on user needs and practical solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-16 top-0 text-[#7B6FC2] font-semibold text-lg montserrat-regular">
                2025
              </div>
              <div className="bg-transparent">
                <p className="text-[#4B3BA3] text-md montserrat-regular">
                  Expansion into larger and more diverse projects. Branding,
                  visual identities, logos, and a strong focus on UI/UX. App
                  designs developed into fully functional products used by
                  clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-16 top-0 text-[#7B6FC2] font-semibold text-lg montserrat-regular">
                2026
              </div>
              <div className="bg-transparent">
                <p className="text-[#4B3BA3] text-md montserrat-regular">
                  Ongoing growth as a professional designer. Focus on
                  higher-level opportunities, larger clients, and meaningful,
                  user-centered design work.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <h3 className="text-2xl text-[#4B3BA3] italic playfair-display-italic mb-6 mt-12">
          My core values
        </h3>
        <div className="flex flex-col md:flex-row gap-6 pb-16">
          <div className="flex-1 bg-[#4B3BA3] text-white rounded-xl shadow-lg px-6 py-6 text-center montserrat-regular text-lg font-medium">
            Always learning
          </div>
          <div className="flex-1 bg-[#6B5FC7] text-white rounded-xl shadow-lg px-6 py-6 text-center montserrat-regular text-lg font-medium">
            Empathizing, not just designing
          </div>
          <div className="flex-1 bg-[#7B6FC2] text-white rounded-xl shadow-lg px-6 py-6 text-center montserrat-regular text-lg font-medium">
            Seeking originality and functionality
          </div>
          <div className="flex-1 bg-[#8B7FD7] text-white rounded-xl shadow-lg px-6 py-6 text-center montserrat-regular text-lg font-medium">
            Known for my patience and meticulousity
          </div>
        </div>
      </div>
      <footer className="bg-slate-900 text-slate-300 py-12 text-center">
        <p className="text-sm text-slate-400">
          © 2025 Ioana Serban. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
