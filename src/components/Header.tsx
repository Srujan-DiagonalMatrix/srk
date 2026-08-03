import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { ActionLink } from './ActionLink'
import { Brand } from './Brand'

const DESKTOP_MEDIA_QUERY = '(min-width: 68.75rem)'

export function Header() {
  const { brand, cta, navigation } = portfolioData.header
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

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
              className={`nav-link${item.isActive ? ' nav-link--active' : ''}`}
              href={item.href}
              aria-current={item.isActive ? 'page' : undefined}
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
              className={`mobile-nav__link${item.isActive ? ' mobile-nav__link--active' : ''}`}
              href={item.href}
              aria-current={item.isActive ? 'page' : undefined}
              tabIndex={isMenuOpen ? undefined : -1}
              onClick={closeMenu}
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
