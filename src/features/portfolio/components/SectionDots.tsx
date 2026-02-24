export function SectionDots({
  activeIndex,
  sectionIds,
  onSelect,
}: {
  activeIndex: number
  sectionIds: string[]
  onSelect: (id: string) => void
}) {
  return (
    <aside className="section-dots" aria-label="Scroll checkpoints">
      {sectionIds.map((id, index) => (
        <button
          key={id}
          type="button"
          className={`section-dot ${index === activeIndex ? 'is-active' : ''}`}
          onClick={() => onSelect(id)}
          aria-label={`Jump to ${id}`}
          aria-current={index === activeIndex ? 'true' : undefined}
        >
          <span />
        </button>
      ))}
    </aside>
  )
}
