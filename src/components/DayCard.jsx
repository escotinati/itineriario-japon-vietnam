import { useState } from 'react'
import Badge from './Badge'

export default function DayCard({ label, title, desc, tags = [], mapsUrl, routeUrl }) {
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

          {/* Enlace lugar individual */}
          {mapsUrl && (
            <div className="day-maps-wrap">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="day-maps-link"
                onClick={e => e.stopPropagation()}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Ver en Google Maps
              </a>
            </div>
          )}

          {/* Descripción del día */}
          {isHTML
            ? <div className="day-desc" dangerouslySetInnerHTML={{ __html: desc }} />
            : <div className="day-desc">{desc}</div>
          }

          {/* Bloque ruta completa del día */}
          {routeUrl && (
            <div className="day-route-block">
              <div className="day-route-label">Ruta completa del día</div>
              <div className="day-route-stops">{routeUrl.label}</div>
              <a
                href={routeUrl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="day-route-link"
                onClick={e => e.stopPropagation()}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
                  <path d="M12 7v3l-5.1 6.5M12 10l5.1 6.5"/>
                </svg>
                Abrir ruta en Google Maps
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
