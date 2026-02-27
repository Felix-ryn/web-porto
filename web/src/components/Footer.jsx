import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-blue border-t border-sky-blue/20 overflow-hidden">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-blue to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <div className="text-2xl font-black bg-gradient-to-r from-light-blue to-sky-blue bg-clip-text text-transparent tracking-wider">
            FRA.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Felix-ryn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-dark-blue/50 rounded-full border border-white/10 hover:border-cyan-accent hover:bg-sky-blue/10 transition-all duration-300 hover:-translate-y-1 group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-blue-100 group-hover:text-cyan-accent transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/felix-ryan-agusta-4ab72927a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-dark-blue/50 rounded-full border border-white/10 hover:border-cyan-accent hover:bg-sky-blue/10 transition-all duration-300 hover:-translate-y-1 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-blue-100 group-hover:text-cyan-accent transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-blue-200 text-sm sm:text-base text-center font-medium">
            © {new Date().getFullYear()} Felix Ryan Agusta. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={handleBackToTop}
            className="group p-4 bg-gradient-to-r from-sky-blue to-royal-blue rounded-full hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all duration-300 hover:-translate-y-2 mt-4"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 text-white font-bold group-hover:animate-bounce" />
          </button>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-dark-blue/20 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;