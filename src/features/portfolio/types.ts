export type ThemeMode = 'light' | 'dark'

export type ProjectViewMode = 'A' | 'B' | 'C'

export type TimelineMotif = 'hardware' | 'mechanical' | 'software' | 'electronics'

export type NavLink = {
  id: string
  label: string
  href: string
  external?: boolean
}

export type ServiceItem = {
  title: string
  iconSrc?: string
}

export type TechnologyItem = {
  name: string
  iconSrc?: string
}

export type SkillCategory = {
  category: string
  skillsList: string[]
}

export type ContactInfo = {
  email: string
  formLabels: string[]
  placeholders: {
    name: string
    email: string
    message: string
  }
}

export type TimelineCard = {
  id: string
  category: 'experience' | 'leadership'
  year: string
  date: string
  label: string
  organization: string
  location?: string
  motif: TimelineMotif
  blurb: string
  points: string[]
  iconSrc?: string
  iconBg?: string
  imageSrc?: string
}

export type ProjectItem = {
  id: string
  title: string
  category: string
  tags: string[]
  description: string
  imageSrc?: string
  sourceCodeLink?: string
  projectLink?: string
  stackSummary?: string
  status?: string
  highlights: string[]
}

export type ProjectModeOption = {
  id: ProjectViewMode
  name: string
  title: string
  description: string
}
