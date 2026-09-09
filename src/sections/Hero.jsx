import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 text-white px-6 overflow-hidden"
    >
      {/* Background Decorative Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Subtitle / Greeting */}
        <span className="inline-block text-indigo-400 font-medium tracking-widest uppercase mb-4 text-sm sm:text-base animate-fade-in">
          Hello, my name is
        </span>

        {/* Main Name */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Patrick Jane
        </h1>

        {/* Profession / Tagline */}
        <p className="text-xl sm:text-2xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
          Consultant, Mentalist, & Problem Solver crafting exceptional digital experiences and uncovering hidden truths.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-600/30"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 font-medium transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 rounded-full border-2 border-gray-700 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-indigo-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
