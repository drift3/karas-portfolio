import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Video, Award, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'HTML & CSS', level: 90, icon: Code, color: 'from-orange-400 to-red-500' },
    { name: 'Web Developer', level: 85, icon: Code, color: 'from-yellow-400 to-orange-500' },
    // { name: 'React', level: 80, icon: Code, color: 'from-blue-400 to-cyan-500' },
    // { name: 'Logo Design', level: 90, icon: Palette, color: 'from-purple-400 to-pink-500' }, // commented to focus on web + content
    { name: 'Content Creation', level: 85, icon: Video, color: 'from-green-400 to-teal-500' },
    // { name: 'UI/UX Design', level: 75, icon: Palette, color: 'from-indigo-400 to-purple-500' },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    // { number: '2+', label: 'Years Experience', icon: Coffee },
    { number: '100+', label: 'Happy Clients', icon: Heart },
    { number: '1K+', label: 'YouTube Subscribers', icon: Video },
  ];

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
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating digital experiences that inspire and engage
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-lg"
              />
              <div className="relative bg-gray-800 rounded-2xl p-8 glass-effect">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-purple-600 p-1">
                  <img
                    src="/karasLogo.jpg"
                    alt="Karas Logo"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Karas Wael</h3>
                <p className="text-gray-400 text-center mb-6">
                  Creative Developer & Content Creator
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">2+</div>
                    <div className="text-sm text-gray-400">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">50+</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">1K+</div>
                    <div className="text-sm text-gray-400">Followers</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-6">
              Hello! I'm <span className="gradient-text-safe" style={{ letterSpacing: '0.01em' }}>Karas Wael</span>
            </h3>
            {/* Previous bio kept for reference:
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate web developer and creative designer who loves bringing ideas to life through code and design. 
              As a beginner in the field, I'm constantly learning and growing, with a particular focus on modern web technologies 
              and user experience design.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me creating educational content on YouTube, sharing my journey and helping 
              other aspiring developers learn HTML, CSS, and JavaScript. I also enjoy designing logos and visual identities 
              that help brands stand out.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My goal is to create digital experiences that not only look great but also provide real value to users. 
              I believe in the power of clean code, thoughtful design, and continuous learning.
            </p>
            */}

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a content creator and web developer focused on building fast, accessible websites and sharing what I learn online. 
              I specialize in modern frontend development with CSS, and I love turning ideas into clean, user-friendly interfaces.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Beyond coding, I create educational content on YouTube about web development fundamentals, best practices, and practical projects.
              I enjoy breaking down complex topics into simple, actionable lessons for beginners and aspiring developers.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My mission is to craft digital experiences that perform well and deliver real value, while helping others grow through content.
              I'm always learning, iterating, and collaborating on new ideas.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="https://youtube.com/@karas-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300"
              >
                <Video size={20} />
                <span>Watch My Videos</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                    <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center glass-effect rounded-xl p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-400 to-purple-600 rounded-full mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;