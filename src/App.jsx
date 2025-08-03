import { useState, useEffect } from "react";
import Card from "./Components/Card";
import Score from "./Components/Score";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);
  const pokeID = [715, 445, 887, 697, 612, 784, 706, 149, 381, 380, 621, 373];
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;

  function handleGameOver() {
    setGameOver(true);
  }
  useEffect(() => {
    if (gameOver === true) {
      setScore(0);
      setGameOver(false);
    }
  }, [gameOver]);

  function shuffleArray() {
    const newArray = [...pokeID];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  return (
    <div className="bg-slate-700 min-h-screen w-full  flex flex-col items-center gap-8 font-poppins">
      <header>
        {" "}
        <h1 className="text-gray-100 text-2xl sm:text-4xl mt-10">
          Pokemon memory game
        </h1>
        <Score score={score} record={record} />
      </header>
      <main className="grid gap-4 mb-10 sm:grid-cols-3 lg:grid-cols-4">
        {shuffleArray(pokeID).map((id) => (
          <Card
            key={id}
            URL={`${baseUrl}${id}`}
            pokeID={pokeID}
            handleGameOver={handleGameOver}
            setScore={setScore}
            gameOver={gameOver}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
