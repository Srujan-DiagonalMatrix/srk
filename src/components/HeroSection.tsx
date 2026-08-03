import { ArrowRight, Download, FileText } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { VideoCard } from './VideoCard'

export function HeroSection() {
  const { actions, description, expertise, portrait, supportingText, title, video } = portfolioData.hero

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            <span><strong>Srujan |</strong> {title[0].replace('Srujan | ', '')}</span>
            <span>{title[1]}</span>
            <span>{title[2]}</span>
          </h1>
          <p className="hero__description">{description}</p>
          <VideoCard {...video} />
          <p className="hero__supporting">{supportingText}</p>
          <ul className="hero__expertise" aria-label="Areas of expertise">
            {expertise.map((item) => (
              <li key={item.label}>
                <img src={item.icon} alt="" width="256" height="256" />
                <span>{item.label}</span>
              </li>
            ))}
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
        <div className="hero__portrait-wrap">
          <img className="hero__portrait" src={portrait.src} alt={portrait.alt} width={portrait.width} height={portrait.height} loading="eager" fetchPriority="high" />
        </div>
      </div>
    </section>
  )
}
