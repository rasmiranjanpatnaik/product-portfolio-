import { Project, CaseStudy, SocialLink, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 'RefConnect',
    title: 'RefConnect - Direct Referral Portal',
    description: 'Core Value Proposition: Direct job referrals without connection barriers, powered by credits and rewards',
    image: '/images/ref+connect.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    // liveUrl: 'https://growtherapy.com',
    category: 'web'
  },
  {
    id: 'Iphone 15 Website',
    title: 'Iphone 15 Website',
    description: 'This is a clone of Apples iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.',
    image: '/images/project-02.jpg',
    technologies: ['React', 'Python', 'Machine Learning', 'MongoDB'],
    // liveUrl: 'https://sagespot.com',
    category: 'web'
  },
  {
    id: 'Film-website',
    title: 'Film-website',
    description: 'This is a web-site You can store your favourite films and can access the films when ever you want and also can store latest movie to watch it later . ',
    image: '/images/project-03.jpg',
    technologies: ['JavaScript', 'CSS3', 'HTML5', 'CMS'],
    // liveUrl: 'https://squarespace.com',
    category: 'web'
  },
  {
    id: 'StudyNotion Ed-Tech Platform',
    title: 'StudyNotion Ed-Tech Platform',
    description: 'StudyNotion is a versatile and intuitive ed-tech platform that enables users to create, consume, and rate educational content. It provides a seamless and interactive learning experience for students while offering a platform for instructors to showcase their expertise and connect with learners worldwide. ',
    image: '/images/project-04.png',
    technologies: ['ReactJS, NodeJS, MongoDB, and ExpressJS'],
    // liveUrl: 'https://seatgeek.com',
    category: 'web'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'uber-eats',
    title: 'Uber Eats',
    subtitle: 'Redesigning the food delivery experience',
    description: 'Re-designing the magic of food to understand the pain points & how to solve them.',
    image: '/images/Uber+Eats.webp',
    metrics: [
      { label: 'User Engagement', value: '+45%' },
      { label: 'Order Completion', value: '+23%' }
    ]
  },
  {
    id: 'paypal',
    title: 'PayPal',
    subtitle: 'Simplifying digital payments',
    description: 'Working with PayPal to create a simplified & more intuitive payment experience.',
    image: '/images/PayPal+Search.webp',
    metrics: [
      { label: 'Transaction Speed', value: '+60%' },
      { label: 'User Satisfaction', value: '4.8/5' }
    ]
  },
  {
    id: 'Uber Kid',
    title: 'Uber Kid',
    subtitle: 'Where Safety Meets Convenience for Families ',
    description: 'Uber Kids Transfer offers safe, reliable, and child‑friendly rides that give parents peace of mind.',
    image: '/images/Uber+kids.png',
    metrics: [
      { label: 'Booking Conversion', value: '10% to 20%' },
      { label: 'User Retention', value: '60% to 80%' }
    ]
  },
  {
    id: 'arattai',
    title: 'Arattai vs WhatsApp',
    subtitle: 'Competing in India’s messaging market',
    description: 'How Arattai can differentiate from WhatsApp and drive adoption with a Made-in-India, privacy-first strategy.',
    image: '/images/Gemini_Generated_Image_x9xpecx9xpecx9xp.png',
    metrics: [
      { label: 'MAU Target', value: '50M in 12 months' },
      { label: 'D30 Retention', value: '>45%' }
    ]
  }
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'fab fa-linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'fab fa-twitter' },
  { name: 'GitHub', url: 'https://github.com', icon: 'fab fa-github' },
  { name: 'Dribbble', url: 'https://dribbble.com', icon: 'fab fa-dribbble' }
];

export const experiences: Experience[] = [
  {
    company: 'Uber Design',
    position: 'Senior Product Manager (UX/UI)',
    duration: 'Present',
    description: 'Leading product design initiatives for Uber\'s core platform'
  },
  {
    company: 'Spotify',
    position: 'Lead Product Manager',
    duration: '2021 - 2023',
    description: 'Managed product strategy and user experience for music discovery features'
  },
  {
    company: 'Spotify',
    position: 'Product Manager (UX/UI)',
    duration: '2019 - 2021',
    description: 'Designed and implemented user interface improvements'
  },
  {
    company: 'Spotify',
    position: 'Associate Product Manager',
    duration: '2017 - 2019',
    description: 'Supported product development and user research initiatives'
  }
];

export const skills: Skill[] = [
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'TypeScript', level: 4, category: 'frontend' },
  { name: 'Node.js', level: 4, category: 'backend' },
  { name: 'Python', level: 3, category: 'backend' },
  { name: 'Figma', level: 5, category: 'design' },
  { name: 'Adobe XD', level: 4, category: 'design' },
  { name: 'Git', level: 5, category: 'tools' },
  { name: 'AWS', level: 3, category: 'tools' }
];
