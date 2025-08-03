import Card from "./Components/Card";
import Score from "./Components/Score";

function App() {
  return (
    <div className="bg-slate-700 h-dvh w-full flex flex-col items-center  font-poppins">
      <header>
        {" "}
        <h1 className="text-gray-200 text-2xl sm:text-4xl mt-10">
          Pokemon memory game!
        </h1>
        <Score />
      </header>
      <main></main>
    </div>
  );
}

export default App;
