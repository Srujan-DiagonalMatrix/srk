import { useEffect, useRef, useState, type FormEvent } from 'react'
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
  const [isInShowcase, setIsInShowcase] = useState(false)
  const dialogRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const updatePosition = () => {
      const start = document.querySelector('#portfolio')
      const end = document.querySelector('#leadership-skills')
      if (!start || !end) return

      const headerOffset = 72
      setIsInShowcase(start.getBoundingClientRect().top <= headerOffset && end.getBoundingClientRect().bottom > headerOffset)
    }

    const openFromContactLink = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href="#contact"]')
      if (!link) return
      event.preventDefault()
      setIsOpen(true)
      setIsInShowcase(true)
      document.querySelector('#portfolio')?.scrollIntoView()
    }

    updatePosition()
    window.addEventListener('scroll', updatePosition, { passive: true })
    window.addEventListener('resize', updatePosition)
    document.addEventListener('click', openFromContactLink)
    return () => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
      document.removeEventListener('click', openFromContactLink)
    }
  }, [])

  useEffect(() => {
    if (!isOpen || !isInShowcase) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isInShowcase, isOpen])

  const submitForm = (event: FormEvent<HTMLFormElement>) => event.preventDefault()

  if (!isOpen || !isInShowcase) return null

  return (
    <div className="contact-form-overlay" id="contact">
      <button className="contact-form-overlay__backdrop" type="button" aria-label="Close contact form" onClick={() => setIsOpen(false)} />
      <aside ref={dialogRef} className="contact-form-panel" role="dialog" aria-modal="true" aria-labelledby="contact-form-title">
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
