import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group animate-header-item">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Rishi Pathak
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks activeSection={activeSection} />
            <SocialLinks />
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-4">
            <NavLinks mobile activeSection={activeSection} />
            <div className="flex justify-center space-x-6 pt-4 border-t border-white/10">
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLinks = ({ mobile, activeSection }: { mobile?: boolean, activeSection: string }) => {
  const baseClasses = "text-gray-300 hover:text-white transition-colors duration-200 relative";
  const mobileClasses = mobile ? "block py-2 text-center" : "animate-header-item";

  return (
    <>
      {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item, index) => {
        const lowercaseItem = item.toLowerCase();
        const isActive = activeSection === lowercaseItem;
        
        return (
          <a
            key={item}
            href={`#${lowercaseItem}`}
            className={`${baseClasses} ${mobileClasses} ${isActive ? 'active text-white' : ''}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {item}
            <div className="nav-indicator" />
          </a>
        );
      })}
    </>
  );
};

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    {[
      { Icon: Github, href: 'https://github.com/Rishifx', delay: '400ms' },
      { Icon: Linkedin, href: 'https://www.linkedin.com/in/rishifx/', delay: '500ms' },
      { Icon: Mail, href: 'mailto:rishi.pathak193@gmail.com', delay: '600ms' }
    ].map(({ Icon, href, delay }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-400 transition-colors duration-200 animate-header-item"
        style={{ animationDelay: delay }}
      >
        <Icon size={20} />
      </a>
    ))}
  </div>
);