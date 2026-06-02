export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: 320,
          padding: 25,
          borderRadius: 20,
          textAlign: "center",
          color: "white",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        <img
          src="https://i.imgur.com/oVvB5h0.jpeg"
          alt="profil"
          style={{
            width: 110,
            height: 110,
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid white",
            marginBottom: 10,
          }}
        />

        <h2>selam canım</h2>
        <h1 style={{ marginTop: 5 }}>ben broken begüm</h1>

        <p style={{ opacity: 0.8 }}>welcome to my world ✨</p>

        <div style={{ marginTop: 25 }}>
          <a
            href="https://instagram.com/begmilkiimm0"
            target="_blank"
            style={linkStyle}
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@bgmilkimm0?is_from_webapp=1&sender_device=pc"
            target="_blank"
            style={linkStyle}
          >
            TikTok
          </a>

          <a
            href="https://open.spotify.com/user/kj53vb35otwjhgpuizj161skd?si=11416fe3f3a14d9c"
            target="_blank"
            style={linkStyle}
          >
            Spotify
          </a>
        </div>
      </div>
    </div>
  );
}

const linkStyle = {
  display: "block",
  margin: "10px 0",
  padding: "10px",
  borderRadius: 10,
  background: "rgba(255,255,255,0.15)",
  color: "white",
  textDecoration: "none",
};
