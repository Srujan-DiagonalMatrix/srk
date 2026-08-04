import { useEffect, useState, type CSSProperties, type FormEvent } from 'react'
import {
  BriefcaseBusiness,
  ChevronDown,
  FileText,
  Globe2,
  LockKeyhole,
  Mail,
  Phone,
  Send,
  UserRound,
  X,
} from 'lucide-react'

const countries = ['Australia', 'Canada', 'India', 'Singapore', 'United Kingdom', 'United States']

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(true)
  const [panelLeft, setPanelLeft] = useState<number>()

  useEffect(() => {
    const alignWithContent = () => {
      const contentEdge = document.querySelector('.portfolio-showcase__proof')?.getBoundingClientRect().right
      if (contentEdge) setPanelLeft(contentEdge + 24)
    }

    const openFromContactLink = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href="#contact"]')
      if (!link) return
      event.preventDefault()
      setIsOpen(true)
    }

    alignWithContent()
    window.addEventListener('resize', alignWithContent)
    document.addEventListener('click', openFromContactLink)
    return () => {
      window.removeEventListener('resize', alignWithContent)
      document.removeEventListener('click', openFromContactLink)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  const submitForm = (event: FormEvent<HTMLFormElement>) => event.preventDefault()

  if (!isOpen) return null

  const positionStyle = panelLeft
    ? ({ '--contact-panel-left': `${panelLeft}px` } as CSSProperties)
    : undefined

  return (
    <div className="contact-form-overlay" id="contact" style={positionStyle}>
      <aside className="contact-form-panel" aria-labelledby="contact-form-title">
        <button className="contact-form-panel__close" type="button" aria-label="Close contact form" onClick={() => setIsOpen(false)}>
          <X aria-hidden="true" />
        </button>
        <h2 id="contact-form-title">Let's Start a Conversation</h2>
        <p>Share a few details and we'll get back to you.</p>

        <form onSubmit={submitForm}>
          <label>
            <span>First name <b aria-hidden="true">*</b></span>
            <span className="contact-form-panel__control"><UserRound aria-hidden="true" /><input name="firstName" placeholder="First name" autoComplete="given-name" required /></span>
          </label>
          <label>
            <span>Last name <b aria-hidden="true">*</b></span>
            <span className="contact-form-panel__control"><UserRound aria-hidden="true" /><input name="lastName" placeholder="Last name" autoComplete="family-name" required /></span>
          </label>
          <label>
            <span>Contact email <b aria-hidden="true">*</b></span>
            <span className="contact-form-panel__control"><Mail aria-hidden="true" /><input name="email" type="email" placeholder="Email address" autoComplete="email" required /></span>
          </label>
          <label>
            <span>Contact phone number <b aria-hidden="true">*</b></span>
            <span className="contact-form-panel__control"><Phone aria-hidden="true" /><input name="phone" type="tel" placeholder="Phone number" autoComplete="tel" required /></span>
          </label>
          <label>
            <span>Your role / designation <b aria-hidden="true">*</b></span>
            <span className="contact-form-panel__control"><BriefcaseBusiness aria-hidden="true" /><input name="role" placeholder="Your role or designation" autoComplete="organization-title" required /></span>
          </label>
          <label>
            <span>Country <b aria-hidden="true">*</b></span>
            <span className="contact-form-panel__control contact-form-panel__select"><Globe2 aria-hidden="true" /><select name="country" defaultValue="" required><option value="" disabled>Select your country</option>{countries.map((country) => <option key={country}>{country}</option>)}</select><ChevronDown aria-hidden="true" /></span>
          </label>
          <label>
            <span>Project requirements brief <b aria-hidden="true">*</b></span>
            <span className="contact-form-panel__control contact-form-panel__textarea"><FileText aria-hidden="true" /><textarea name="requirements" placeholder="Briefly describe your project..." required /></span>
          </label>
          <button className="contact-form-panel__submit" type="submit"><Send aria-hidden="true" />SUBMIT REQUEST</button>
        </form>

        <div className="contact-form-panel__privacy"><LockKeyhole aria-hidden="true" /><span>Your information is secure and will only be used to contact you about your project.</span></div>
      </aside>
    </div>
  )
}
