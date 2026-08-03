import type { ReactNode } from 'react'

type ActionLinkProps = {
  children: ReactNode
  className?: string
  href: string
}

export function ActionLink({ children, className = '', href }: ActionLinkProps) {
  return (
    <a className={`action-link ${className}`.trim()} href={href}>
      {children}
    </a>
  )
}
