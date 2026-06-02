export default function App() {
  return (
    <div className="page">
      <div className="card">
        <img
          src="https://i.imgur.com/oVvB5h0.jpeg"
          className="glow"
          alt="profil"
        />

        <h2>selam</h2>
        <h1>ben broken begüm</h1>

        <p>hepinizin amk.</p>

        <div className="links">
          <a href="https://instagram.com/begmilkiimm0" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@bgmilkimm0?is_from_webapp=1&sender_device=pc" target="_blank">TikTok</a>
          <a href="https://open.spotify.com/user/kj53vb35otwjhgpuizj161skd?si=11416fe3f3a14d9c" target="_blank">Spotify</a>
        </div>
      </div>

      {/* kalpler */}
      <div className="hearts">💖 💕 💗 💓 💞 💖 💕</div>

      <style>{`
        body {
          margin: 0;
          overflow: hidden;
        }

        .page {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb);
          font-family: Arial;
          position: relative;
        }

        .card {
          width: 320px;
          padding: 25px;
          border-radius: 20px;
          text-align: center;
          color: white;
          background: rgba(0,0,0,0.2);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          z-index: 2;
        }

        .glow {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid white;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 10px pink; }
          50% { box-shadow: 0 0 30px hotpink; }
          100% { box-shadow: 0 0 10px pink; }
        }

        .links a {
          display: block;
          margin: 10px 0;
          padding: 10px;
          border-radius: 10px;
          background: rgba(255,255,255,0.2);
          color: white;
          text-decoration: none;
        }

        .hearts {
          position: absolute;
          bottom: 20px;
          font-size: 22px;
          animation: float 4s infinite linear;
        }

        @keyframes float {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-600px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
