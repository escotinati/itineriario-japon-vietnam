import { BlockAccordion } from './Accordion'

const BADGE_PENDIENTE = (
  <span style={{
    background: 'var(--amber-bg)',
    color: 'var(--amber-text)',
    border: '1px solid #FDE68A',
    borderRadius: 99,
    fontSize: 10,
    fontWeight: 600,
    padding: '1px 8px',
    marginLeft: 8,
    verticalAlign: 'middle',
  }}>pendiente de ubicar</span>
)

function InfoItem({ title, desc }) {
  return (
    <div style={{
      padding: '9px 0',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ fontWeight: 600, fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.4 }}>{title}</div>
      {desc && <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.5, marginTop: 2 }}>{desc}</div>}
    </div>
  )
}

function InfoGroup({ label, items }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{
        fontSize: 11,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.1em',
        color: 'var(--ink-4)',
        marginBottom: 4,
        paddingBottom: 6,
        borderBottom: '2px solid var(--border)',
      }}>{label}</div>
      {items.map((item, i) => <InfoItem key={i} {...item} />)}
    </div>
  )
}

export default function InfoCards() {
  return (
    <section id="info">
      <div className="section-header">
        <div className="section-kicker">Antes de salir</div>
        <h2 className="section-title">Info práctica</h2>
      </div>

      <BlockAccordion title="Antes de viajar" count={6}>
        <InfoGroup label="Documentación & Trámites" items={[
          {
            title: 'Formulario de acceso a Japón (Visit Japan Web)',
            desc: 'Registro online gratuito para declaración de aduana y control migratorio. Rellénalo antes de volar — evita largas esperas en inmigración de Narita',
          },
          {
            title: 'Formulario de acceso a Vietnam',
            desc: 'Sistema de declaración electrónica. Verificar requisitos de visado y entrada actualizados para ciudadanos españoles antes del viaje',
          },
          {
            title: 'Seguro de viaje IATI',
            desc: 'Cobertura médica y de anulación específica para viajes a Asia',
          },
          {
            title: 'eSIM Holafly',
            desc: 'Datos en roaming para Japón y Vietnam sin cambiar SIM física. Activar antes de salir de España',
          },
        ]} />
        <InfoGroup label="Aeropuertos" items={[
          {
            title: 'Fast track en aeropuertos de Vietnam',
            desc: 'Servicio de paso preferente por inmigración, evita las colas. Contratar online antes del vuelo para Da Nang y Hanoi',
          },
          {
            title: 'Vídeo: cómo sacar el ticket de Shinkansen',
            desc: 'Proceso de reserva de plaza en las máquinas de las estaciones JR con JR Pass. Recomendable ver el vídeo antes de llegar a Japón',
          },
        ]} />
      </BlockAccordion>

      <BlockAccordion title="Apps y herramientas" count={3}>
        <InfoGroup label="Restaurantes & Transporte" items={[
          {
            title: 'Tabelog',
            desc: 'La guía de restaurantes de referencia en Japón, con reseñas de locales. Más fiable que Google Maps para buscar dónde comer. Disponible en inglés con filtros por ciudad y tipo de cocina',
          },
          {
            title: 'SmartEX',
            desc: 'App oficial de JR para reservar plazas de Shinkansen con JR Pass. Imprescindible para asegurarse asiento en los trenes de fin de semana y festivos',
          },
          {
            title: 'Tarjeta Suica en la Wallet de iPhone',
            desc: 'La Suica se puede añadir directamente a la Wallet de iOS desde España, sin necesidad de tarjeta física. Metro, JR urbano y konbinis con el móvil',
          },
        ]} />
      </BlockAccordion>

      <BlockAccordion title={<>Vietnam — pendiente de ubicar por ciudad/día{BADGE_PENDIENTE}</>} count={9}>
        <InfoGroup label="Restaurantes con referencia Michelin" items={[
          { title: 'Tam Vi', desc: '' },
          { title: 'Bun Cha Da Kim', desc: '' },
          { title: 'Pho 10 Ly Quoc Su', desc: '' },
        ]} />
        <InfoGroup label="Cafeterías" items={[
          { title: 'Oasis Cafe, Le Van Sy', desc: '' },
        ]} />
        <InfoGroup label="Souvenirs & Shopping" items={[
          { title: 'Souvenirs de Hanoi: Culcat, Saigon Kitsch, Man Moi', desc: '' },
          { title: 'Hoi An: MT Leather, 37 Trung Duc, Hoang Dieu', desc: '' },
          { title: 'Nighki 2hand', desc: '' },
          { title: 'Hana 34', desc: 'Joyería vintage' },
        ]} />
      </BlockAccordion>

      <BlockAccordion title={<>Shopping Japón — pendiente de ubicar{BADGE_PENDIENTE}</>} count={5}>
        <InfoGroup label="Segunda mano — localización por revisar" items={[
          { title: 'Tiendas de lujo de segunda mano', desc: 'Localización por confirmar' },
          { title: 'Kindal', desc: '' },
          { title: '2nd Street', desc: '' },
          { title: 'Bryceland', desc: '' },
          { title: 'Noah', desc: '' },
        ]} />
      </BlockAccordion>
    </section>
  )
}
