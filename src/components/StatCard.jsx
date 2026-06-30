export default function StatCard({ value, label, emoji, highlight = false }) {
  return (
    <div style={{
      background: '#161b22',
      border: `1px solid ${highlight ? '#58a6ff50' : '#30363d'}`,
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center',
      flex: 1
    }}>
      {emoji && <div style={{ fontSize: '28px', marginBottom: '8px' }}>{emoji}</div>}
      <div style={{
        fontSize: '36px', fontWeight: 800,
        color: highlight ? '#58a6ff' : '#e6edf3',
        marginBottom: '4px'
      }}>
        {value}
      </div>
      <div style={{ color: '#8b949e', fontSize: '14px' }}>{label}</div>
    </div>
  );
}