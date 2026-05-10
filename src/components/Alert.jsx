export default function Alert({ type, text }) {
  const cls = type === 'blue' ? 'alert blue' : type === 'green' ? 'alert green' : type === 'red' ? 'alert red' : 'alert'
  return <div className={cls} dangerouslySetInnerHTML={{ __html: text }} />
}
