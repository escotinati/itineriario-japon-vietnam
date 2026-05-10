import { useState } from 'react'

function Chevron({ open }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      aria-hidden="true"
      style={{ transition: 'transform 0.22s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Accordion de sección principal (destino completo)
export function SectionAccordion({ kicker, title, subtitle, dates, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`sacc${open ? ' is-open' : ''}`}>
      <button className="sacc-trigger" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <div className="sacc-header-content">
          <div className="section-kicker">{kicker}</div>
          <div className="sacc-title">
            {title}
            {subtitle && <span className="sacc-subtitle">{subtitle}</span>}
          </div>
          {dates && <div className="section-dates">{dates}</div>}
        </div>
        <Chevron open={open} />
      </button>
      {open && <div className="sacc-body">{children}</div>}
    </div>
  )
}

// Accordion de bloque interior (días, gastronomía, etc.)
export function BlockAccordion({ title, count, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="bacc">
      <button className="bacc-trigger" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="bacc-title">{title}</span>
        {count != null && <span className="bacc-count">{count}</span>}
        <span className="bacc-line" />
        <Chevron open={open} />
      </button>
      {open && <div className="bacc-body">{children}</div>}
    </div>
  )
}
