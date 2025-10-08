export default function Hero({ title, bg }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1>{title}</h1>
    </div>
  );
}
