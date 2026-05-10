import Badge from './Badge'

export default function DayCard({ label, title, desc, tags = [] }) {
  return (
    <div className="day">
      <div className="day-label">{label}</div>
      <div className="day-body">
        <div className="day-title">
          {title}
          {tags.map((t, i) => <Badge key={i} type={t.type} text={t.text} />)}
        </div>
        <div className="day-desc">{desc}</div>
      </div>
    </div>
  )
}
