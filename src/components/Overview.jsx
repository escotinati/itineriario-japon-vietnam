import { hotels } from '../data/trips'
import { BlockAccordion } from './Accordion'

export default function Overview() {
  return (
    <section id="overview">
      <div className="section-header">
        <div className="section-kicker">Visión general</div>
        <h2 className="section-title">El viaje de un vistazo</h2>
        <div className="section-dates">21 julio – 13 agosto · 24 días · 7 destinos</div>
      </div>

      <BlockAccordion title="Alojamientos" count={hotels.length} defaultOpen={true}>
        <div className="hotels">
          {hotels.map((h, i) => (
            <div className="hotel" key={i}>
              <div className="hotel-dates">{h.dates} · {h.city}</div>
              <div className="hotel-name">{h.name}</div>
              {h.mapsUrl ? (
                <a
                  className="hotel-addr hotel-addr-link"
                  href={h.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {h.address}
                </a>
              ) : (
                <div className="hotel-addr">{h.address}</div>
              )}
            </div>
          ))}
        </div>
      </BlockAccordion>
    </section>
  )
}
