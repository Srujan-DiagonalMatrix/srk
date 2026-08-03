import { ArrowRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export function HeroNavigation() {
  return (
    <nav className="hero-navigation" aria-label="Explore Srujan's portfolio">
      <div className="hero-navigation__inner">
        {portfolioData.heroNavigation.map((item, index) => (
          <a className="hero-navigation__card" href={item.href} key={item.title}>
            <span className="hero-navigation__number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="hero-navigation__content">
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </span>
            <ArrowRight className="hero-navigation__arrow" aria-hidden="true" />
          </a>
        ))}
      </div>
    </nav>
  )
}
