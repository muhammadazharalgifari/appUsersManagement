import React, { useEffect, useState } from "react";

const LatihanuseEffect = () => {
  const [count, setCount] = useState(1);

  function handleTambah() {
    setCount((prev) => (prev = prev + 1));
  }

  useEffect(() => {
    console.log("tampil");
    // dependency array kosong untuk merender sekali
    // ketika array nya diisi dengan (misalnya : count) akan merender mengikuti klik di tambah
  }, [count]);

  return (
    <div className="px-4">
      <h1>Latihan useEffect {count}</h1>
      <button
        className="bg-black text-white w-40 h-12 rounded-lg"
        onClick={handleTambah}
      >
        Tambah
      </button>
    </div>
  );
};

export default LatihanuseEffect;
