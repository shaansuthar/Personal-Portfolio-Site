export function DetailBlock({
  title,
  body,
  accent,
}: {
  title: string
  body: string
  accent?: 'green' | 'orange'
}) {
  return (
    <article className={`detail-block ${accent ? `accent-${accent}` : ''}`}>
      <p className="micro-label">{title}</p>
      <p>{body}</p>
    </article>
  )
}
