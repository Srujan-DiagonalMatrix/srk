import { ArrowRight, Download, Mail } from 'lucide-react'
import { ActionLink } from './ActionLink'

export function ContactCallout() {
  return (
    <section className="contact-callout" id="contact" aria-labelledby="contact-callout-title">
      <div className="contact-callout__inner">
        <h2 id="contact-callout-title">Let&apos;s build something impactful</h2>
        <p>Have a project in mind? Let&apos;s discuss how AI can transform your business.</p>

        <div className="contact-callout__actions" aria-label="Contact and portfolio actions">
          <ActionLink className="contact-callout__action contact-callout__action--primary" href="mailto:hello@srujan.dev?subject=Free%20AI%20project%20consultation">
            Book a Free Call <ArrowRight aria-hidden="true" />
          </ActionLink>
          <ActionLink className="contact-callout__action" href="#portfolio">
            View My Work
          </ActionLink>
          <a className="contact-callout__action" href="/srujan-cv.pdf" download>
            <Download aria-hidden="true" /> Download CV
          </a>
          <ActionLink className="contact-callout__action" href="mailto:hello@srujan.dev">
            Email Me <Mail aria-hidden="true" />
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
