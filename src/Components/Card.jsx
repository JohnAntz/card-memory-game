import { useState, useEffect } from "react";

export default function Card({ baseUrl }) {
  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, []);
}
