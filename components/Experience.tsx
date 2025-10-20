'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500/50 to-transparent" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 group">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs text-primary-400">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-xl text-primary-400 font-semibold mb-3">{job.company}</p>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-primary-500" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-primary-500" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{job.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3 mb-4">
                      {job.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-300 text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {job.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400 hover:bg-primary-500/10 hover:border-primary-500/30 hover:text-primary-400 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-12 h-12 flex-shrink-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full items-center justify-center shadow-lg shadow-primary-500/50 z-10">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
