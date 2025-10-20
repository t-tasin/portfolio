'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import { research } from '@/data/portfolio';

export default function Research() {
  return (
    <section id="research" className="py-20 bg-gradient-to-b from-transparent to-black/20">
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
            <span className="gradient-text">Research & Publications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic research in autonomous systems, multi-agent coordination, and natural language processing
          </p>
        </motion.div>

        {/* Research Papers */}
        <div className="space-y-8">
          {research.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {paper.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span>{paper.authors.join(', ')}</span>
                    <span>•</span>
                    <span>{paper.venue}</span>
                    <span>•</span>
                    <span>{paper.year}</span>
                  </div>
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">ABSTRACT</h4>
                <p className="text-gray-300 leading-relaxed text-sm">{paper.abstract}</p>
              </div>

              {/* Keywords */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">KEYWORDS</h4>
                <div className="flex flex-wrap gap-2">
                  {paper.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs text-primary-400"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                {paper.links.paper && (
                  <a
                    href={paper.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <FileText size={16} />
                    <span className="text-sm font-medium">Read Paper</span>
                  </a>
                )}
                {paper.links.github && (
                  <a
                    href={paper.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
