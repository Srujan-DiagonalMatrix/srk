import { useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'

type VideoModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  videoUrl: string
}

const FOCUSABLE = 'button, [href], iframe, video, [tabindex]:not([tabindex="-1"])'

function getYouTubeEmbedUrl(videoUrl: string) {
  const url = new URL(videoUrl)
  const videoId = url.hostname === 'youtu.be'
    ? url.pathname.slice(1)
    : url.searchParams.get('v')

  return videoId
    ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`
    : null
}

export function VideoModal({ isOpen, onClose, title, videoUrl }: VideoModalProps) {
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isOpen) return
    previouslyFocusedRef.current = document.activeElement as HTMLElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.querySelector<HTMLButtonElement>('button')?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocusedRef.current?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const youtubeEmbedUrl = getYouTubeEmbedUrl(videoUrl)

  return (
    <div className="video-modal" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <div ref={dialogRef} className="video-modal__dialog" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="video-modal__header">
          <h2 id={titleId}>{title}</h2>
          <button type="button" className="video-modal__close" onClick={onClose} aria-label="Close video">
            <X aria-hidden="true" />
          </button>
        </div>
        <div className="video-modal__player">
          {youtubeEmbedUrl ? (
            <iframe
              src={youtubeEmbedUrl}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video src={videoUrl} controls autoPlay aria-label={title} />
          )}
        </div>
      </div>
    </div>
  )
}
