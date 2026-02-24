import {
  type CSSProperties,
  type RefObject,
  startTransition,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react'

import {
  ABOUT_CONTENT,
  BRAND,
  CONTACT_INFO,
  HERO_CONTENT,
  NAV_LINKS,
  PROJECT_MODE_OPTIONS,
  PROJECTS,
  PROJECTS_COPY,
  RESUME_COPY,
  RESUME_LINK,
  SECTION_IDS,
  SERVICES,
  SOCIAL_LINKS,
  SKILL_CATEGORIES,
  TECHNOLOGIES,
  TIMELINE_COPY,
  TIMELINE_CARDS,
} from './data'
import {
  usePrefersReducedMotion,
  useScrollMetrics,
  useThemeMode,
  useViewportWidth,
} from './hooks'
import type { ProjectViewMode } from './types'
import { clamp } from './utils'
import { DetailBlock } from './components/DetailBlock'
import { MotifBadge } from './components/MotifBadge'
import { SectionDots } from './components/SectionDots'
import { SocialLinkGroup } from './components/SocialLinkGroup'

function getSectionEnterProgress(
  ref: RefObject<HTMLElement | null>,
  viewportH: number,
) {
  const rect = ref.current?.getBoundingClientRect()
  if (!rect) return 0
  return clamp((viewportH - rect.top) / Math.max(1, viewportH * 0.7))
}

function SectionTransitionBand({
  label,
  progress,
}: {
  label: string
  progress: number
}) {
  return (
    <div
      className="section-transition-band"
      aria-hidden="true"
      style={{ ['--transition-progress' as string]: `${progress}` }}
    >
      <span className="section-transition-line" />
      <span className="section-transition-dot" />
      <p>{label}</p>
    </div>
  )
}

export function PortfolioPage() {
  const heroRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const timelineRef = useRef<HTMLElement | null>(null)
  const projectsRef = useRef<HTMLElement | null>(null)
  const resumeRef = useRef<HTMLElement | null>(null)
  const timelineTrackRef = useRef<HTMLOListElement | null>(null)
  const timelineViewportRef = useRef<HTMLDivElement | null>(null)

  const [theme, toggleTheme] = useThemeMode()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [projectViewMode, setProjectViewMode] = useState<ProjectViewMode>('B')
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS[1]?.id ?? PROJECTS[0].id)

  const reducedMotion = usePrefersReducedMotion()
  const viewportWidth = useViewportWidth()
  const sectionRefs = useMemo(
    () => [heroRef, aboutRef, timelineRef, projectsRef, resumeRef],
    [],
  )
  const { scrollY, viewportH, viewportW, activeSection } = useScrollMetrics(sectionRefs)

  const isTouchLayout = viewportWidth > 0 && viewportWidth <= 1024

  const heroProgress = clamp(scrollY / Math.max(1, viewportH * 0.95))
  const heroDockProgress = reducedMotion ? 1 : clamp(scrollY / Math.max(1, viewportH * 0.45))
  const heroTextProgress = reducedMotion ? 1 : clamp((scrollY - viewportH * 0.08) / Math.max(1, viewportH * 0.45))
  const introDrive = clamp((scrollY - viewportH * 0.18) / Math.max(1, viewportH * 0.9))

  const heroCameraStyle = {
    '--hero-scale': `${reducedMotion ? 1 : 1.035 - heroProgress * 0.035}`,
    '--hero-lift': `${reducedMotion ? 0 : -heroProgress * 18}px`,
    '--hero-opacity': `${1}`,
  } as CSSProperties

  const heroCtaStyle = {
    '--dock-progress': `${heroDockProgress}`,
  } as CSSProperties
  const heroTextStyle = {
    '--hero-text-progress': `${heroTextProgress}`,
    '--dock-progress': `${heroDockProgress}`,
  } as CSSProperties

  const timelineRect = timelineRef.current?.getBoundingClientRect()
  const timelineProgress = timelineRect
    ? clamp((viewportH - timelineRect.top) / Math.max(1, timelineRect.height - viewportH))
    : 0

  const timelineSizes = useMemo(() => {
    const track = timelineTrackRef.current
    const viewport = timelineViewportRef.current
    return {
      trackWidth: track?.scrollWidth ?? 0,
      viewportWidth: viewport?.clientWidth ?? viewportW,
    }
  }, [viewportW, scrollY])

  const timelineMaxOffset = Math.max(0, timelineSizes.trackWidth - timelineSizes.viewportWidth)
  const timelineOffset = reducedMotion ? 0 : timelineProgress * timelineMaxOffset
  const timelineSnapIndex = Math.round(timelineProgress * (TIMELINE_CARDS.length - 1))
  const timelineSceneStyle = {
    '--scene-drift-x': `${reducedMotion ? 0 : (0.5 - timelineProgress) * 40}px`,
    '--scene-drift-y': `${reducedMotion ? 0 : (1 - timelineProgress) * 10}px`,
    '--scene-scale': `${reducedMotion ? 1 : 0.988 + timelineProgress * 0.012}`,
    '--timeline-offset': `${-timelineOffset}px`,
    '--timeline-progress': `${timelineProgress}`,
  } as CSSProperties

  const selectedProject =
    PROJECTS.find((project) => project.id === selectedProjectId) ?? PROJECTS[0]

  const projectDetailClass = `project-detail-shell mode-${projectViewMode}`
  const activeSectionId = SECTION_IDS[activeSection] ?? 'hero'
  const activeNavSectionId = NAV_LINKS.some((link) => link.id === activeSectionId)
    ? activeSectionId
    : ''
  const aboutEnterProgress = getSectionEnterProgress(aboutRef, viewportH)
  const timelineEnterProgress = getSectionEnterProgress(timelineRef, viewportH)
  const projectsEnterProgress = getSectionEnterProgress(projectsRef, viewportH)
  const resumeEnterProgress = getSectionEnterProgress(resumeRef, viewportH)

  const handleProjectSelect = (id: string) => {
    startTransition(() => setSelectedProjectId(id))
  }

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const target = document.getElementById(id)
    if (!target) return
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <div className="portfolio-page">
      <SectionDots activeIndex={activeSection} sectionIds={SECTION_IDS} onSelect={scrollToSection} />

      <header className="floating-nav-wrap" data-docked={heroDockProgress > 0.65}>
        <nav
          className="floating-nav"
          aria-label="Primary"
          style={heroCtaStyle}
          data-active-section={activeNavSectionId || undefined}
        >
          <button
            className="nav-mobile-toggle"
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          <button
            type="button"
            className={`nav-brand ${activeSectionId === 'hero' ? 'is-active' : ''}`}
            onClick={() => scrollToSection('hero')}
            aria-current={activeSectionId === 'hero' ? 'location' : undefined}
          >
            {BRAND.name}
          </button>

          <ul className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={`nav-link-btn ${activeNavSectionId === link.id ? 'is-active' : ''}`}
                  onClick={() => scrollToSection(link.id)}
                  aria-current={activeNavSectionId === link.id ? 'location' : undefined}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-utilities">
            <div className="nav-island-slot" aria-hidden={heroDockProgress < 0.12}>
              <SocialLinkGroup variant="dock" ariaHidden={heroDockProgress < 0.12} />
            </div>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="hero"
          ref={heroRef}
          className="hero-section snap-section"
          style={heroCameraStyle}
          aria-labelledby="hero-title"
        >
          <div className="hero-grid">
            <div className="hero-stage" aria-label="Hero portrait">
              <div
                className="hero-headshot-shell"
                style={
                  HERO_CONTENT.backgroundImageSrc
                    ? ({ ['--hero-bg-image' as string]: `url(${HERO_CONTENT.backgroundImageSrc})` } as CSSProperties)
                    : undefined
                }
              >
                <div className="hero-headshot-base" />
                <img
                  src={HERO_CONTENT.heroImageSrc}
                  alt={`${BRAND.name} portrait`}
                  className="hero-headshot-image"
                  draggable={false}
                />
              </div>
            </div>

            <div className="hero-copy hero-copy-overlay" style={heroTextStyle}>
              <p className="eyebrow">Mechatronics / Systems / Motion</p>
              <h1 id="hero-title">
                {HERO_CONTENT.heading.replace(HERO_CONTENT.highlightedName, '').trim()}{' '}
                <span>{HERO_CONTENT.highlightedName}</span>
              </h1>
              <p className="hero-lead">{HERO_CONTENT.subheading}</p>
              <SocialLinkGroup variant="hero" style={heroTextStyle} />
              {isTouchLayout ? (
                <p className="hero-touch-hint">Scroll to reveal the intro and dock controls into the nav.</p>
              ) : null}
            </div>
          </div>

          <div className="hero-progress-rail" aria-hidden="true">
            <div className="hero-progress-line">
              <span style={{ transform: `scaleY(${heroProgress})` }} />
            </div>
            <p>{Math.round(heroProgress * 100)}%</p>
          </div>
        </section>

        <section id="about" ref={aboutRef} className="intro-section snap-section" aria-labelledby="about-title">
          <SectionTransitionBand label="Intro" progress={aboutEnterProgress} />
          <div className="section-shell intro-shell" style={{ ['--intro-drive' as string]: `${introDrive}` }}>
            <div className="section-kicker">Checkpoint 01 / {ABOUT_CONTENT.sectionLabel}</div>
            <div className="intro-panel">
              <p className="micro-label">Zoom-out resolve</p>
              <h2 id="about-title">{ABOUT_CONTENT.sectionTitle}</h2>
              <p>{ABOUT_CONTENT.overviewText}</p>
            </div>
            <div className="intro-spec-strip" aria-label="Services">
              {SERVICES.map((item) => (
                <div key={item.title} className="spec-pill">
                  {item.iconSrc ? (
                    <img src={item.iconSrc} alt="" aria-hidden="true" className="spec-pill-icon" />
                  ) : null}
                  <span className="spec-dot" />
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" ref={timelineRef} className="timeline-section snap-section" aria-labelledby="timeline-title">
          <SectionTransitionBand label="Timeline" progress={timelineEnterProgress} />
          <div className="timeline-sticky-shell">
            <div className="section-shell timeline-shell">
              <div className="timeline-header">
                <div>
                  <div className="section-kicker">Checkpoint 02 / Timeline</div>
                  <h2 id="timeline-title">{TIMELINE_COPY.title}</h2>
                  <p>{TIMELINE_COPY.intro}</p>
                </div>
                <div className="timeline-progress-meta" aria-hidden="true">
                  <span>{TIMELINE_CARDS[timelineSnapIndex]?.year}</span>
                  <p>{TIMELINE_CARDS[timelineSnapIndex]?.category ?? 'timeline'}</p>
                </div>
              </div>

              {reducedMotion ? (
                <ol className="timeline-list-reduced">
                  {TIMELINE_CARDS.map((card) => (
                    <li key={card.id} className="timeline-card reduced">
                      <div className="timeline-card-header">
                        <div className="timeline-identity">
                          {card.iconSrc ? (
                            <span
                              className="timeline-logo-chip"
                              style={card.iconBg ? { backgroundColor: card.iconBg } : undefined}
                            >
                              <img src={card.iconSrc} alt="" aria-hidden="true" />
                            </span>
                          ) : null}
                          <div>
                            <span className="timeline-year">{card.year}</span>
                            <p className="timeline-org">{card.organization}</p>
                          </div>
                        </div>
                        <span className="timeline-motif"><MotifBadge motif={card.motif} /> {card.motif}</span>
                      </div>
                      <h3>{card.label}</h3>
                      <p className="timeline-date">{card.date}</p>
                      {card.location ? <p className="timeline-location">{card.location}</p> : null}
                      <p>{card.blurb}</p>
                      {card.imageSrc ? (
                        <img className="timeline-card-image" src={card.imageSrc} alt={`${card.organization} visual`} />
                      ) : null}
                      <ul className="timeline-point-list">
                        {card.points.slice(0, 2).map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="timeline-viewport" ref={timelineViewportRef}>
                  <div className="timeline-scene" style={timelineSceneStyle}>
                    <div className="timeline-board">
                      <div className="timeline-scene-rail" aria-hidden="true">
                        <span className="timeline-scene-line" />
                        <span className="timeline-scene-gridline" />
                      </div>
                      <ol ref={timelineTrackRef} className="timeline-track">
                        {TIMELINE_CARDS.map((card, index) => {
                          const localProgress = clamp(timelineProgress * (TIMELINE_CARDS.length - 1) - index + 0.2)
                          return (
                          <li
                            key={card.id}
                            className="timeline-card"
                            data-active={index === timelineSnapIndex}
                              style={
                                {
                                  '--card-drive': `${localProgress}`,
                                } as CSSProperties
                              }
                            >
                              <div className="timeline-card-header">
                                <div className="timeline-identity">
                                  {card.iconSrc ? (
                                    <span
                                      className="timeline-logo-chip"
                                      style={card.iconBg ? { backgroundColor: card.iconBg } : undefined}
                                    >
                                      <img src={card.iconSrc} alt="" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                  <div>
                                    <span className="timeline-year">{card.year}</span>
                                    <p className="timeline-org">{card.organization}</p>
                                  </div>
                                </div>
                                <span className="timeline-motif">
                                  <MotifBadge motif={card.motif} />
                                  {card.category}
                                </span>
                              </div>
                              <h3>{card.label}</h3>
                              <p className="timeline-date">{card.date}</p>
                              {card.location ? <p className="timeline-location">{card.location}</p> : null}
                              <p>{card.blurb}</p>
                              {card.imageSrc ? (
                                <img className="timeline-card-image" src={card.imageSrc} alt={`${card.organization} visual`} />
                              ) : null}
                              <ul className="timeline-point-list">
                                {card.points.slice(0, 2).map((point) => (
                                  <li key={point}>{point}</li>
                                ))}
                              </ul>
                              <div className="timeline-card-meter" aria-hidden="true">
                                <span />
                                <span />
                                <span />
                              </div>
                            </li>
                          )
                        })}
                      </ol>
                    </div>
                  </div>
                </div>
              )}

              <div className="timeline-checkpoints" aria-hidden="true">
                {TIMELINE_CARDS.map((card, index) => (
                  <button
                    key={card.year}
                    type="button"
                    className={`timeline-checkpoint ${index === timelineSnapIndex ? 'is-active' : ''}`}
                    onClick={() => {
                      if (reducedMotion) return
                      const fraction = index / Math.max(1, TIMELINE_CARDS.length - 1)
                      const sectionTop = timelineRef.current?.offsetTop ?? 0
                      const sectionHeight = timelineRef.current?.offsetHeight ?? 1
                      const targetY = sectionTop + fraction * Math.max(1, sectionHeight - viewportH)
                      window.scrollTo({ top: targetY, behavior: 'smooth' })
                    }}
                  >
                    <span>{card.year}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" ref={projectsRef} className="projects-section snap-section" aria-labelledby="projects-title">
          <SectionTransitionBand label="Projects" progress={projectsEnterProgress} />
          <div className="section-shell projects-shell">
            <div className="projects-header">
              <div>
                <div className="section-kicker">Checkpoint 03 / {PROJECTS_COPY.sectionLabel}</div>
                <h2 id="projects-title">{PROJECTS_COPY.sectionTitle}</h2>
                <p>{PROJECTS_COPY.introText}</p>
              </div>
              <div className="mode-selector" role="tablist" aria-label="Project layout proposals">
                {PROJECT_MODE_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={projectViewMode === option.id}
                    className={`mode-chip ${projectViewMode === option.id ? 'is-active' : ''}`}
                    onClick={() => setProjectViewMode(option.id)}
                  >
                    <span>{option.name}</span>
                    <small>{option.title}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="proposal-grid" aria-label="Project layout proposal descriptions">
              {PROJECT_MODE_OPTIONS.map((option) => (
                <article key={option.id} className={`proposal-card ${projectViewMode === option.id ? 'is-active' : ''}`}>
                  <p className="micro-label">{option.name}</p>
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </article>
              ))}
            </div>

            <div className="project-shelf-layout">
              <div className="project-grid" role="list" aria-label="Projects">
                {PROJECTS.map((project, index) => {
                  const isSelected = project.id === selectedProject.id
                  return (
                    <button
                      key={project.id}
                      type="button"
                      role="listitem"
                      className={`project-card ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => handleProjectSelect(project.id)}
                    >
                      <div className="project-card-top">
                        <p className="project-index">0{index + 1}</p>
                        <p className="project-category">{project.category}</p>
                      </div>
                      {project.imageSrc ? (
                        <div className="project-card-image-wrap" aria-hidden="true">
                          <img src={project.imageSrc} alt="" className="project-card-image" />
                        </div>
                      ) : null}
                      <h3>{project.title}</h3>
                      <p className="project-summary">{project.description}</p>
                      <div className="project-tags" aria-hidden="true">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <div className="project-card-foot">
                        <span>{isSelected ? 'Selected' : 'Inspect'}</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </button>
                  )
                })}
              </div>

              <section className={projectDetailClass} aria-labelledby="project-detail-title">
                <div className="project-detail-header">
                  <div>
                    <p className="micro-label">Focused View</p>
                    <h3 id="project-detail-title">{selectedProject.title}</h3>
                    <p className="project-detail-category">
                      {selectedProject.category}
                      {selectedProject.status ? ` / ${selectedProject.status}` : ''}
                    </p>
                  </div>
                  <div className="project-metrics">
                    {selectedProject.tags.slice(0, 4).map((metric) => (
                      <p key={metric}>{metric}</p>
                    ))}
                  </div>
                </div>

                <div className="project-detail-grid">
                  <DetailBlock title="Description" body={selectedProject.description} />
                  <DetailBlock
                    title="Stack"
                    body={selectedProject.stackSummary ?? selectedProject.tags.join(', ')}
                    accent="green"
                  />
                  <DetailBlock
                    title="Status"
                    body={selectedProject.status ?? 'Project'}
                    accent="orange"
                  />
                  <DetailBlock title="Highlights" body={selectedProject.highlights.join(' • ')} />
                </div>

                <div className="project-visual-strip" aria-label="Project media and links">
                  {selectedProject.imageSrc ? (
                    <div className="visual-tile visual-image-tile">
                      <p className="visual-index">Preview</p>
                      <img src={selectedProject.imageSrc} alt={`${selectedProject.title} preview`} className="project-detail-image" />
                    </div>
                  ) : null}
                  {selectedProject.projectLink ? (
                    <a
                      className="visual-tile visual-link-tile"
                      href={selectedProject.projectLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="visual-index">Project Link</p>
                      <h4>Open project / demo</h4>
                      <p>{selectedProject.projectLink}</p>
                    </a>
                  ) : null}
                  {selectedProject.sourceCodeLink ? (
                    <a
                      className="visual-tile visual-link-tile"
                      href={selectedProject.sourceCodeLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="visual-index">Source</p>
                      <h4>Open source repository</h4>
                      <p>{selectedProject.sourceCodeLink}</p>
                    </a>
                  ) : null}
                </div>
              </section>
            </div>
          </div>
        </section>

        <section id="resume" ref={resumeRef} className="resume-section snap-section" aria-labelledby="resume-title">
          <SectionTransitionBand label="Utilities" progress={resumeEnterProgress} />
          <div className="section-shell resume-shell">
            <div>
              <div className="section-kicker">Checkpoint 04 / {RESUME_COPY.sectionLabel}</div>
              <h2 id="resume-title">{RESUME_COPY.title}</h2>
              <p>{RESUME_COPY.blurb}</p>
            </div>

            <div className="resume-actions">
              <a href={RESUME_LINK} target="_blank" rel="noreferrer" className="utility-panel-link">Resume</a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="utility-panel-link">GitHub</a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="utility-panel-link">LinkedIn</a>
            </div>

            <div className="resume-contact-panel">
              <article className="contact-card">
                <p className="micro-label">Contact</p>
                <h3>{CONTACT_INFO.email}</h3>
                <p>Form labels from the migrated site:</p>
                <div className="contact-chip-row">
                  {CONTACT_INFO.formLabels.map((label) => (
                    <span key={label} className="contact-chip">{label}</span>
                  ))}
                </div>
              </article>
              <article className="contact-card">
                <p className="micro-label">Form Prompt Copy</p>
                <p>{CONTACT_INFO.placeholders.name}</p>
                <p>{CONTACT_INFO.placeholders.email}</p>
                <p>{CONTACT_INFO.placeholders.message}</p>
              </article>
            </div>

            <div className="design-system-mini" aria-label="Skills categories">
              {SKILL_CATEGORIES.map((skillGroup) => (
                <article key={skillGroup.category}>
                  <p className="micro-label">{skillGroup.category}</p>
                  <h3>{skillGroup.skillsList.slice(0, 3).join(' / ')}</h3>
                  <p>{skillGroup.skillsList.join(', ')}</p>
                </article>
              ))}
            </div>

            <div className="tech-logo-grid" aria-label="Technologies">
              {TECHNOLOGIES.map((tech) => (
                <div key={tech.name} className="tech-logo-chip">
                  {tech.iconSrc ? <img src={tech.iconSrc} alt="" aria-hidden="true" /> : null}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
