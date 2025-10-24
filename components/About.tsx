'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Code2, ShieldCheck, Cloud, Brain, SquareDashedBottomCode, SquareDashedMousePointer, Database } from 'lucide-react';
import { about, education, skills } from '@/data/portfolio';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
} as const;

const skillCategories = [
  { title: 'Languages', icon: Code2, items: skills.languages ?? [], color: 'from-blue-500 to-cyan-500' },
  { title: 'Databases', icon: Database, items: (skills as any).databases ?? [], color: 'from-green-500 to-emerald-500' },
  { title: 'Backend', icon: SquareDashedBottomCode, items: skills.backend ?? [], color: 'from-purple-500 to-pink-500' },
  { title: 'Frontend', icon: SquareDashedMousePointer, items: skills.backend ?? [], color: 'from-blue-500 to-cyan-500' },
  { title: 'DevOps & Cloud', icon: Cloud, items: skills.devops ?? [], color: 'from-purple-500 to-pink-500' },
  { title: 'AI/ML', icon: Brain, items: skills.ai ?? [], color: 'from-blue-500 to-cyan-500' },
  { title: 'enterpriseAuth:', icon: ShieldCheck, items: skills.enterpriseAuth ?? [], color: 'from-orange-500 to-red-500' },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Introduction</h3>
            <p className="text-lg text-gray-400 leading-relaxed">{about.introduction}</p>

            {/* Highlights */}
            <div className="space-y-4">
              {about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary-400">{education.degree}</h4>
              <p className="text-lg text-gray-300">{education.institution}</p>
              <p className="text-gray-400">{education.location}</p>
              <p className="text-gray-400">Graduation: {education.graduationDate}</p>

              {/* Awards */}
              <div className="pt-4 border-t border-white/10">
                <h5 className="text-sm font-semibold text-gray-400 mb-3">HONORS & AWARDS</h5>
                <div className="flex flex-wrap gap-2">
                  {education.awards.map((award, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-sm text-primary-400"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUpVariants}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Technical Skills</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {(category.items ?? []).map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
