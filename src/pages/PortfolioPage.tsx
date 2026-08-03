import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'

export function PortfolioPage() {
  return (
    <div className="page-wrapper">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" className="page-main" tabIndex={-1}>
        <HeroSection />
      </main>
    </div>
  )
}
