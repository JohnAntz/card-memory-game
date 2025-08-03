import Card from "./Components/Card";
import Score from "./Components/Score";

function App() {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon-species/1/";
  return (
    <div className="bg-slate-700 h-dvh w-full flex flex-col items-center  font-poppins">
      <header>
        {" "}
        <h1 className="text-gray-100 text-2xl sm:text-4xl mt-10">
          Pokemon memory game!
        </h1>
        <Score />
      </header>
      <main>
        <Card baseUrl={baseUrl} />
      </main>
    </div>
  );
}

export default App;
