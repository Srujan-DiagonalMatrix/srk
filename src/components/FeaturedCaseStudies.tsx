import { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import thumbnail2 from '../assets/Thumbnail2.jpg'
import thumbnail3 from '../assets/Thumbnail3.jpg'
import thumbnail4 from '../assets/Thumbnail4.jpg'
import thumbnail5 from '../assets/Thumbnail5.jpg'
import { VideoModal } from './VideoModal'

const caseStudies = [
  {
    title: 'AI Support Assistant Platform',
    description:
      'Multi-agent system that resolves customer queries automatically and escalates complex issues to human agents.',
    videoUrl: 'https://www.youtube.com/watch?v=FwOTs4UxQS4',
    thumbnail: thumbnail2,
    duration: '1:35',
  },
  {
    title: 'Data Analysis Automation',
    description:
      'Automated data collection, analysis and report generation pipeline saving 20+ hours of manual work weekly.',
    videoUrl:
      'https://www.youtube.com/watch?v=d0wUM8hIaxE&pp=ygUQQUkgQWdlbnQgdHJhaWxlcg%3D%3D&sttick=1',
    thumbnail: thumbnail3,
    duration: '1:29',
  },
  {
    title: 'Invoice processing system',
    description:
      'End-to-end invoice processing automation with data extraction, validation and system integration.',
    videoUrl: 'https://www.youtube.com/watch?v=pHRZm2BwNQc',
    thumbnail: thumbnail4,
    duration: '1:41',
  },
  {
    title: 'Banking Innovation',
    description:
      'An intelligent banking platform that streamlines customer journeys, strengthens decisions and accelerates digital innovation.',
    videoUrl: 'https://www.youtube.com/watch?v=m-N8U5MjSyI',
    thumbnail: thumbnail5,
    duration: '1:32',
  },
] as const

export function FeaturedCaseStudies() {
  const [activeStudy, setActiveStudy] = useState<(typeof caseStudies)[number] | null>(null)

  return (
    <section className="featured-case-studies" id="use-cases" aria-labelledby="case-studies-title">
      <div className="content-container">
        <h2 id="case-studies-title">Featured Case Studies</h2>
        <div className="featured-case-studies__grid">
          {caseStudies.map((study) => (
            <article className="case-study" key={study.title}>
              <button
                className="case-study__video"
                type="button"
                onClick={() => setActiveStudy(study)}
                aria-label={`Play ${study.title}`}
              >
                <img src={study.thumbnail} alt="" width="640" height="360" />
                <span className="case-study__shade" aria-hidden="true" />
                <span className="case-study__play" aria-hidden="true"><Play fill="currentColor" /></span>
                <span className="case-study__duration" aria-hidden="true">{study.duration}</span>
              </button>
              <div className="case-study__content">
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <button className="case-study__link" type="button" onClick={() => setActiveStudy(study)}>
                  View Case Study <ArrowRight aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeStudy && (
        <VideoModal
          isOpen
          onClose={() => setActiveStudy(null)}
          title={activeStudy.title}
          videoUrl={activeStudy.videoUrl}
        />
      )}
    </section>
  )
}
