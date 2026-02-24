import exportedContent from './content/content.json'

import type {
  ContactInfo,
  NavLink,
  ProjectItem,
  ProjectModeOption,
  ServiceItem,
  SkillCategory,
  TechnologyItem,
  TimelineCard,
  TimelineMotif,
} from './types'

const content = exportedContent as typeof exportedContent
const structured = content.structuredContent
const uiCopy = content.uiCopy

function toPublicAssetUrl(assetPath?: string | null) {
  if (!assetPath) return undefined
  if (assetPath.startsWith('/')) return assetPath
  if (assetPath.startsWith('src/assets/')) {
    return `/migration/${assetPath.replace(/^src\/assets\//, '')}`
  }
  if (assetPath.startsWith('public/')) {
    return `/${assetPath.replace(/^public\//, '')}`
  }
  return assetPath
}

function inferTimelineMotif(input: string): TimelineMotif {
  const value = input.toLowerCase()
  if (
    value.includes('simulation') ||
    value.includes('software') ||
    value.includes('developer') ||
    value.includes('backend') ||
    value.includes('intern')
  ) {
    return 'software'
  }
  if (
    value.includes('suspension') ||
    value.includes('steering') ||
    value.includes('chassis') ||
    value.includes('ergonomics')
  ) {
    return 'mechanical'
  }
  if (
    value.includes('robot') ||
    value.includes('electrical') ||
    value.includes('embedded') ||
    value.includes('quadcopter')
  ) {
    return 'electronics'
  }
  return 'hardware'
}

function extractYear(date: string) {
  const match = date.match(/(19|20)\d{2}/g)
  if (!match || match.length === 0) return 'Now'
  return match[match.length - 1]
}

function buildTimelineCards(): TimelineCard[] {
  const experiences: TimelineCard[] = structured.experiences.map((item, index) => ({
    id: `exp-${index}`,
    category: 'experience',
    year: extractYear(item.date),
    date: item.date,
    label: item.title,
    organization: item.company_name,
    location: item.location,
    motif: inferTimelineMotif(`${item.title} ${item.company_name}`),
    blurb: item.points[0] ?? '',
    points: item.points,
    iconSrc: toPublicAssetUrl(item.iconPath),
    iconBg: item.iconBg,
    imageSrc: undefined,
  }))

  const leadership: TimelineCard[] = structured.leadership.map((item, index) => ({
    id: `lead-${index}`,
    category: 'leadership',
    year: extractYear(item.date),
    date: item.date,
    label: item.title,
    organization: item.team_name,
    motif: inferTimelineMotif(`${item.title} ${item.team_name}`),
    blurb: item.points[0] ?? '',
    points: item.points,
    iconSrc: toPublicAssetUrl(item.iconPath),
    iconBg: item.iconBg,
    imageSrc: toPublicAssetUrl(item.imagePath),
  }))

  return [...leadership, ...experiences]
}

function buildProjectHighlights(description: string, tags: string[]) {
  const words = description.split(' ')
  const excerpt = words.slice(0, 16).join(' ')
  return [
    excerpt + (words.length > 16 ? '...' : ''),
    `Stack signals: ${tags.slice(0, 4).join(', ')}`,
  ]
}

export const NAV_LINKS: readonly NavLink[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'timeline', label: 'Timeline', href: '#timeline' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'resume', label: 'Resume', href: '#resume' },
] as const

export const SECTION_IDS = ['hero', ...NAV_LINKS.map((item) => item.id)]

export const SOCIAL_LINKS = {
  github: uiCopy.navbar.socialLinks.github,
  linkedin: uiCopy.navbar.socialLinks.linkedin,
} as const

export const BRAND = {
  name: uiCopy.navbar.brandText,
}

export const HERO_CONTENT = {
  heading: uiCopy.hero.heading,
  highlightedName: uiCopy.hero.highlightedName,
  subheading: uiCopy.hero.subheading,
  heroImageSrc: '/headshot-colour.jpg',
  backgroundImageSrc: toPublicAssetUrl(uiCopy.hero.backgroundImagePath),
}

export const ABOUT_CONTENT = {
  sectionLabel: uiCopy.about.sectionLabel,
  sectionTitle: uiCopy.about.sectionTitle,
  overviewText: uiCopy.about.overviewText,
}

export const SERVICES: ServiceItem[] = structured.services.map((item) => ({
  title: item.title,
  iconSrc: toPublicAssetUrl(item.iconPath),
}))

export const TECHNOLOGIES: TechnologyItem[] = structured.technologies.map((item) => ({
  name: item.name,
  iconSrc: toPublicAssetUrl(item.iconPath),
}))

export const SKILL_CATEGORIES: SkillCategory[] = structured.skills

export const CONTACT_INFO: ContactInfo = {
  email: uiCopy.contact.emailDestination.toEmail,
  formLabels: uiCopy.contact.formLabels,
  placeholders: uiCopy.contact.placeholders,
}

export const RESUME_LINK =
  structured.navLinks.find((link) => link.id === 'resume')?.link ?? '#'

export const TIMELINE_COPY = {
  sectionLabel: `${uiCopy.experience.sectionTitle} + ${uiCopy.leadership.sectionTitle}`,
  title: 'Experience and leadership on one systems timeline.',
  intro:
    'A combined build log of internships, technical leadership, and team roles, with logos and event imagery carried into each timeline card.',
}

export const TIMELINE_CARDS: TimelineCard[] = buildTimelineCards()

export const PROJECTS_COPY = {
  sectionLabel: uiCopy.projects.sectionLabel,
  sectionTitle: uiCopy.projects.sectionTitle,
  introText: uiCopy.projects.introText,
}

export const PROJECTS: ProjectItem[] = structured.projects.map((project, index) => {
  const tags = project.tags.map((tag) => tag.name)
  const status = /wip/i.test(project.name) ? 'WIP' : 'Complete'
  const cleanedTitle = project.name.replace(/\s*\(WIP\)/i, '')
  const primaryLink = project.project_link ?? project.source_code_link
  return {
    id: `${cleanedTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}`,
    title: cleanedTitle,
    category: status === 'WIP' ? 'Work in Progress' : 'Build',
    tags,
    description: project.description,
    imageSrc: toPublicAssetUrl(project.imagePath),
    sourceCodeLink: project.source_code_link,
    projectLink: project.project_link,
    stackSummary: tags.slice(0, 4).join(' / '),
    status,
    highlights: buildProjectHighlights(project.description, tags),
  }
})

export const PROJECT_MODE_OPTIONS: ProjectModeOption[] = [
  {
    id: 'A',
    name: 'Option A',
    title: 'Blueprint Cards',
    description:
      'Inspection-panel expansion language. Each card unfolds into layered technical sheets and measured annotations.',
  },
  {
    id: 'B',
    name: 'Option B',
    title: 'Component Shelf',
    description:
      'Selected project slides into a spotlight bay while supporting projects remain on a clean parts shelf. (Implemented below)',
  },
  {
    id: 'C',
    name: 'Option C',
    title: 'System Map Nodes',
    description:
      'A node-field overview that zooms into modules, preserving the same camera-motion language used in the timeline and hero.',
  },
]

export const RESUME_COPY = {
  sectionLabel: 'Utilities / Resume / Skills / Contact',
  title: 'Resume, skills, and contact without leaving the motion story.',
  blurb:
    'Core links, skill categories, technologies, and direct contact details from the migrated site content are consolidated here.',
}
