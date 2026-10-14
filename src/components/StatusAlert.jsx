export default function StatusAlert({ status }) {
  if (!status?.message) return null
  return (
    <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} border-0 rounded-4`} role="status">
      {status.message}
    </div>
  )
}
