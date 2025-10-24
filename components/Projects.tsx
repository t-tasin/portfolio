'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Award, TrendingUp, Code2 } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing enterprise-grade software engineering projects built with modern technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group ${project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''}`}
            >
              <div
                className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 ${
                  project.featured ? 'p-8' : 'p-6'
                }`}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      {project.featured && (
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-5 h-5 text-primary-500" />
                          <span className="text-sm font-semibold text-primary-400">FEATURED PROJECT</span>
                        </div>
                      )}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-400">{project.subtitle}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs text-primary-400 whitespace-nowrap">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                    <TrendingUp size={16} className="text-primary-500" />
                    KEY ACHIEVEMENTS
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-300 pl-4 border-l-2 border-primary-500/50">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                    <Code2 size={16} className="text-primary-500" />
                    TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:bg-primary-500/10 hover:border-primary-500/30 hover:text-primary-400 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-all duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">View Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Video & Metrics Card (for featured projects) */}
              {project.featured && (project.links.video || project.metrics) && (
                <div className="space-y-6">
                  {/* YouTube Video Player */}
                  {project.links.video && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                    >
                      <div className="aspect-video w-full">
                        <iframe
                          src={`https://www.youtube.com/embed/${project.links.video.includes('youtu.be')
                            ? project.links.video.split('/').pop()
                            : project.links.video.includes('watch?v=')
                            ? project.links.video.split('watch?v=')[1].split('&')[0]
                            : ''}`}
                          title={`${project.title} - Video Walkthrough`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Metrics Card */}
                  {project.metrics && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="bg-gradient-to-br from-primary-500/10 to-primary-600/10 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8"
                    >
                      <h4 className="text-xl font-bold text-white mb-6">Project Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(project.metrics).map(([key, value], i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                          >
                            <p className="text-2xl font-bold text-primary-400 mb-1">{value}</p>
                            <p className="text-sm text-gray-400">{key}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
