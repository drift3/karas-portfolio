import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold gradient-text-safe mb-4" style={{ letterSpacing: '0.02em' }}>
            Karas Wael
          </h1>
          <p className="text-gray-400 text-lg">Creative Developer</p>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="h-1 bg-gradient-to-r from-teal-400 to-purple-600 rounded-full mx-auto"
        />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="mt-8 w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full mx-auto"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;