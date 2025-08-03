import { useState, useEffect } from "react";

export default function Card({ URL }) {
  const [data, setData] = useState(null);

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
  }, []);

  return data ? (
    <div className="flex flex-col items-center bg-slate-200 p-6 rounded-xl border-4 border-slate-400">
      <img src={data.sprites.front_default} alt="sprite" />
      <h3 className="text-slate-900 text-xl sm:text-2xl">
        {data.species.name}
      </h3>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
