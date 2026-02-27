import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ContactSection = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent! ✉️',
        description: 'Thank you for reaching out. I\'ll get back to you soon!',
        className: 'bg-dark-blue text-white border-sky-blue',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/Felix-ryn',
      gradient: 'from-slate-700 to-slate-900',
      hoverColor: 'group-hover:text-sky-blue',
      hoverBorder: 'hover:border-sky-blue'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/felix-ryan-agusta-4ab72927a/',
      gradient: 'from-royal-blue to-dark-blue',
      hoverColor: 'group-hover:text-sky-blue',
      hoverBorder: 'hover:border-sky-blue'
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-light-blue overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-sky-blue/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-dark-blue to-royal-blue bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-3xl border border-sky-blue/20 shadow-xl shadow-navy-blue/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-dark-blue mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-vibrant-blue focus:border-vibrant-blue transition-all duration-300 shadow-inner"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-dark-blue mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-vibrant-blue focus:border-vibrant-blue transition-all duration-300 shadow-inner"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-dark-blue mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-vibrant-blue focus:border-vibrant-blue transition-all duration-300 resize-none shadow-inner"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-vibrant-blue hover:bg-hover-blue text-white font-bold text-lg py-6 rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 border-0"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="p-8 bg-white rounded-3xl border border-sky-blue/20 hover:border-sky-blue transition-colors duration-300 group shadow-md">
              <div className="flex items-center gap-5 mb-4">
                <div className="p-4 bg-light-blue rounded-2xl border border-sky-blue/30 group-hover:border-sky-blue transition-colors">
                  <Mail className="w-7 h-7 text-vibrant-blue" />
                </div>
                <h3 className="text-2xl font-extrabold text-dark-blue">Email</h3>
              </div>
              <p className="text-slate-600 text-lg font-medium">
                Feel free to reach out through the contact form or connect with me on social media.
              </p>
            </div>

            {/* Social Links */}
            <div className="p-8 bg-white rounded-3xl border border-sky-blue/20 shadow-md">
              <h3 className="text-2xl font-extrabold text-dark-blue mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className={`flex items-center gap-5 p-4 bg-slate-50 rounded-2xl border border-slate-200 ${social.hoverBorder} transition-all duration-300 hover:-translate-y-1 group`}
                  >
                    <div className={`p-3 bg-gradient-to-br ${social.gradient} rounded-xl shadow-md text-white`}>
                      {social.icon}
                    </div>
                    <span className={`text-slate-700 font-bold text-lg ${social.hoverColor} transition-colors`}>
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-8 bg-gradient-to-br from-sky-blue/10 to-royal-blue/10 rounded-3xl border border-sky-blue/20 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-sky-blue/20 rounded-full blur-2xl" />
              <p className="text-dark-blue leading-relaxed text-lg font-medium relative z-10">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;