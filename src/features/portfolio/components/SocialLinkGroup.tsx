import type { CSSProperties } from 'react'

import { Github, Linkedin } from 'lucide-react'

import { SOCIAL_LINKS } from '../data'

export function SocialLinkGroup({
  variant,
  style,
  ariaHidden,
}: {
  variant: 'hero' | 'dock'
  style?: CSSProperties
  ariaHidden?: boolean
}) {
  const wrapperClass = variant === 'dock' ? 'docked-socials' : 'hero-cta-group'
  const linkClass = variant === 'dock' ? 'utility-pill' : 'hero-cta'
  const iconClass = variant === 'dock' ? 'h-3.5 w-3.5' : 'h-4 w-4'

  return (
    <div className={wrapperClass} style={style} aria-hidden={ariaHidden}>
      <a className={linkClass} href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
        <Github className={iconClass} />
        <span>GitHub</span>
      </a>
      <a className={linkClass} href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
        <Linkedin className={iconClass} />
        <span>LinkedIn</span>
      </a>
    </div>
  )
}
