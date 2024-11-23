import React, { useState } from 'react';
import { Github, ExternalLink, Globe, Brain, Home, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'YouthOfKashmir',
    description: 'A MERN stack platform inspiring Kashmiris through success stories and mentorship opportunities.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    icon: Globe,
    links: {
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  },
  {
    title: 'Smart Home Automation',
    description: 'IoT-based home automation system with face recognition and voice control capabilities.',
    image: 'https://images.unsplash.com/photo-1585503418537-88331351ad99?auto=format&fit=crop&w=800&q=80',
    tags: ['IoT', 'Python', 'TensorFlow', 'OpenCV'],
    icon: Home,
    links: {
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  },
  {
    title: 'Stock Market Predictor',
    description: 'Advanced LSTM-based prediction model for NIFTY 50 and BANKNIFTY using attention mechanism.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    icon: TrendingUp,
    links: {
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  },
  {
    title: 'HomeStayKashmir',
    description: 'Modern booking platform for homestays in Kashmir with advanced filtering and search capabilities.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    icon: Brain,
    links: {
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-purple-900/20 via-black to-blue-900/20 animate-gradient-slow relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-1">
                  <div className="relative overflow-hidden rounded-lg">
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/90 transition-opacity duration-300 ${
                      hoveredProject === index ? 'opacity-100' : 'opacity-80'
                    }`}>
                      <div className="absolute bottom-0 p-6 w-full">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-6 h-6 text-purple-400" />
                          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 text-sm rounded-full bg-white/10 text-purple-400 border border-purple-400/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                          >
                            <Github size={20} />
                            <span>Code</span>
                          </a>
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                          >
                            <ExternalLink size={20} />
                            <span>Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}