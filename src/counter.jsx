import { useState } from "react";

function Counter() {
  const [sayac, setSayac] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>insta demo 🚀</h1>

      <p>sayı: {sayac}</p>

      <button onClick={() => setSayac(sayac + 1)}>
        arttır
      </button>
    </div>
  );
}

export default Counter;