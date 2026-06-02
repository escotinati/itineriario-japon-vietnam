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

function JRPassComparator() {
  const trayectos = [
    { ruta: "N'EX Narita → Tokio", fecha: "22 jul", precio: "3.070¥", precio2: "6.140¥", nozomi: false, nota: "" },
    { ruta: "Shinkansen Shinbashi → Odawara", fecha: "26 jul", precio: "2.500¥", precio2: "5.000¥", nozomi: false, nota: "" },
    { ruta: "Shinkansen Odawara → Kioto", fecha: "27 jul", precio: "13.500¥", precio2: "27.000¥", nozomi: false, nota: "🗻 Asiento E = Monte Fuji" },
    { ruta: "Shinkansen Kioto → Hiroshima", fecha: "31 jul", precio: "11.000¥", precio2: "22.000¥", nozomi: true, nota: "" },
    { ruta: "JR Hiroshima → Miyajimaguchi + Ferry", fecha: "1 ago", precio: "840¥", precio2: "1.680¥", nozomi: false, nota: "" },
    { ruta: "Shinkansen Hiroshima → Osaka", fecha: "1 ago", precio: "11.000¥", precio2: "22.000¥", nozomi: true, nota: "" },
  ]

  const totalSuelto = 41910
  const jrPass14 = 80000

  return (
    <div style={{ marginBottom: 24 }}>
      {/* Cabecera */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 18 }}>🎫</span>
        <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>JR Pass — ¿Te compensa?</span>
      </div>

      {/* Tabla de trayectos */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        marginBottom: 12
      }}>
        {/* Cabecera tabla */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 70px 90px 90px',
          gap: 8,
          padding: '8px 14px',
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)'
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-4)' }}>Trayecto</span>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-4)' }}>Fecha</span>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-4)', textAlign: 'right' }}>1 persona</span>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-4)', textAlign: 'right' }}>2 personas</span>
        </div>

        {/* Filas */}
        {trayectos.map((t, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 70px 90px 90px',
            gap: 8,
            padding: '9px 14px',
            borderBottom: i < trayectos.length - 1 ? '1px solid var(--border)' : 'none',
            alignItems: 'start'
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-2)', lineHeight: 1.4 }}>{t.ruta}</div>
              {t.nota && <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: 2 }}>{t.nota}</div>}
              {t.nozomi && (
                <div style={{ marginTop: 3 }}>
                  <span style={{
                    background: 'var(--teal-bg)', color: 'var(--teal-text)',
                    border: '1px solid #99F6E4',
                    borderRadius: 99, fontSize: 10, fontWeight: 600, padding: '1px 7px'
                  }}>Sin JR Pass → Nozomi más rápido, mismo precio</span>
                </div>
              )}
            </div>
            <span style={{ fontSize: 12, color: 'var(--ink-4)', paddingTop: 2 }}>{t.fecha}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)', textAlign: 'right', paddingTop: 2 }}>{t.precio}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', textAlign: 'right', paddingTop: 2 }}>{t.precio2}</span>
          </div>
        ))}

        {/* Total billetes sueltos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 70px 90px 90px',
          gap: 8,
          padding: '10px 14px',
          background: 'var(--bg)',
          borderTop: '2px solid var(--border-2)'
        }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>Total billetes sueltos</span>
          <span />
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-3)', textAlign: 'right' }}>~41.910¥</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', textAlign: 'right' }}>~83.820¥</span>
        </div>
      </div>

      {/* Comparativa JR Pass vs Suelto */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
        {/* Sin JR Pass */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '14px 16px'
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-4)', marginBottom: 8 }}>Sin JR Pass</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
            <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '8px 10px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: 2 }}>1 persona</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink-3)' }}>~262€</div>
              <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>~41.910¥</div>
            </div>
            <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '8px 10px', border: '1px solid var(--border-2)' }}>
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: 2 }}>2 personas</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)' }}>~524€</div>
              <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>~83.820¥</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span>Pagas solo lo que usas</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span>Puedes coger el Nozomi (más rápido, mismo precio)</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--red)', fontWeight: 700, flexShrink: 0 }}>✗</span>
              <span>Hay que comprar cada billete por separado desde España (Klook)</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--red)', fontWeight: 700, flexShrink: 0 }}>✗</span>
              <span>Más gestión logística durante el viaje</span>
            </div>
          </div>
        </div>

        {/* Con JR Pass */}
        <div style={{
          background: 'var(--blue-bg)',
          border: '2px solid var(--blue)',
          borderRadius: 'var(--radius)',
          padding: '14px 16px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute', top: -1, right: 12,
            background: 'var(--blue)', color: '#fff',
            fontSize: 10, fontWeight: 700, padding: '2px 9px',
            borderRadius: '0 0 8px 8px', letterSpacing: '.05em'
          }}>RECOMENDADO</div>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--blue-text)', marginBottom: 8 }}>Con JR Pass 14 días</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
            <div style={{ background: 'rgba(255,255,255,0.6)', borderRadius: 'var(--radius-sm)', padding: '8px 10px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--blue-text)', marginBottom: 2 }}>1 persona</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink-2)' }}>~500€</div>
              <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>~80.000¥</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.9)', borderRadius: 'var(--radius-sm)', padding: '8px 10px', border: '1px solid #BFDBFE' }}>
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--blue-text)', marginBottom: 2 }}>2 personas</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)' }}>~1.000€</div>
              <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>~160.000¥</div>
            </div>
          </div>
          <div style={{ fontSize: 11, color: 'var(--ink-4)', marginBottom: 10 }}>Activar 26 jul → caduca 8 ago</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span>Sube a cualquier Hikari/Sakura sin billete ni gestión</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span>Reserva de asiento gratuita en ventanilla JR</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span>Cubre también el N'EX Narita y el ferry de Miyajima</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--red)', fontWeight: 700, flexShrink: 0 }}>✗</span>
              <span>~476€ más caro que billetes sueltos entre los dos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cómo comprar en cada caso */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-4)' }}>Cómo y cuándo comprar</span>
        </div>

        {/* Fila JR Pass */}
        <div style={{ padding: '12px 14px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{
              background: 'var(--blue-bg)', color: 'var(--blue-text)',
              border: '1px solid #BFDBFE',
              borderRadius: 99, fontSize: 10, fontWeight: 700, padding: '2px 9px'
            }}>JR PASS</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)' }}>Comprar antes de salir de España</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6 }}><span style={{ color: 'var(--ink-muted)', fontWeight: 700 }}>①</span><span><strong>Compra online</strong> en Klook, Japan Experience o GetYourGuide — recibes un voucher en casa. Precio en euros, sin comisiones de cambio si usas Revolut.</span></div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6 }}><span style={{ color: 'var(--ink-muted)', fontWeight: 700 }}>②</span><span><strong>Al llegar a Narita T2</strong> — oficina JR Ticket Office (abierta hasta ~20:00h). Canjeas el voucher por el pase físico e indicas fecha de inicio: <strong>26 de julio</strong>.</span></div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6 }}><span style={{ color: 'var(--ink-muted)', fontWeight: 700 }}>③</span><span><strong>El 26 jul</strong> al activarlo, reserva en ventanilla todos los asientos de Shinkansen del viaje de golpe — gratis con el pase.</span></div>
          </div>
        </div>

        {/* Fila Sin JR Pass */}
        <div style={{ padding: '12px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{
              background: 'var(--amber-bg)', color: 'var(--amber-text)',
              border: '1px solid #FDE68A',
              borderRadius: 99, fontSize: 10, fontWeight: 700, padding: '2px 9px'
            }}>SIN JR PASS</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)' }}>Comprar cada billete suelto</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6 }}><span style={{ color: 'var(--ink-muted)', fontWeight: 700 }}>①</span><span><strong>N'EX Narita → Tokio</strong> — al llegar al aeropuerto en taquillas o máquinas de Narita T2. Sin antelación.</span></div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6 }}><span style={{ color: 'var(--ink-muted)', fontWeight: 700 }}>②</span><span><strong>Shinkansen largos × 4</strong> (Odawara→Kioto, Kioto→Hiroshima, Hiroshima→Osaka, Shinbashi→Odawara) — comprar en <strong>Klook desde España</strong> en cuanto abra la venta (~1 mes antes = principios de julio). Puedes coger el Nozomi, más rápido.</span></div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6 }}><span style={{ color: 'var(--ink-muted)', fontWeight: 700 }}>③</span><span><strong>Hiroshima → Miyajima + Ferry</strong> — al momento en máquinas de Hiroshima Station. Sin antelación.</span></div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 6 }}><span style={{ color: 'var(--ink-muted)', fontWeight: 700 }}>④</span><span><strong>Nankai Rapi:t → KIX</strong> — al momento en máquinas de Namba Station. No es JR, no aplica.</span></div>
          </div>
        </div>
      </div>

      {/* Separador */}
      <div style={{ borderTop: '2px dashed var(--border-2)', margin: '20px 0 4px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-4)', background: 'var(--bg)', padding: '0 8px', marginTop: -10 }}>Trayectos detallados</span>
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
          <JRPassComparator />
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
