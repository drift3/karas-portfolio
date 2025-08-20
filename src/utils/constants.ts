export const CONTACT_INFO = {
  name: 'Karas Wael',
  email: 'karaswaelzaki@gmail.com',
  phone: '+20 122 080 9951',
  location: 'Egypt',
  title: 'Web Developer •  Content Creator',
  description: 'Crafting digital experiences with creativity and code',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/karaswael',
  youtube: 'https://youtube.com/@karas-tech',
  linktree: 'https://linktr.ee/karas_wael',
};

export const SKILLS = [
  { name: 'HTML/CSS', level: 85, category: 'frontend' },
  { name: 'Web Dveloper', level: 75, category: 'frontend' },
  // { name: 'React', level: 70, category: 'frontend' },
  // { name: 'TypeScript', level: 65, category: 'frontend' },
  // { name: 'Tailwind CSS', level: 80, category: 'frontend' },
  // { name: 'Logo Design', level: 90, category: 'design' },
  // { name: 'UI/UX Design', level: 75, category: 'design' },
  { name: 'Content Creation', level: 80, category: 'content' },
  { name: 'Video Editing', level: 70, category: 'content' },
];

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  }
};