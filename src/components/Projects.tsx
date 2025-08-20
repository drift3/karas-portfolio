import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Palette, Video } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Eye },
    { id: 'web', label: 'Web Development', icon: Code },
    // { id: 'design', label: 'Logo Design', icon: Palette }, // commented to focus on web + content
    { id: 'content', label: 'Content Creation', icon: Video },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern E-commerce Website',
      description: 'A fully responsive e-commerce platform built with React and modern design principles.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    // {
    //   id: 2,
    //   title: 'Brand Identity Design',
    //   description: 'Complete brand identity package including logo, color palette, and brand guidelines.',
    //   category: 'design',
    //   image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //   technologies: ['Adobe Illustrator', 'Figma', 'Brand Strategy'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false,
    // },
    {
      id: 3,
      title: 'HTML/CSS Tutorial Series',
      description: 'Educational video series teaching HTML and CSS fundamentals to beginners.',
      category: 'content',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['HTML', 'CSS', 'Video Editing', 'Teaching'],
      liveUrl: 'https://youtube.com/@karas-tech',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'Portfolio Website Template',
      description: 'Clean and modern portfolio template for developers and designers.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    // {
    //   id: 5,
    //   title: 'Startup Logo Collection',
    //   description: 'Collection of modern logos designed for various startup companies.',
    //   category: 'design',
    //   image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //   technologies: ['Logo Design', 'Brand Identity', 'Vector Graphics'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false,
    // },
    {
      id: 6,
      title: 'JavaScript Basics Course',
      description: 'Comprehensive JavaScript course covering fundamentals and practical projects.',
      category: 'content',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['JavaScript', 'DOM Manipulation', 'ES6+', 'Projects'],
      liveUrl: 'https://youtube.com/@karas-tech',
      githubUrl: '#',
      featured: true,
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold gradient-text mb-6">
            My Projects
          </h2>
          {/* Previous subtitle kept for reference:
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my work in web development, design, and content creation
          </p>
          */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my work in web development and content creation
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon size={18} />
                <span>{category.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className={`relative group cursor-pointer ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="glass-effect rounded-2xl overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                    
                    {/* Overlay on Hover */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gray-900/90 flex items-center justify-center space-x-4"
                        >
                          <motion.a
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-teal-500 rounded-full hover:bg-teal-600 transition-colors"
                          >
                            <ExternalLink size={20} className="text-white" />
                          </motion.a>
                          <motion.a
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ delay: 0.1 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                          >
                            <Github size={20} className="text-white" />
                          </motion.a>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-sm rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together? Let's create something amazing!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;