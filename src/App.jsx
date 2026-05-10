import { useState, useCallback } from 'react'
import { destinations } from './data/trips'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Overview from './components/Overview'
import Transport from './components/Transport'
import DestGrid from './components/DestGrid'
import { useSearchResults } from './components/SearchResults'

const NAV_LINKS = [
  { id: 'overview',   label: 'Resumen' },
  { id: 'transport',  label: 'Transporte' },
  { id: 'tokyo',      label: 'Tokio' },
  { id: 'hakone',     label: 'Hakone' },
  { id: 'kyoto',      label: 'Kioto' },
  { id: 'hiroshima',  label: 'Hiroshima' },
  { id: 'osaka',      label: 'Osaka' },
  { id: 'danang',     label: 'Da Nang' },
  { id: 'hanoi',      label: 'Hanoi' },
]

const CITIES = ['Tokio', 'Hakone', 'Kioto', 'Hiroshima', 'Osaka', 'Da Nang', 'Hanoi']

function loadEntries() {
  try { return JSON.parse(localStorage.getItem('travel-custom-entries') || '[]') }
  catch { return [] }
}

function saveEntries(entries) {
  localStorage.setItem('travel-custom-entries', JSON.stringify(entries))
}

export default function App() {
  const [query, setQuery]               = useState('')
  const [filter, setFilter]             = useState('all')
  const [activeDestId, setActiveDestId] = useState(null)
  const [customEntries, setCustomEntries] = useState(loadEntries)
  const searchResults = useSearchResults(query, filter)
  const isSearching = searchResults !== null

  const addEntry = useCallback((entry) => {
    setCustomEntries(prev => {
      const next = [...prev, entry]
      saveEntries(next)
      return next
    })
    // Abre el destino correspondiente
    setActiveDestId(entry.destId)
    setTimeout(() => {
      document.getElementById(entry.destId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }, [])

  const removeEntry = useCallback((id) => {
    setCustomEntries(prev => {
      const next = prev.filter(e => e.id !== id)
      saveEntries(next)
      return next
    })
  }, [])

  const scrollTo = useCallback((id) => {
    setQuery('')
    setFilter('all')
    const isDest = destinations.some(d => d.id === id)
    if (isDest) {
      setActiveDestId(id)
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    } else {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }, [])

  return (
    <>
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">Itinerario de viaje · Verano 2026</div>
          <h1>Japón <em>&</em> Vietnam</h1>
          <div className="hero-sub">21 julio – 13 agosto · 24 días</div>
          <div className="hero-tags">
            {CITIES.map(c => <span key={c} className="hero-tag">{c}</span>)}
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="nav-inner">
          {NAV_LINKS.map(l => (
            <a key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</a>
          ))}
        </div>
      </nav>

      <SearchBar
        query={query}
        setQuery={setQuery}
        filter={filter}
        setFilter={setFilter}
        onAddEntry={addEntry}
      />

      {isSearching ? (
        <SearchResults query={query} filter={filter} onNavigate={scrollTo} />
      ) : (
        <main>
          <Overview />
          <Transport />
          <section id="destinos">
            <div className="section-header">
              <div className="section-kicker">Itinerario</div>
              <h2 className="section-title">Destinos</h2>
              <div className="section-dates">Selecciona un destino para ver el detalle</div>
            </div>
            <DestGrid
              destinations={destinations}
              activeId={activeDestId}
              setActiveId={setActiveDestId}
              customEntries={customEntries}
              onRemoveEntry={removeEntry}
            />
          </section>
        </main>
      )}

      <footer>
        <strong>Japón & Vietnam · Verano 2026</strong><br />
        21 julio – 13 agosto · Madrid → Tokio → Hanoi → Madrid
      </footer>
    </>
  )
}
