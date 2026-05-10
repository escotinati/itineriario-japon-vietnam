import { destinations } from '../data/trips'

function highlight(text, query) {
  if (!query) return text
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  return text.replace(regex, '<mark class="result-highlight">$1</mark>')
}

function buildIndex() {
  const items = []

  for (const dest of destinations) {
    for (const day of dest.days) {
      items.push({
        id: dest.id,
        destName: dest.name,
        country: dest.country,
        category: 'actividad',
        title: day.title,
        desc: day.desc,
        label: day.label,
      })
    }

    for (const f of dest.food) {
      items.push({
        id: dest.id,
        destName: dest.name,
        country: dest.country,
        category: 'comida',
        title: f.name,
        desc: f.desc,
        label: null,
      })
    }

    for (const a of dest.alerts) {
      const plain = a.text.replace(/<[^>]+>/g, '')
      items.push({
        id: dest.id,
        destName: dest.name,
        country: dest.country,
        category: 'transporte',
        title: 'Info de transporte',
        desc: plain,
        label: null,
      })
    }

    if (dest.extras) {
      for (const e of dest.extras) {
        items.push({
          id: dest.id,
          destName: dest.name,
          country: dest.country,
          category: 'actividad',
          title: e.title,
          desc: e.desc,
          label: e.label,
        })
      }
    }
  }

  return items
}

const INDEX = buildIndex()

const COUNTRY_FILTER = {
  japon: 'Japón',
  vietnam: 'Vietnam',
}

const CATEGORY_FILTER = ['comida', 'transporte', 'actividad']

export function useSearchResults(query, filter) {
  if (!query && filter === 'all') return null

  let results = [...INDEX]

  if (filter === 'japon' || filter === 'vietnam') {
    results = results.filter(r => r.country === COUNTRY_FILTER[filter])
  } else if (CATEGORY_FILTER.includes(filter)) {
    results = results.filter(r => r.category === filter)
  }

  if (query.trim()) {
    const q = query.trim().toLowerCase()
    results = results.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.desc.toLowerCase().includes(q) ||
      r.destName.toLowerCase().includes(q)
    )
  }

  return results
}

export default function SearchResults({ query, filter, onNavigate }) {
  const results = useSearchResults(query, filter)

  if (results === null) return null

  const categoryLabel = { comida: 'Gastronomía', transporte: 'Transporte', actividad: 'Actividad' }

  return (
    <div className="search-results">
      <p className="search-results-title">
        {results.length === 0
          ? 'Sin resultados'
          : <><strong>{results.length}</strong> resultado{results.length !== 1 ? 's' : ''}</>
        }
      </p>

      {results.length === 0 && (
        <div className="no-results">No se encontró nada para "{query}"</div>
      )}

      {results.map((r, i) => (
        <div
          key={i}
          className="result-card"
          onClick={() => onNavigate(r.id)}
        >
          <div className="result-meta">
            {r.destName}
            <span className="result-dot">·</span>
            {categoryLabel[r.category] || r.category}
            {r.label && <><span className="result-dot">·</span>{r.label}</>}
          </div>
          <div
            className="result-title"
            dangerouslySetInnerHTML={{ __html: highlight(r.title, query) }}
          />
          <div
            className="result-desc"
            dangerouslySetInnerHTML={{ __html: highlight(r.desc.slice(0, 140) + (r.desc.length > 140 ? '…' : ''), query) }}
          />
        </div>
      ))}
    </div>
  )
}
