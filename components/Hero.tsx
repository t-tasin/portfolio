'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import Typewriter from './Typewriter';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-primary-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Title with Typewriter */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mb-8"
          >
            {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mr-3">
              I'm a
            </h2> */}
            <Typewriter
              words={['Developer', 'Researcher', 'Problem Solver', 'Software Engineer', 'Builder']}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Location
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-gray-400 mb-12"
          >
            <MapPin size={20} className="text-primary-500" />
            <span>{personalInfo.location}</span>
          </motion.div> */}

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-primary-500/20 border border-white/20 hover:border-primary-500/50 rounded-lg transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-primary-500/20 border border-white/20 hover:border-primary-500/50 rounded-lg transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-white/10 hover:bg-primary-500/20 border border-white/20 hover:border-primary-500/50 rounded-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-primary-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
