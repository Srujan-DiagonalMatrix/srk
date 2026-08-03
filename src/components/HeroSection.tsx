import { ArrowRight, BrainCircuit, ChartNoAxesCombined, CloudUpload, Download, FileText, Network, ShieldCheck, Wrench } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { VideoCard } from './VideoCard'

export function HeroSection() {
  const { actions, background, expertise, eyebrow, supportingText, video } = portfolioData.hero
  const expertiseIcons = {
    architecture: Network,
    tools: Wrench,
    memory: BrainCircuit,
    cloud: CloudUpload,
    reliability: ShieldCheck,
    observability: ChartNoAxesCombined,
  }

  return (
    <section className="hero" id="home" aria-labelledby="hero-title" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__eyebrow">
            <span><strong>SRUJAN |</strong>{eyebrow[0].replace('SRUJAN |', '')}</span>
            <span>{eyebrow[1]}</span>
          </h1>
        </div>
        <div className="hero__details">
          <ul className="hero__expertise" aria-label="Areas of expertise">
            {expertise.map((item) => {
              const Icon = expertiseIcons[item.icon]

              return (
                <li key={item.highlight}>
                  <span className="hero__expertise-icon"><Icon aria-hidden="true" /></span>
                  <span className="hero__expertise-copy">
                    <strong>{item.highlight}</strong>
                    <span>{item.detail}</span>
                  </span>
                </li>
              )
            })}
          </ul>
          <div className="hero__actions">
            {actions.map((action) => (
              <a className={`hero__cta hero__cta--${action.variant}`} href={action.href} download={'download' in action ? action.download : undefined} key={action.label}>
                {action.variant === 'text' && <FileText aria-hidden="true" />}
                {action.label}
                {action.variant === 'primary' && <ArrowRight aria-hidden="true" />}
                {action.variant === 'text' && <Download aria-hidden="true" />}
              </a>
            ))}
          </div>
        </div>
        <div className="hero__media">
          <VideoCard {...video} />
          <p className="hero__supporting">{supportingText}</p>
        </div>
      </div>
    </section>
  )
}
