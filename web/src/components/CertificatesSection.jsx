import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CertificatesSection = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.2 });

  const resources = [
    {
      title: 'Curriculum Vitae',
      description: 'Download my complete CV with detailed work experience and education',
      icon: <FileText className="w-8 h-8" />,
      link: 'https://drive.google.com/drive/folders/1D2ZdjfhhHr2k8cuUSJGvIzkIY7PeXF_L?usp=sharing',
      gradient: 'from-royal-blue to-sky-blue',
      shadowColor: 'shadow-sky-blue/40',
      borderColor: 'hover:border-cyan-accent',
    },
    {
      title: 'Certificates',
      description: 'View my professional certifications and achievements',
      icon: <Award className="w-8 h-8" />,
      link: 'https://drive.google.com/drive/folders/1wTqQMch0nbr0_fPRFvYNBeFLcfbBTgTG?usp=sharing',
      gradient: 'from-royal-blue to-sky-blue',
      shadowColor: 'shadow-sky-blue/40',
      borderColor: 'hover:border-cyan-accent',
    },
  ];

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-navy-blue"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-light-blue to-sky-blue bg-clip-text text-transparent">
              Certificates & CV
            </span>
          </h2>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            Professional credentials and documentation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className={`h-full p-8 bg-gradient-to-br ${resource.gradient} rounded-3xl border border-white/10 ${resource.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:${resource.shadowColor} relative overflow-hidden`}>
                {/* Subtle background glow */}
                <div className={`absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon */}
                <div className="flex justify-center mb-8 relative z-10">
                  <div className={`p-5 bg-white/10 border border-white/20 rounded-2xl shadow-lg text-cyan-accent transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    {resource.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-white text-center mb-4 relative z-10">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-blue-50 text-center mb-8 leading-relaxed font-medium relative z-10">
                  {resource.description}
                </p>

                {/* Button */}
                <div className="flex justify-center relative z-10">
                  <Button
                    asChild
                    className={`bg-vibrant-blue hover:bg-hover-blue text-white font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl px-6 py-6 rounded-xl border-0`}
                  >
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Open in Google Drive
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-dark-blue/50 backdrop-blur-xl rounded-full border border-sky-blue/30 shadow-lg">
            <Download className="w-6 h-6 text-cyan-accent animate-bounce" />
            <span className="text-blue-100 font-medium">
              All documents are hosted securely on Google Drive
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;