import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const SkillsSection = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-royal-blue to-sky-blue',
      borderHover: 'hover:border-sky-blue',
      shadowHover: 'hover:shadow-sky-blue/40',
      skills: ['Java', 'JavaScript', 'Python', 'PHP', '.NET', 'SQL'],
    },
    {
      title: 'Frontend',
      icon: <Layout className="w-6 h-6" />,
      gradient: 'from-royal-blue to-sky-blue',
      borderHover: 'hover:border-sky-blue',
      shadowHover: 'hover:shadow-sky-blue/40',
      skills: ['React', 'Next.js', 'HTML', 'Tailwind CSS', 'Webpack', 'Vite', 'npm', 'yarn'],
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      gradient: 'from-royal-blue to-sky-blue',
      borderHover: 'hover:border-sky-blue',
      shadowHover: 'hover:shadow-sky-blue/40',
      skills: ['Node.js', 'Express.js', 'REST API', 'Django', 'JWT', 'PostgreSQL', 'MongoDB', 'Postman', 'Git'],
    },
    {
      title: 'Data Science & ML',
      icon: <Database className="w-6 h-6" />,
      gradient: 'from-royal-blue to-sky-blue',
      borderHover: 'hover:border-sky-blue',
      shadowHover: 'hover:shadow-sky-blue/40',
      skills: [
        'Machine Learning', 'Time Series Analysis', 'NLP', 'TensorFlow', 
        'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 
        'Data Preprocessing', 'Feature Engineering', 'Model Evaluation', 
        'ACO (Ant Colony Optimization)', 'Genetic Algorithm', 'LSTM', 
        'CNN', 'Naive Bayes', 'Data Visualization', 'Statistical Analysis', 
        'Python Data Science Libraries'
      ],
    },
  ];

  return (
    <section
      id="skills"
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
              Technical Skills
            </span>
          </h2>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            A comprehensive toolkit for building modern applications and data solutions
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group h-full"
            >
              <div className={`h-full p-6 sm:p-8 bg-gradient-to-br ${category.gradient} rounded-3xl border border-white/10 ${category.borderHover} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${category.shadowHover} relative overflow-hidden`}>
                {/* Subtle background gradient on hover */}
                <div className={`absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`p-3 bg-white/10 rounded-xl shadow-inner text-cyan-accent border border-white/20`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-light-blue transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 sm:gap-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.02,
                      }}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-cyan-accent/50 rounded-full transition-all duration-300 cursor-default group/badge hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    >
                      <span className="text-blue-50 font-medium text-sm sm:text-base group-hover/badge:text-white transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-sky-blue to-royal-blue">
            <div className="px-8 py-3 bg-navy-blue rounded-full">
              <p className="text-blue-100 text-lg font-medium">
                Continuously learning and expanding my technical expertise
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;