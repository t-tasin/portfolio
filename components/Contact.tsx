'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { contact } from '@/data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleSubmit = () => {
    const subject = 'Portfolio Contact';
    const body = `From: ${formData.email || 'Not provided'}\n\n${formData.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20">
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            {contact.availability}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">{contact.email}</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-4 p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-medium">{contact.phone}</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">{contact.location}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm text-gray-400 mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-primary-500/20 border border-white/20 hover:border-primary-500/50 rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-primary-500/20 border border-white/20 hover:border-primary-500/50 rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Message Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-500/10 to-primary-600/10 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Send a Quick Message</h3>
            <p className="text-sm text-gray-400 mb-6">Opens your default email client</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50"
              >
                <Send size={20} />
                Open Email Client
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
