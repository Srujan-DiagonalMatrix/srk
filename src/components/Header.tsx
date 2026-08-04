import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { ActionLink } from './ActionLink'
import { Brand } from './Brand'

const DESKTOP_MEDIA_QUERY = '(min-width: 68.75rem)'

export function Header() {
  const { brand, cta, navigation } = portfolioData.header
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(
    () => window.location.hash || navigation.find((item) => item.isActive)?.href || navigation[0].href,
  )
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const updateActiveLink = () => setActiveHref(window.location.hash || navigation[0].href)

    window.addEventListener('hashchange', updateActiveLink)
    return () => window.removeEventListener('hashchange', updateActiveLink)
  }, [navigation])

  useEffect(() => {
    const desktopQuery = window.matchMedia(DESKTOP_MEDIA_QUERY)
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false)
    }

    desktopQuery.addEventListener('change', closeAtDesktop)
    return () => desktopQuery.removeEventListener('change', closeAtDesktop)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', dismissOnEscape)
    return () => document.removeEventListener('keydown', dismissOnEscape)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Brand {...brand} />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              className={`nav-link${activeHref === item.href ? ' nav-link--active' : ''}`}
              href={item.href}
              aria-current={activeHref === item.href ? 'page' : undefined}
              onClick={() => setActiveHref(item.href)}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <ActionLink className="header-cta" href={cta.href}>
            <span>{cta.label}</span>
            <ArrowRight aria-hidden="true" size={17} strokeWidth={2.25} />
          </ActionLink>
          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${isMenuOpen ? ' mobile-nav--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-nav__inner">
          {navigation.map((item) => (
            <a
              className={`mobile-nav__link${activeHref === item.href ? ' mobile-nav__link--active' : ''}`}
              href={item.href}
              aria-current={activeHref === item.href ? 'page' : undefined}
              tabIndex={isMenuOpen ? undefined : -1}
              onClick={() => {
                setActiveHref(item.href)
                closeMenu()
              }}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
          <ActionLink className="mobile-nav__cta" href={cta.href}>
            <span>{cta.label}</span>
            <ArrowRight aria-hidden="true" size={18} />
          </ActionLink>
        </div>
      </nav>
    </header>
  )
}
