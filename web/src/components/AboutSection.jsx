import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Calendar } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
const AboutSection = () => {
  const [sectionRef, isVisible] = useScrollReveal({
    threshold: 0.2
  });
  const education = [{
    school: 'PENS - D4 Sains Data Terapan',
    period: '2024 - Saat ini',
    skills: ['Data Processing & Analysis', 'Database Management', 'Python Programming', 'Data Engineering Fundamentals', 'Data Visualization', 'Statistical Analysis', 'Applied Data Science'],
    icon: <GraduationCap className="w-6 h-6" />
  }, {
    school: 'SMK Telkom Malang - Rekayasa Perangkat Lunak',
    period: '2021 - 2024',
    skills: ['Backend Development (Node.js, Express.js)', 'Database Management', 'Web Development (React.js)', 'Java Programming', 'WordPress Development', 'System Design', 'Logical Thinking', 'Problem Solving', 'Software Development Fundamentals'],
    icon: <GraduationCap className="w-6 h-6" />
  }];
  return <section id="about" ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 bg-light-blue overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-blue/30 to-transparent" />
      <div className="absolute -left-40 top-40 w-80 h-80 bg-sky-blue/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isVisible ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-dark-blue to-royal-blue bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto font-medium">
            Mahasiswa D4 Sains Data Terapan di PENS dan lulusan SMK RPL, memiliki kompetensi dalam pengembangan backend, pengolahan data, dan manajemen basis data.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Education Journey */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={isVisible ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-8 h-8 text-dark-blue animate-pulse" />
              <h3 className="text-2xl sm:text-3xl font-bold text-dark-blue">
                Educational Journey
              </h3>
            </div>

            {education.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={isVisible ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.3 + index * 0.1
          }} className="p-6 bg-gradient-to-br from-dark-blue to-deep-blue rounded-3xl shadow-lg shadow-navy-blue/10 hover:shadow-xl hover:shadow-sky-blue/20 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/20 group-hover:border-cyan-accent/50 transition-colors shrink-0">
                    <div className="text-cyan-accent">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-light-blue transition-colors">
                      {item.school}
                    </h4>
                    <div className="flex items-center gap-2 text-cyan-accent text-sm font-semibold mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIdx) => <span key={skillIdx} className="px-3 py-1 text-xs font-medium bg-white/10 text-blue-50 rounded-full border border-white/5 group-hover:border-white/20 transition-colors">
                          {skill}
                        </span>)}
                    </div>
                  </div>
                </div>
              </motion.div>)}

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isVisible ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="p-6 bg-white rounded-3xl border border-sky-blue/20 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-blue/10 rounded-full blur-2xl -mr-10 -mt-10" />
              <p className="text-slate-700 leading-relaxed relative z-10 text-lg">
                I'm deeply passionate about <span className="text-royal-blue font-bold">Backend Development</span> and{' '}
                <span className="text-sky-blue font-bold">Data Engineering</span>. My focus is on building robust, scalable systems that handle complex data workflows and deliver high-performance solutions.
              </p>
            </motion.div>
          </motion.div>

          {/* Photo Gallery & Name */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isVisible ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-blue/20 to-royal-blue/20 rounded-3xl blur-2xl -z-10" />
              
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={isVisible ? {
              opacity: 1,
              scale: 1
            } : {}} transition={{
              duration: 0.6,
              delay: 0.5
            }} className="col-span-2 rounded-3xl overflow-hidden border-4 border-white shadow-lg shadow-navy-blue/10 hover:border-sky-blue hover:shadow-xl hover:shadow-sky-blue/30 transition-all duration-500 hover:scale-[1.02] group">
                <div className="absolute inset-0 bg-dark-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                <img src="https://horizons-cdn.hostinger.com/43bb8df4-15bc-457c-a8df-70e76d8f9a79/whatsapp-image-2025-07-13-at-20.50.11-6U8yv.jpeg" alt="Felix at modern indoor building" className="w-full h-64 object-cover" />
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={isVisible ? {
              opacity: 1,
              scale: 1
            } : {}} transition={{
              duration: 0.6,
              delay: 0.6
            }} className="rounded-3xl overflow-hidden border-4 border-white shadow-lg shadow-navy-blue/10 hover:border-sky-blue hover:shadow-xl hover:shadow-sky-blue/30 transition-all duration-500 hover:scale-[1.05] group">
                <div className="absolute inset-0 bg-dark-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                <img src="https://horizons-cdn.hostinger.com/43bb8df4-15bc-457c-a8df-70e76d8f9a79/img-20221128-wa0031-1SHtq.jpg" alt="Felix at waterfall location" className="w-full h-48 object-cover" />
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={isVisible ? {
              opacity: 1,
              scale: 1
            } : {}} transition={{
              duration: 0.6,
              delay: 0.7
            }} className="rounded-3xl overflow-hidden border-4 border-white shadow-lg shadow-navy-blue/10 hover:border-sky-blue hover:shadow-xl hover:shadow-sky-blue/30 transition-all duration-500 hover:scale-[1.05] group">
                <div className="absolute inset-0 bg-dark-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                <img src="https://horizons-cdn.hostinger.com/43bb8df4-15bc-457c-a8df-70e76d8f9a79/whatsapp-image-2025-07-16-at-14.41.04-73OY9.jpeg" alt="Felix at garden area" className="w-full h-48 object-cover" />
              </motion.div>
            </div>

            {/* Prominent Name Display */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isVisible ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="text-center mt-4 p-6 bg-white rounded-3xl border border-sky-blue/20 shadow-xl shadow-sky-blue/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/5 to-cyan-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight relative z-10">
                <span className="bg-gradient-to-r from-sky-blue via-royal-blue to-cyan-accent bg-clip-text text-transparent drop-shadow-sm">
                  Felix Ryan Agusta
                </span>
              </h3>
              <p className="text-slate-500 font-medium mt-2 uppercase tracking-widest text-sm">
                Software & Data Engineer
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;