import React, { useEffect, useState } from 'react';
import { ArrowDown, FileText, Mail } from 'lucide-react';

const skills = [
  'Full Stack Developer',
  'MERN Expert',
  'IoT Innovator',
  'AI Enthusiast'
];

export default function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with circular gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/20 animate-gradient">
        <div className="absolute inset-0 circular-gradient"></div>
        <div className="absolute inset-0">
          {/* Particle effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="relative w-40 h-40 mx-auto mb-8">
            <img
              src="/rishi.png"
              alt="Rishi Pathak"
              className="rounded-full object-cover w-full h-full border-4 border-green-400/30 shadow-lg shadow-green-500/20"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 animate-pulse"></div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Hi, I'm <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Rishi Pathak</span>
            </h1>
            <div className="h-8">
              <p className="text-xl md:text-2xl text-gray-300 transition-all duration-500">
                {skills[currentSkill]}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
            >
              <FileText size={20} />
              View Resume
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/50" size={24} />
        </div>
      </div>
    </section>
  );
}