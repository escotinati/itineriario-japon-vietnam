import Alert from './Alert'
import DayCard from './DayCard'
import { BlockAccordion } from './Accordion'
import { dayRoutes } from '../data/maps'

const COUNTRY_CLASS = { 'Japón': 'tile-japan', 'Vietnam': 'tile-vietnam' }

const CAT_LABEL = {
  visita:     'Visita',
  comida:     'Comida',
  shopping:   'Shopping',
  transporte: 'Transporte',
  consejo:    'Consejo',
  nota:       'Nota',
}
const CAT_CLASS = {
  visita:     'cat-visita',
  comida:     'cat-comida',
  shopping:   'cat-shopping',
  transporte: 'cat-transporte',
  consejo:    'cat-consejo',
  nota:       'cat-nota',
}

function ChevronDown() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M3 5.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// ─── Tarjeta compacta ───────────────────────────────────────────────────────
function CompactTile({ dest, customCount, onExpand }) {
  const dayCount = dest.days.length + (dest.extras?.length || 0)
  const foodCount = dest.food?.length || 0

  return (
    <button
      className={`dest-tile ${COUNTRY_CLASS[dest.country] || ''}`}
      onClick={onExpand}
      aria-expanded={false}
    >
      <div className="dest-tile-strip" />
      <div className="dest-tile-main">
        <div className="dest-tile-kicker">{dest.country} · {dest.stage}</div>
        <div className="dest-tile-name">{dest.name}</div>
        {dest.subtitle && <div className="dest-tile-sub">{dest.subtitle}</div>}
        <div className="dest-tile-dates">{dest.dates}</div>
      </div>
      <div className="dest-tile-footer">
        <div className="dest-tile-stats">
          {dayCount > 0 && (
            <span className="dest-tile-stat">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><rect x="1" y="2" width="9" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M3.5 1v2M7.5 1v2M1 5h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              {dayCount} {dayCount === 1 ? 'día' : 'días'}
            </span>
          )}
          {foodCount > 0 && (
            <span className="dest-tile-stat">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 1v9M2 4c0-2 6-2 6 0s-6 2-6 0zM9 1v4c0 1-.5 1.5-1 2v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {foodCount} lugares
            </span>
          )}
          {customCount > 0 && (
            <span className="dest-tile-stat dest-tile-stat-custom">
              {customCount} {customCount === 1 ? 'nota' : 'notas'}
            </span>
          )}
        </div>
        <span className="dest-tile-chevron"><ChevronDown /></span>
      </div>
    </button>
  )
}

// ─── Entradas personalizadas ────────────────────────────────────────────────
function CustomEntry({ entry, onRemove }) {
  return (
    <div className="custom-entry">
      <div className="custom-entry-header">
        <span className={`custom-entry-cat ${CAT_CLASS[entry.categoria] || ''}`}>
          {CAT_LABEL[entry.categoria] || entry.categoria}
        </span>
        <span className="custom-entry-title">{entry.titulo}</span>
        <button
          className="custom-entry-remove"
          onClick={() => onRemove(entry.id)}
          aria-label="Eliminar entrada"
          title="Eliminar"
        >
          <IconClose />
        </button>
      </div>
      {entry.nota && <p className="custom-entry-desc">{entry.nota}</p>}
    </div>
  )
}

// ─── Tarjeta expandida ──────────────────────────────────────────────────────
function ExpandedTile({ dest, customEntries, onCollapse, onRemoveEntry }) {
  const myEntries = customEntries.filter(e => e.destId === dest.id)
  const routes = dayRoutes[dest.id] || []

  return (
    <div className={`dest-tile-expanded ${COUNTRY_CLASS[dest.country] || ''}`}>
      <div className="dest-tile-exp-strip" />
      <div className="dest-tile-exp-header">
        <div className="dest-tile-exp-info">
          <div className="dest-tile-kicker">{dest.country} · {dest.stage}</div>
          <div className="dest-tile-name dest-tile-name-lg">{dest.name}</div>
          {dest.subtitle && <div className="dest-tile-sub">{dest.subtitle}</div>}
          <div className="dest-tile-dates">{dest.dates}</div>
        </div>
        <button className="dest-tile-close" onClick={onCollapse} aria-label="Cerrar">
          <IconClose />
        </button>
      </div>

      <div className="dest-tile-exp-body">
        {dest.alerts.map((a, i) => <Alert key={i} type={a.type} text={a.text} />)}

        {/* Notas personalizadas — aparecen primero si las hay */}
        {myEntries.length > 0 && (
          <BlockAccordion title="Mis notas" count={myEntries.length} defaultOpen={true}>
            <div className="custom-entries">
              {myEntries.map(e => (
                <CustomEntry key={e.id} entry={e} onRemove={onRemoveEntry} />
              ))}
            </div>
          </BlockAccordion>
        )}

        <BlockAccordion title="Itinerario" count={dest.days.length} defaultOpen={myEntries.length === 0}>
          <div className="days">
            {dest.days.map((d, i) => (
              <DayCard key={i} {...d} routeUrl={routes[i] || null} />
            ))}
          </div>
        </BlockAccordion>

        {dest.extras?.length > 0 && (
          <BlockAccordion title="Extras recomendados" count={dest.extras.length} defaultOpen={false}>
            <div className="days">
              {dest.extras.map((e, i) => <DayCard key={i} {...e} />)}
            </div>
          </BlockAccordion>
        )}

        {dest.food?.length > 0 && (
          <BlockAccordion title="Gastronomía" count={dest.food.length} defaultOpen={false}>
            <div className="food-grid">
              {dest.food.map((f, i) => (
                <div className="food-card" key={i}>
                  <div className="food-name">{f.name}</div>
                  <div className="food-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </BlockAccordion>
        )}
      </div>
    </div>
  )
}

// ─── Grid principal ─────────────────────────────────────────────────────────
export default function DestGrid({ destinations, activeId, setActiveId, customEntries = [], onRemoveEntry }) {
  const activeIndex = destinations.findIndex(d => d.id === activeId)
  const before = activeIndex >= 0 ? destinations.slice(0, activeIndex) : destinations
  const active  = activeIndex >= 0 ? destinations[activeIndex] : null
  const after   = activeIndex >= 0 ? destinations.slice(activeIndex + 1) : []

  const countFor = (destId) => customEntries.filter(e => e.destId === destId).length

  return (
    <div className="dest-grid-wrap">
      {before.length > 0 && (
        <div className="dest-grid">
          {before.map(dest => (
            <CompactTile
              key={dest.id}
              dest={dest}
              customCount={countFor(dest.id)}
              onExpand={() => setActiveId(dest.id)}
            />
          ))}
        </div>
      )}

      {active && (
        <div id={active.id}>
          <ExpandedTile
            dest={active}
            customEntries={customEntries}
            onCollapse={() => setActiveId(null)}
            onRemoveEntry={onRemoveEntry}
          />
        </div>
      )}

      {after.length > 0 && (
        <div className="dest-grid">
          {after.map(dest => (
            <CompactTile
              key={dest.id}
              dest={dest}
              customCount={countFor(dest.id)}
              onExpand={() => setActiveId(dest.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
