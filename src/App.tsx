import { useRef } from "react";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function playMusic() {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  function createConfetti(e: React.MouseEvent<HTMLDivElement>) {
    const el = document.createElement("div");
    el.innerText = "🎉";
    el.style.position = "absolute";
    el.style.left = e.clientX + "px";
    el.style.top = e.clientY + "px";
    el.style.fontSize = "20px";
    el.style.animation = "fall 2s linear forwards";
    document.body.appendChild(el);

    setTimeout(() => el.remove(), 2000);
  }

  return (
    <div className="page" onClick={createConfetti}>
      <div className="card">
        <img
          src="https://i.imgur.com/oVvB5h0.jpeg"
          className="glow"
          alt="profil"
        />

        <h2>selam</h2>
        <h1>broken begüm</h1>

        <p>yaşasın evbah yasasın dembuh.</p>

        <div className="links">
          <a href="https://instagram.com/begmilkiimm0" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@bgmilkimm0?is_from_webapp=1&sender_device=pc" target="_blank">TikTok</a>
          <a href="https://open.spotify.com/user/kj53vb35otwjhgpuizj161skd?si=11416fe3f3a14d9c" target="_blank">Spotify</a>
        </div>

        <button onClick={playMusic} className="musicBtn">
          🎵 müziği aç (Deniz Seki - Aşk)
        </button>

        <audio
          ref={audioRef}
          src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_2f6c1c0c2b.mp3"
        />
      </div>

      {/* kalpler */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="heart">💖</div>
      ))}

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

        .musicBtn {
          margin-top: 15px;
          padding: 10px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
        }

        .heart {
          position: absolute;
          top: -50px;
          font-size: 20px;
          animation: fall 6s linear infinite;
        }

        @keyframes fall {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
