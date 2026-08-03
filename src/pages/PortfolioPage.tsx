import { portfolioData } from '../data/portfolioData'

export function PortfolioPage() {
  return (
    <div className="page-wrapper">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <main id="main-content" className="page-main">
        <div className="content-container">
          <h1>{portfolioData.owner}</h1>
          <p>{portfolioData.introduction}</p>
        </div>
      </main>
    </div>
  )
}
