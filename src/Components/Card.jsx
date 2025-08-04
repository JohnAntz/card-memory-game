import { useState, useEffect } from "react";

export default function Card({
  URL,
  handleGameOver,
  setScore,
  gameOver,
  shuffleArray,
}) {
  const [data, setData] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    if (isClicked) {
      handleGameOver();
    } else {
      setScore((prev) => prev + 1);
      setIsClicked(true);
      shuffleArray();
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
      className="hover:cursor-pointer flex flex-col items-center bg-slate-200 p-6 rounded-xl border-4 border-sky-600">
      <img src={data.sprites.front_default} alt="sprite" />
      <h3 className="text-slate-900 text-xl sm:text-2xl">
        {data.species.name.toUpperCase()}
      </h3>
    </div>
  ) : (
    <div className="text-2xl text-gray-200">Loading...</div>
  );
}
