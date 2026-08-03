import { ArrowRight, Boxes, FileCheck2, Presentation, ShieldCheck } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { VideoCard } from './VideoCard'

const proofIcons = {
  demos: Presentation,
  documentation: FileCheck2,
  integrations: Boxes,
  scalable: ShieldCheck,
}

export function PortfolioShowcase() {
  const { description, proofPoints, title, videos } = portfolioData.portfolioShowcase

  return (
    <section className="portfolio-showcase" id="portfolio" aria-labelledby="portfolio-showcase-title">
      <div className="content-container">
        <div className="portfolio-showcase__heading">
          <span aria-hidden="true">01</span>
          <h2 id="portfolio-showcase-title">{title}</h2>
        </div>

        <div className="portfolio-showcase__layout">
          <div className="portfolio-showcase__feature">
            <VideoCard {...videos[0]} />
            <p>{description}</p>
            <p className="portfolio-showcase__detail">
              From agent design to orchestration and integrations, I handle the full lifecycle.
            </p>
            <a className="portfolio-showcase__link" href="#use-cases">
              Read more <ArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className="portfolio-showcase__videos" aria-label="More project videos">
            {videos.slice(1).map((video) => <VideoCard {...video} key={video.title} />)}
          </div>

          <aside className="portfolio-showcase__proof" aria-labelledby="proof-title">
            <h3 id="proof-title">Proof You Can Verify</h3>
            <ul>
              {proofPoints.map((point) => {
                const Icon = proofIcons[point.icon]
                return (
                  <li key={point.label}>
                    <span className="portfolio-showcase__proof-icon"><Icon aria-hidden="true" /></span>
                    <span>{point.label}</span>
                  </li>
                )
              })}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
