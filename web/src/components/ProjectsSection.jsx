import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ProjectsSection = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-light-blue overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-dark-blue to-royal-blue bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            Explore my work on GitHub
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 sm:p-12 bg-gradient-to-br from-dark-blue to-deep-blue rounded-3xl border-2 border-transparent hover:border-cyan-accent transition-all duration-500 overflow-hidden group shadow-xl shadow-navy-blue/20"
          >
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-blue to-cyan-accent rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />

            <div className="relative z-10 text-center space-y-8">
              {/* GitHub Icon */}
              <div className="flex justify-center">
                <div className="p-6 bg-white/10 rounded-full border border-white/20 shadow-[0_0_30px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-500 group-hover:scale-110">
                  <Github className="w-12 h-12 sm:w-16 sm:h-16 text-white group-hover:text-cyan-accent transition-colors duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                GitHub Portfolio
              </h3>

              {/* Description */}
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
                Discover my collection of projects showcasing backend development, data engineering solutions, and full-stack applications. Each repository demonstrates my commitment to clean code, scalable architecture, and innovative problem-solving.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-vibrant-blue hover:bg-hover-blue text-white border-0 shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all duration-300 hover:-translate-y-1 px-8 py-6 text-lg font-bold rounded-xl"
                >
                  <a
                    href="https://github.com/Felix-ryn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <ExternalLink className="w-6 h-6" />
                    View All Projects on GitHub
                  </a>
                </Button>
              </div>

              {/* Stats or Additional Info */}
              <div className="pt-8 flex flex-wrap justify-center gap-8 sm:gap-16 text-sm sm:text-base border-t border-white/10">
                <div className="text-center group/stat">
                  <p className="text-2xl sm:text-3xl font-black text-cyan-accent group-hover/stat:scale-110 transition-transform">
                    Backend
                  </p>
                  <p className="text-blue-200 mt-2 font-medium uppercase tracking-wider text-xs">Focus Area</p>
                </div>
                <div className="text-center group/stat">
                  <p className="text-2xl sm:text-3xl font-black text-sky-blue group-hover/stat:scale-110 transition-transform">
                    Data Eng
                  </p>
                  <p className="text-blue-200 mt-2 font-medium uppercase tracking-wider text-xs">Specialization</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;