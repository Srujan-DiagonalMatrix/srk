type BrandProps = {
  href: string
  name: string
  logoSrc?: string
}

function NetworkMark() {
  return (
    <svg className="brand__mark" viewBox="0 0 42 42" aria-hidden="true">
      <path d="M9 28 17 10l16 7-4 16-20-5Z" />
      <path d="m9 28 8-18 12 23m4-16L9 28m8-18 16 7" />
      <circle cx="17" cy="10" r="3" />
      <circle cx="33" cy="17" r="3" />
      <circle cx="29" cy="33" r="3" />
      <circle cx="9" cy="28" r="3" />
      <circle cx="21" cy="22" r="2.5" />
    </svg>
  )
}

export function Brand({ href, name, logoSrc }: BrandProps) {
  return (
    <a className="brand" href={href} aria-label={`${name} home`}>
      {logoSrc ? <img className="brand__mark" src={logoSrc} alt="" /> : <NetworkMark />}
      <span className="brand__wordmark">{name}</span>
    </a>
  )
}
