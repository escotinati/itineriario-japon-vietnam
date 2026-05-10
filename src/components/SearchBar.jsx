import { useState } from 'react'
import { destinations } from '../data/trips'

const FILTERS = [
  { id: 'all',        label: 'Todo' },
  { id: 'japon',      label: 'Japón' },
  { id: 'vietnam',    label: 'Vietnam' },
  { id: 'comida',     label: 'Gastronomía' },
  { id: 'transporte', label: 'Transporte' },
  { id: 'actividad',  label: 'Actividades' },
]

const CATEGORIAS = [
  { id: 'visita',     label: 'Visita' },
  { id: 'comida',     label: 'Comida' },
  { id: 'shopping',   label: 'Shopping' },
  { id: 'transporte', label: 'Transporte' },
  { id: 'consejo',    label: 'Consejo' },
  { id: 'nota',       label: 'Nota personal' },
]

const EMPTY = { destId: '', categoria: 'visita', titulo: '', nota: '' }

export default function SearchBar({ query, setQuery, filter, setFilter, onAddEntry }) {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm]         = useState(EMPTY)
  const [error, setError]       = useState('')

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.destId)        return setError('Selecciona un destino.')
    if (!form.titulo.trim()) return setError('El título no puede estar vacío.')
    setError('')
    onAddEntry({ ...form, titulo: form.titulo.trim(), nota: form.nota.trim(), id: Date.now() })
    setForm(EMPTY)
    setShowForm(false)
  }

  const handleCancel = () => {
    setForm(EMPTY)
    setError('')
    setShowForm(false)
  }

  return (
    <div className="search-bar-wrap">

      {/* ── Buscador ── */}
      <div className="search-bar-inner">
        <input
          className="search-input"
          type="text"
          placeholder="Buscar destino, restaurante, actividad..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoComplete="off"
        />
        {query && (
          <button className="search-clear" onClick={() => setQuery('')} aria-label="Limpiar">×</button>
        )}
      </div>

      {/* ── Filtros + botón Añadir al final ── */}
      <div className="search-bar-inner">
        <div className="filter-tabs">
          {FILTERS.map(f => (
            <button
              key={f.id}
              className={`filter-tab${filter === f.id ? ' active' : ''}`}
              onClick={() => setFilter(f.id)}
              type="button"
            >
              {f.label}
            </button>
          ))}

          {/* Separador visual */}
          <span className="filter-sep" aria-hidden="true" />

          {/* Trigger integrado en la fila de filtros */}
          <button
            className={`filter-tab filter-tab-add${showForm ? ' is-active' : ''}`}
            onClick={() => setShowForm(s => !s)}
            aria-expanded={showForm}
            type="button"
          >
            <svg
              width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"
              style={{ transition: 'transform 0.22s ease', transform: showForm ? 'rotate(45deg)' : 'none' }}
            >
              <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            {showForm ? 'Cancelar' : 'Añadir nota'}
          </button>
        </div>
      </div>

      {/* ── Formulario con slide-down animado ── */}
      <div className={`aef-wrap${showForm ? ' is-open' : ''}`} aria-hidden={!showForm}>
        <div className="aef-wrap-inner">
          <form className="add-entry-form" onSubmit={handleSubmit} noValidate>

            <div className="aef-row">
              <div className="aef-field">
                <label className="aef-label" htmlFor="aef-dest">Destino</label>
                <select
                  id="aef-dest"
                  className="aef-select"
                  value={form.destId}
                  onChange={set('destId')}
                  tabIndex={showForm ? 0 : -1}
                >
                  <option value="">Seleccionar...</option>
                  {destinations.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>
              <div className="aef-field">
                <label className="aef-label" htmlFor="aef-cat">Temática</label>
                <select
                  id="aef-cat"
                  className="aef-select"
                  value={form.categoria}
                  onChange={set('categoria')}
                  tabIndex={showForm ? 0 : -1}
                >
                  {CATEGORIAS.map(c => (
                    <option key={c.id} value={c.id}>{c.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="aef-field">
              <label className="aef-label" htmlFor="aef-titulo">Título</label>
              <input
                id="aef-titulo"
                className="aef-input"
                type="text"
                placeholder="Nombre del lugar o actividad..."
                value={form.titulo}
                onChange={set('titulo')}
                maxLength={80}
                tabIndex={showForm ? 0 : -1}
              />
            </div>

            <div className="aef-field">
              <label className="aef-label" htmlFor="aef-nota">
                Descripción <span className="aef-optional">(opcional)</span>
              </label>
              <textarea
                id="aef-nota"
                className="aef-textarea"
                placeholder="Notas, horario, precio, consejo..."
                value={form.nota}
                onChange={set('nota')}
                rows={3}
                maxLength={400}
                tabIndex={showForm ? 0 : -1}
              />
            </div>

            {error && <p className="aef-error" role="alert">{error}</p>}

            <div className="aef-actions">
              <button type="button" className="aef-btn-cancel" onClick={handleCancel} tabIndex={showForm ? 0 : -1}>
                Cancelar
              </button>
              <button type="submit" className="aef-btn-submit" tabIndex={showForm ? 0 : -1}>
                Guardar
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}
