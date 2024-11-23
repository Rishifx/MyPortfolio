import React from 'react';
import { Calendar, Award, Briefcase } from 'lucide-react';

const experiences = [
  {
    date: '2024',
    title: 'AURORA',
    organization: 'Authorized User Recognition for Operational Residential Automation',
    description: 'IoT project designed to enhance smart home automation using voice and face recognition. The system authenticates users to securely control home lighting by responding to voice commands like "lights on" or "off.',
    icon: Award,
    color: 'from-cyan-400 to-blue-500'
  },
  {
    date: '2023',
    title: 'Software Engineering Certification',
    organization: 'IBM',
    description: 'Completed comprehensive software engineering program focusing on modern development practices and methodologies.',
    icon: Award,
    color: 'from-cyan-400 to-blue-500'
  },
  {
    date: '2022',
    title: 'Statistics and Data Analysis',
    organization: 'Stanford University',
    description: 'Advanced certification in statistical methods and data analysis techniques.',
    icon: Award,
    color: 'from-purple-400 to-pink-500'
  },
  {
    date: '2020 - Present',
    title: 'Freelance Software Developer',
    organization: 'Self-Employed',
    description: 'Developing custom solutions for clients using MERN stack and implementing IoT systems.',
    icon: Briefcase,
    color: 'from-green-400 to-emerald-500'
  },
  
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-emerald-900/20 via-black to-purple-900/20 animate-gradient-slow relative overflow-hidden">
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              '--duration': `${1 + Math.random() * 2}s`,
              '--delay': `${Math.random() * 2}s`
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-purple-400 to-blue-400"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot with pulse effect */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-2 md:-translate-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-purple-400 relative">
                      <div className="absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-purple-400 animate-ping opacity-75"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm text-emerald-400 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 mb-2">{exp.organization}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}