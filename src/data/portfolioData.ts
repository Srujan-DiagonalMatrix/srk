import portraitImage from '../assets/portrait/srujan-portrait.webp'
import heroThumbnail from '../assets/thumbnails/hero-introduction.webp'
import heroBackground from '../assets/backgrounds/hero-background.webp'

export const portfolioData = {
  owner: 'Srujan',
  introduction: 'A thoughtful foundation for a personal portfolio.',
  hero: {
    background: heroBackground,
    eyebrow: ['SRUJAN | LEAD MULTI-AGENT AI', 'DEVELOPER & SOLUTION DESIGNER'],
    description:
      'I design and deliver multi-agent AI solutions that streamline operations, reduce manual effort, and create measurable business impact.',
    supportingText:
      'See how I design, build and integrate multi-agent systems that think, decide and act — with real deployment examples.',
    expertise: [
      { highlight: 'Agentic AI', detail: 'Architecture & Orchestration', icon: 'architecture' },
      { highlight: 'Tool Calling,', detail: 'MCP & Enterprise Integration', icon: 'tools' },
      { highlight: 'RAG,', detail: 'Context Engineering & Agent Memory', icon: 'memory' },
      { highlight: 'Production AI Engineering &', detail: 'Cloud Deployment', icon: 'cloud' },
      { highlight: 'AI Evaluation,', detail: 'Guardrails & Reliability', icon: 'reliability' },
      { highlight: 'Observability,', detail: 'Performance & Cost Optimization', icon: 'observability' },
    ],
    actions: [
      { label: 'Book Interview', href: '#contact', variant: 'primary' },
      { label: 'View My Work', href: '#portfolio', variant: 'secondary' },
      { label: 'Download CV', href: '/srujan-cv.pdf', variant: 'text', download: true },
    ],
    video: {
      title: '',
      subtitle: '',
      thumbnail: heroThumbnail,
      duration: '1:28',
      videoUrl: 'https://www.youtube.com/watch?v=3ERbYtUwHE8',
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
      label: 'Book Interview',
      href: '#contact',
    },
  },
} as const
