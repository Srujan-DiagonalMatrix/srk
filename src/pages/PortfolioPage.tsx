import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeroNavigation } from '../components/HeroNavigation'
import { HeroSection } from '../components/HeroSection'
import { PortfolioShowcase } from '../components/PortfolioShowcase'

export function PortfolioPage() {
  return (
    <div className="page-wrapper">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" className="page-main" tabIndex={-1}>
        <HeroSection />
        <HeroNavigation />
        <PortfolioShowcase />
      </main>
      <Footer />
    </div>
  )
}
