import { ArrowRight, Check, Download, FileText } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { VideoCard } from './VideoCard'

export function HeroSection() {
  const { actions, background, description, expertise, eyebrow, headline, supportingText, video } = portfolioData.hero

  return (
    <section className="hero" id="home" aria-labelledby="hero-title" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow"><strong>SRUJAN |</strong>{eyebrow.replace('SRUJAN |', '')}</p>
          <h1 id="hero-title" className="hero__title">
            {headline.map((line, lineIndex) => (
              <span key={lineIndex}>
                {line.map((segment) => 'accent' in segment && segment.accent
                  ? <strong key={segment.text}>{segment.text}</strong>
                  : segment.text)}
              </span>
            ))}
          </h1>
          <p className="hero__description">{description}</p>
        </div>
        <div className="hero__details">
          <ul className="hero__expertise" aria-label="Areas of expertise">
            {expertise.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" />
                <span>{item}</span>
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
        <div className="hero__media">
          <VideoCard {...video} />
          <p className="hero__supporting">{supportingText}</p>
        </div>
      </div>
    </section>
  )
}
