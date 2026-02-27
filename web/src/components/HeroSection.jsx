import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-blue to-royal-blue">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://horizons-cdn.hostinger.com/43bb8df4-15bc-457c-a8df-70e76d8f9a79/c56ab6a43e7cab312d9837ecca07eb02.jpg" 
          alt="Felix Ryan Agusta at outdoor cafe" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-royal-blue/50 to-navy-blue/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.4)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }} 
            className="mb-8 relative inline-block"
          >
            <div className="absolute inset-0 bg-cyan-accent rounded-full blur-xl opacity-40 animate-pulse" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-white ring-4 ring-sky-blue/50 shadow-2xl shadow-navy-blue/50">
              <img 
                src="https://horizons-cdn.hostinger.com/43bb8df4-15bc-457c-a8df-70e76d8f9a79/c56ab6a43e7cab312d9837ecca07eb02.jpg" 
                alt="Felix Ryan Agusta profile" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-light-blue to-dark-blue bg-clip-text text-transparent drop-shadow-lg">
              Felix Ryan Agusta
            </span>
          </motion.h1>

          {/* Animated Intro Text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }} 
            className="text-lg sm:text-xl md:text-2xl text-blue-50 mb-8 sm:mb-12 leading-relaxed font-medium drop-shadow-md"
          >
            <span className="text-cyan-accent font-bold">Backend</span> | <span className="text-light-blue font-bold">AI</span> | <span className="text-cyan-accent font-bold">Data engineer</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto bg-vibrant-blue hover:bg-hover-blue text-white border-0 shadow-lg shadow-sky-blue/40 hover:shadow-xl hover:shadow-sky-blue/60 transition-all duration-300 hover:-translate-y-1 px-8 py-6 text-lg"
            >
              <a href="https://github.com/Felix-ryn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold">
                <Github className="w-5 h-5" />
                View GitHub
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-light-blue text-light-blue hover:bg-light-blue hover:text-navy-blue shadow-lg shadow-transparent hover:shadow-light-blue/30 transition-all duration-300 hover:-translate-y-1 bg-transparent px-8 py-6 text-lg"
            >
              <a href="https://www.linkedin.com/in/felix-ryan-agusta-4ab72927a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.6, delay: 1 }} 
        onClick={handleScrollToAbout} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-light-blue hover:text-white transition-colors duration-300" 
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-10 h-10 animate-bounce drop-shadow-lg" />
      </motion.button>
    </section>
  );
};

export default HeroSection;