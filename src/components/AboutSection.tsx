import React from 'react';
const AboutSection = () => (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 relative px-12 py-20 overflow-hidden">
    {/* Decorative Background Element - Top Right */}
    <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-700 to-pink-500 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
  
    <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
      
      {/* Left Section */}
      <div className="space-y-6 text-left">
        <h2 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          I am a highly driven software engineer passionate about crafting high-performance, scalable applications. My expertise lies in backend engineering, where I architect seamless digital solutions that are robust, efficient, and innovative.
        </p>
        <p className="text-xl text-gray-300 leading-relaxed">
          I thrive on solving complex problems, leveraging cutting-edge technologies, and contributing to open-source communities. My adaptability and continuous learning mindset keep me at the forefront of technological advancements.
        </p>
      </div>
  
      {/* Right Section - Skill Badges */}
      <div className="relative flex justify-end items-center">
        <div className="flex flex-wrap gap-4 mt-6 justify-end">
          <span className="px-7 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg font-semibold transition-all duration-300 hover:scale-105 hover:brightness-125">Full Stack Developer</span>
          <span className="px-7 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg font-semibold transition-all duration-300 hover:scale-105 hover:brightness-125">Backend Engineer</span>
          <span className="px-7 py-4 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-full shadow-lg font-semibold transition-all duration-300 hover:scale-105 hover:brightness-125">Tech Enthusiast</span>
          <span className="px-7 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg font-semibold transition-all duration-300 hover:scale-105 hover:brightness-125">Graphic Designer</span>
          <span className="px-7 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-lg font-semibold transition-all duration-300 hover:scale-105 hover:brightness-125">Problem Solver</span>
        </div>
      </div>
    </div>
  </section>
);
export default AboutSection;