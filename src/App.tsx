import { useRef } from "react";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function startMusic() {
    audioRef.current?.play();
  }

  return (
    <div className="page" onClick={startMusic}>
      <div className="card">
        <img
          src="https://i.imgur.com/oVvB5h0.jpeg"
          className="glow"
          alt="profil"
        />

        <h2>selam</h2>
        <h1>broken begüm</h1>

        <p>dünyama hoş geldiniz.</p>

        <div className="links">
          <a href="https://instagram.com/begmilkiimm0" target="_blank">Instagram</a>
          <a href="https://tiktok.com" target="_blank">TikTok</a>
          <a href="https://spotify.com" target="_blank">Spotify</a>
        </div>

        <p style={{ fontSize: 12, opacity: 0.7 }}>
          ekrana tıkla 🎵
        </p>
      </div>

      {/* 💖 kalpler */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: Math.random() * 100 + "vw",
            animationDuration: 3 + Math.random() * 4 + "s",
          }}
        >
          💖
        </div>
      ))}

      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_2f6c1c0c2b.mp3"
      />

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
          background: linear-gradient(135deg, #ff9a9e, #fbc2eb);
          font-family: Arial;
          position: relative;
        }

        .card {
          width: 320px;
          padding: 25px;
          border-radius: 20px;
          text-align: center;
          color: white;
          background: rgba(0,0,0,0.25);
          backdrop-filter: blur(12px);
          z-index: 2;
        }

        .glow {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid white;
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

        .heart {
          position: absolute;
          top: -50px;
          font-size: 18px;
          animation: fall linear forwards;
        }

        @keyframes fall {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
