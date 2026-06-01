export default function App() {
  const isim = "Elif";

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg,#ff9a9e,#fad0c4)"
    }}>
      
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "20px",
        textAlign: "center",
        width: "300px",
        color: "black",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
      }}>
        
        <h1>hoş geldin 👋</h1>
        <h2>{isim}</h2>

        <p>kişiye özel mini site ✨</p>

      </div>

    </div>
  );
}