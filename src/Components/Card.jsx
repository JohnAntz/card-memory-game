import { useState, useEffect } from "react";

export default function Card({ URL, handleGameOver, setScore, gameOver }) {
  const [data, setData] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    if (isClicked) {
      handleGameOver();
    } else {
      setScore((prev) => prev + 1);
      setIsClicked(true);
    }
  }
  useEffect(() => {
    if (gameOver === true) {
      setIsClicked(false);
    }
  }, [gameOver]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data.name);
        console.log(data.sprites.front_default);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, [URL]);

  return data ? (
    <div
      onClick={handleClick}
      className="flex flex-col items-center bg-slate-200 p-6 rounded-xl border-4 border-sky-600">
      <img src={data.sprites.front_default} alt="sprite" />
      <h3 className="text-slate-900 text-xl sm:text-2xl">
        {data.species.name}
      </h3>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
