import { Header } from '../components/Header'
import { portfolioData } from '../data/portfolioData'

export function PortfolioPage() {
  return (
    <div className="page-wrapper">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" className="page-main" tabIndex={-1}>
        <div className="content-container">
          <h1 id="home">{portfolioData.owner}</h1>
          <p>{portfolioData.introduction}</p>
        </div>
      </main>
    </div>
  )
}
