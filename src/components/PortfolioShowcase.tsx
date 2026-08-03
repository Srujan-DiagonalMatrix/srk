import {
  ArrowRight,
  Boxes,
  FileCheck2,
  Lightbulb,
  Presentation,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { VideoCard } from './VideoCard'

const proofIcons = {
  demos: Presentation,
  documentation: FileCheck2,
  integrations: Boxes,
  scalable: ShieldCheck,
  discovery: SearchCheck,
  opportunities: Lightbulb,
  solutions: Workflow,
  iterate: RefreshCw,
}

type ShowcaseData = typeof portfolioData.portfolioShowcase | typeof portfolioData.problemSolvingShowcase

type ShowcaseSectionProps = {
  data: ShowcaseData
  id: string
  number: string
}

function ShowcaseSection({ data, id, number }: ShowcaseSectionProps) {
  const { description, proofPoints, title, videos } = data
  const detail = 'detail' in data
    ? data.detail
    : 'From agent design to orchestration and integrations, I handle the full lifecycle.'
  const proofTitle = 'proofTitle' in data ? data.proofTitle : 'Proof You Can Verify'
  const headingId = `${id}-title`
  const proofId = `${id}-proof-title`

  return (
    <section className="portfolio-showcase" id={id} aria-labelledby={headingId}>
      <div className="content-container">
        <div className="portfolio-showcase__heading">
          <span aria-hidden="true">{number}</span>
          <h2 id={headingId}>{title}</h2>
        </div>

        <div className="portfolio-showcase__layout">
          <div className="portfolio-showcase__feature">
            <VideoCard {...videos[0]} />
            <p>{description}</p>
            <p className="portfolio-showcase__detail">{detail}</p>
            <a className="portfolio-showcase__link" href="#use-cases">
              Read more <ArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className="portfolio-showcase__videos" aria-label="More project videos">
            {videos.slice(1).map((video) => <VideoCard {...video} key={video.title} />)}
          </div>

          <aside className="portfolio-showcase__proof" aria-labelledby={proofId}>
            <h3 id={proofId}>{proofTitle}</h3>
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

export function PortfolioShowcase() {
  return (
    <>
      <ShowcaseSection data={portfolioData.portfolioShowcase} id="portfolio" number="01" />
      <ShowcaseSection data={portfolioData.problemSolvingShowcase} id="process" number="02" />
    </>
  )
}
