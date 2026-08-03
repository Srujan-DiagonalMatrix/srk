import portraitImage from '../assets/portrait/srujan-portrait.webp'
import heroThumbnail from '../assets/thumbnails/hero-introduction.webp'
import heroBackground from '../assets/backgrounds/hero-background.webp'

const architectureVideoId = 'FwOTs4UxQS4'
const architectureThumbnail =
  'https://raw.githubusercontent.com/Srujan-DiagonalMatrix/srk/codex/create-horizontal-layout-for-video-thumbnails/src/assets/thumbnails/Thumbnail2.jpg'
const architectureVideoUrl = `https://www.youtube.com/watch?v=${architectureVideoId}`
const systemDemoThumbnail =
  'https://raw.githubusercontent.com/Srujan-DiagonalMatrix/srk/codex/create-horizontal-layout-for-video-thumbnails/src/assets/thumbnails/Thumbnail3.jpg'
const systemDemoVideoUrl =
  'https://www.youtube.com/watch?v=d0wUM8hIaxE&pp=ygUQQUkgQWdlbnQgdHJhaWxlcg%3D%3D&sttick=1'
const orchestrationThumbnail =
  'https://raw.githubusercontent.com/Srujan-DiagonalMatrix/srk/codex/create-horizontal-layout-for-video-thumbnails/src/assets/thumbnails/Thumbnail1.jpg'
const orchestrationVideoUrl = 'https://www.youtube.com/watch?v=3ERbYtUwHE8'

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
  heroNavigation: [
    {
      title: 'Can Srujan design & build complex AI systems?',
      description: 'See my real projects and architecture',
      href: '#portfolio',
    },
    {
      title: 'How does Srujan solve business problems?',
      description: 'From idea to impact — my approach',
      href: '#process',
    },
    {
      title: 'What results can Srujan deliver?',
      description: 'Outcomes, metrics and business value',
      href: '#results',
    },
    {
      title: 'Why trust Srujan with your AI projects?',
      description: 'Skills, process and client satisfaction',
      href: '#about',
    },
  ],
  portfolioShowcase: {
    title: 'Can Srujan design & build complex AI systems?',
    description:
      'I architect scalable multi-agent systems that plan, collaborate, and execute tasks across tools and APIs. My solutions are built for reliability, observability, and scale.',
    videos: [
      {
        title: 'Multi-Agent Architecture',
        subtitle: '',
        thumbnail: architectureThumbnail,
        duration: '1:49',
        videoUrl: architectureVideoUrl,
        size: 'large',
      },
      {
        title: 'Multi-Agent System Demo',
        subtitle: '',
        thumbnail: systemDemoThumbnail,
        duration: '0:58',
        videoUrl: systemDemoVideoUrl,
        size: 'small',
      },
      {
        title: 'Workflow Orchestration',
        subtitle: '',
        thumbnail: orchestrationThumbnail,
        duration: '0:46',
        videoUrl: orchestrationVideoUrl,
        size: 'small',
      },
    ],
    proofPoints: [
      { label: 'Live system demos and walkthroughs', icon: 'demos' },
      { label: 'Architecture diagrams & documentation', icon: 'documentation' },
      { label: 'Production-ready integrations', icon: 'integrations' },
      { label: 'Scalable, modular & future-proof', icon: 'scalable' },
    ],
  },
  problemSolvingShowcase: {
    title: 'How does Srujan solve business problems?',
    description:
      'I start by understanding your real problem, then design AI solutions that remove manual work, reduce errors, and improve speed.',
    detail:
      'My process is collaborative, transparent, and focused on measurable impact.',
    proofTitle: 'How I Solve Problems',
    videos: [
      {
        title: 'Business Problem Discovery',
        subtitle: '',
        thumbnail: architectureThumbnail,
        duration: '1:49',
        videoUrl: architectureVideoUrl,
        size: 'large',
      },
      {
        title: 'Problem Discovery Call',
        subtitle: '',
        thumbnail: systemDemoThumbnail,
        duration: '0:58',
        videoUrl: systemDemoVideoUrl,
        size: 'small',
      },
      {
        title: 'Solution Design Walkthrough',
        subtitle: '',
        thumbnail: orchestrationThumbnail,
        duration: '0:46',
        videoUrl: orchestrationVideoUrl,
        size: 'small',
      },
    ],
    proofPoints: [
      { label: 'Deep dive into your business workflows', icon: 'discovery' },
      { label: 'Identify automation & AI opportunities', icon: 'opportunities' },
      { label: 'Design tailored multi-agent solutions', icon: 'solutions' },
      { label: 'Iterate, test & continuously improve', icon: 'iterate' },
    ],
  },
  resultsShowcase: {
    title: 'What results can Srujan deliver?',
    description:
      'I start by understanding your real problem, then design AI solutions that remove manual work, reduce errors, and improve speed.',
    detail:
      'My process is collaborative, transparent, and focused on measurable impact.',
    proofTitle: 'How I Solve Problems',
    videos: [
      {
        title: 'Business Problem Discovery',
        subtitle: '',
        thumbnail: architectureThumbnail,
        duration: '1:49',
        videoUrl: architectureVideoUrl,
        size: 'large',
      },
      {
        title: 'Problem Discovery Call',
        subtitle: '',
        thumbnail: systemDemoThumbnail,
        duration: '0:58',
        videoUrl: systemDemoVideoUrl,
        size: 'small',
      },
      {
        title: 'Solution Design Walkthrough',
        subtitle: '',
        thumbnail: orchestrationThumbnail,
        duration: '0:46',
        videoUrl: orchestrationVideoUrl,
        size: 'small',
      },
    ],
    proofPoints: [
      { label: 'Deep dive into your business workflows', icon: 'discovery' },
      { label: 'Identify automation & AI opportunities', icon: 'opportunities' },
      { label: 'Design tailored multi-agent solutions', icon: 'solutions' },
      { label: 'Iterate, test & continuously improve', icon: 'iterate' },
    ],
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
