import { Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { Brand } from './Brand'

const contactIcons = {
  phone: Phone,
  email: Mail,
  location: MapPin,
  linkedin: Linkedin,
}

export function Footer() {
  const { brand, contact, copyright } = portfolioData.footer

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <Brand {...brand} />

          <address className="site-footer__contacts" aria-label="Contact details">
            {contact.map((item) => {
              const Icon = contactIcons[item.icon]
              const content = (
                <>
                  <Icon aria-hidden="true" />
                  <span>{item.label}</span>
                </>
              )

              return 'href' in item ? (
                <a href={item.href} key={item.label}>
                  {content}
                </a>
              ) : (
                <span className="site-footer__contact" key={item.label}>
                  {content}
                </span>
              )
            })}
          </address>
        </div>

        <div className="site-footer__bottom">
          <small>{copyright}</small>
          <small>Multi-Agent AI Developer &amp; Solution Designer</small>
        </div>
      </div>
    </footer>
  )
}
