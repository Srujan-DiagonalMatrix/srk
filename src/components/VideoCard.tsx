import { useState } from 'react'
import { Play } from 'lucide-react'
import { VideoModal } from './VideoModal'

export type VideoCardProps = {
  title: string
  subtitle: string
  thumbnail: string
  duration: string
  videoUrl: string | null
  size: 'small' | 'medium' | 'large'
  className?: string
}

export function VideoCard({ title, subtitle, thumbnail, duration, videoUrl, size, className = '' }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const unavailable = !videoUrl
  const accessibleTitle = title || 'Introduction video'

  return (
    <>
      <article className={`video-card video-card--${size} ${className}`.trim()}>
        <button
          className="video-card__trigger"
          type="button"
          onClick={() => videoUrl && setIsOpen(true)}
          aria-label={unavailable ? `${accessibleTitle} unavailable` : `Play ${accessibleTitle}`}
          aria-disabled={unavailable}
        >
          <img className="video-card__thumbnail" src={thumbnail} alt="" width="960" height="540" />
          <span className="video-card__overlay" aria-hidden="true" />
          <span className="video-card__play" aria-hidden="true"><Play fill="currentColor" /></span>
          <span className="video-card__duration">{duration}</span>
          {unavailable && <span className="video-card__status">Video coming soon</span>}
        </button>
        {(title || subtitle) && (
          <div className="video-card__copy">
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}
      </article>
      {videoUrl && <VideoModal isOpen={isOpen} onClose={() => setIsOpen(false)} title={accessibleTitle} videoUrl={videoUrl} />}
    </>
  )
}
