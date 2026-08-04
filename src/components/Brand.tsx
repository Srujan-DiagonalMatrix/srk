import srujanLogo from '../assets/logo_srujan.webp'

type BrandProps = {
  href: string
  name: string
}

export function Brand({ href, name }: BrandProps) {
  return (
    <a className="brand" href={href} aria-label={`${name} home`}>
      <img className="brand__logo" src={srujanLogo} alt="" />
    </a>
  )
}
