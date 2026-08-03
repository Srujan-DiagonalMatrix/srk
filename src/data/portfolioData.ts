import portraitImage from '../assets/portrait/srujan-portrait.webp'
import heroThumbnail from '../assets/thumbnails/hero-introduction.webp'

export const portfolioData = {
  owner: 'Srujan',
  introduction: 'A thoughtful foundation for a personal portfolio.',
  hero: {
    title: ['Srujan | Lead Multi-Agent', 'AI Developer &', 'Solution Designer'],
    description:
      'I build intelligent multi-agent systems that automate complex workflows, reduce costs, and deliver measurable results.',
    supportingText:
      'See how I design, build and integrate multi-agent systems that think, decide and act — with real deployment examples.',
    expertise: [
      'Multi-Agent AI Architecture',
      'End-to-End Automation',
      'System Design & Integration',
      'Problem Solving & Scalability',
    ],
    actions: [
      { label: 'Book a Free Call', href: '#contact', variant: 'primary' },
      { label: 'View My Work', href: '#portfolio', variant: 'secondary' },
      { label: 'Download CV', href: '/srujan-cv.pdf', variant: 'text', download: true },
    ],
    video: {
      title: '',
      subtitle: '',
      thumbnail: heroThumbnail,
      duration: '1:28',
      videoUrl: null,
      size: 'large',
    },
    portrait: {
      src: portraitImage,
      alt: 'Srujan, a multi-agent AI developer and solution designer',
      width: 800,
      height: 1000,
    },
  },
  header: {
    brand: {
      name: 'Srujan',
      href: '#home',
    },
    navigation: [
      { label: 'Home', href: '#home', isActive: true },
      { label: 'Portfolio', href: '#portfolio', isActive: false },
      { label: 'Skills', href: '#skills', isActive: false },
      { label: 'Use Cases', href: '#use-cases', isActive: false },
      { label: 'Process', href: '#process', isActive: false },
      { label: 'Results', href: '#results', isActive: false },
      { label: 'About Me', href: '#about', isActive: false },
    ],
    cta: {
      label: 'Let’s Automate',
      href: '#contact',
    },
  },
} as const
