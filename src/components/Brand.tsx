type BrandProps = {
  href: string
  name: string
}

function SrujanLogo() {
  return (
    <svg className="brand__logo" viewBox="0 0 178 54" aria-hidden="true">
      <g className="brand__emblem">
        <ellipse cx="27" cy="24" rx="22" ry="16" pathLength="100" />
        <path className="brand__orbit" d="M8 29c5 11 24 15 38 7" />
        <path className="brand__swoosh" d="M13 27c9-2 23-8 37-13-9 6-17 12-25 17Z" />
      </g>
      <text className="brand__name" x="57" y="31">Srujan</text>
      <text className="brand__surname" x="59" y="44">A L I K A N T I</text>
    </svg>
  )
}

export function Brand({ href, name }: BrandProps) {
  return (
    <a className="brand" href={href} aria-label={`${name} home`}>
      <SrujanLogo />
    </a>
  )
}
