import { useRef } from "react";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function startMusic() {
    if (audioRef.current) {
      audioRef.current.volume = 0.7;
      audioRef.current.play();
    }
  }

  return (
    <div className="page" onClick={startMusic}>
      {/* SENİN SİTEN BURADA AYNI */}

      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_2f6c1c0c2b.mp3"
        loop
      />
    </div>
  );
}
