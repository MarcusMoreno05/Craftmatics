export default function TextBlock({ text }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <p style={{ maxWidth: '600px', fontSize: '1.2rem', textAlign: 'center' }}>
        {text}
      </p>
    </div>
  );
}