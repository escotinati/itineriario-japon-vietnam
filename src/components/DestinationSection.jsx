import Alert from './Alert'
import DayCard from './DayCard'
import { SectionAccordion, BlockAccordion } from './Accordion'

export default function DestinationSection({ dest, defaultOpen = false }) {
  const { id, country, stage, name, subtitle, dates, alerts, days, extras, food } = dest

  return (
    <section id={id}>
      <SectionAccordion
        kicker={`${country} · ${stage}`}
        title={name}
        subtitle={subtitle}
        dates={dates}
        defaultOpen={defaultOpen}
      >
        {alerts.map((a, i) => <Alert key={i} type={a.type} text={a.text} />)}

        <BlockAccordion title="Itinerario" count={days.length} defaultOpen={true}>
          <div className="days">
            {days.map((d, i) => <DayCard key={i} {...d} />)}
          </div>
        </BlockAccordion>

        {extras && extras.length > 0 && (
          <BlockAccordion title="Extras recomendados" count={extras.length} defaultOpen={false}>
            <div className="days">
              {extras.map((e, i) => <DayCard key={i} {...e} />)}
            </div>
          </BlockAccordion>
        )}

        {food && food.length > 0 && (
          <BlockAccordion title="Gastronomía" count={food.length} defaultOpen={false}>
            <div className="food-grid">
              {food.map((f, i) => (
                <div className="food-card" key={i}>
                  <div className="food-name">{f.name}</div>
                  <div className="food-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </BlockAccordion>
        )}
      </SectionAccordion>
    </section>
  )
}
