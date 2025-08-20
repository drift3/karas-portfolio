import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Youtube, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Fetch a high-quality background image from Unsplash
    const fetchBackgroundImage = async () => {
      try {
        const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
        
        if (accessKey) {
          const response = await fetch(
            'https://api.unsplash.com/photos/random?query=technology,coding,workspace,developer&orientation=landscape&w=1920&h=1080',
            {
              headers: {
                'Authorization': `Client-ID ${accessKey}`
              }
            }
          );
          
          if (response.ok) {
            const data = await response.json();
            setBackgroundImage(data.urls.full);
            return;
          }
        }
        
        // Fallback to a curated high-quality image
        setBackgroundImage('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
      } catch (error) {
        // Fallback image
        setBackgroundImage('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
      }
    };

    fetchBackgroundImage();
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
          >
            <span 
              className="gradient-text-safe"
              style={{
                textShadow: '0 0 40px rgba(20, 184, 166, 0.4), 0 0 80px rgba(59, 130, 246, 0.3)',
                letterSpacing: '0.02em'
              }}
            >
              Karas Wael
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 space-y-2"
          >
            <p>Web Developer • Content Creator</p>
            <p className="text-lg md:text-xl text-gray-400">
              Crafting digital experiences with creativity and code
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(20, 184, 166, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, color: '#14b8a6' }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/karaswael"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <Github size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, color: '#ef4444' }}
              whileTap={{ scale: 0.9 }}
              href="https://youtube.com/@karas-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <Youtube size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, color: '#8b5cf6' }}
              whileTap={{ scale: 0.9 }}
              href="https://linktr.ee/karas_wael"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <ExternalLink size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToNext}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;