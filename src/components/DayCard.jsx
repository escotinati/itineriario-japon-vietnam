import { useState } from 'react'
import Badge from './Badge'

export default function DayCard({ label, title, desc, tags = [] }) {
  const [open, setOpen] = useState(false)
  const isHTML = typeof desc === 'string' && desc.trimStart().startsWith('<')
  return (
    <div className={`day${open ? ' day-open' : ''}`}>
      <button className="day-header" onClick={() => setOpen(o => !o)}>
        <span className="day-label">{label}</span>
        <span className="day-body">
          <span className="day-title">
            {title}
            {tags.map((t, i) => <Badge key={i} type={t.type} text={t.text} />)}
          </span>
        </span>
        <span className={`day-chevron${open ? ' day-chevron-open' : ''}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 5l4.5 4.5L11.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className="day-collapse">
        <div className="day-collapse-inner">
          {isHTML
            ? <div className="day-desc" dangerouslySetInnerHTML={{ __html: desc }} />
            : <div className="day-desc">{desc}</div>
          }
        </div>
      </div>
    </div>
  )
}
