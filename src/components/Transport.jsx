import { flights, trains, metro } from '../data/trips'
import { BlockAccordion } from './Accordion'

function FlightCard({ f }) {
  const depDate = f.date.includes('→') ? f.date.split('→')[0].trim() : f.date
  const arrDate = f.date.includes('→') ? f.date.split('→')[1].trim() : f.date
  return (
    <div className="flight">
      <div className="f-end">
        <div className="f-time">{f.dep}</div>
        <div className="f-apt">{f.from} · {depDate}</div>
      </div>
      <div className="f-mid">
        <div className="f-dur">{f.duration}</div>
        <div className="f-line" />
      </div>
      <div className="f-end right">
        <div className="f-time">{f.arr}</div>
        <div className="f-apt">{f.to} · {arrDate}</div>
      </div>
    </div>
  )
}

function TrainCard({ t }) {
  return (
    <div className="transport-card">
      <div className="transport-card-top">
        <span className="transport-date">{t.date}</span>
        <span className="transport-service">{t.service}</span>
      </div>
      <div className="transport-route">{t.route}</div>
      <div className="transport-meta">
        <span>{t.duration}</span>
        <span className="transport-sep">·</span>
        <span>{t.price}</span>
      </div>
      {t.notes && <div className="transport-notes">{t.notes}</div>}
    </div>
  )
}

function MetroCard({ m }) {
  return (
    <div className="metro-card">
      <div className="metro-card-head">
        <span className="metro-city">{m.city}</span>
        <span className="metro-card-label">{m.card}</span>
      </div>
      <p className="metro-tip">{m.tip}</p>
      <ul className="metro-lines">
        {m.lines.map((l, i) => <li key={i}>{l}</li>)}
      </ul>
    </div>
  )
}

export default function Transport() {
  return (
    <section id="transport">
      <div className="section-header">
        <div className="section-kicker">Logística</div>
        <h2 className="section-title">Transporte</h2>
        <div className="section-dates">Vuelos · Trenes · Metro & transporte local</div>
      </div>

      <BlockAccordion title="Vuelos" count={flights.length} defaultOpen={true}>
        <div className="flights">
          {flights.map((f, i) => <FlightCard key={i} f={f} />)}
        </div>
      </BlockAccordion>

      <BlockAccordion title="Trenes" count={trains.length} defaultOpen={false}>
        <div className="transport-list">
          {trains.map((t, i) => <TrainCard key={i} t={t} />)}
        </div>
      </BlockAccordion>

      <BlockAccordion title="Metro & transporte local" count={metro.length} defaultOpen={false}>
        <div className="metro-grid">
          {metro.map((m, i) => <MetroCard key={i} m={m} />)}
        </div>
      </BlockAccordion>
    </section>
  )
}
