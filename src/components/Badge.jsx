const typeMap = {
  warn: 'badge-warn',
  tip: 'badge-tip',
  info: 'badge-info',
  red: 'badge-red',
  ok: 'badge-ok',
}

export default function Badge({ type, text }) {
  return <span className={`badge ${typeMap[type] || 'badge-info'}`}>{text}</span>
}
