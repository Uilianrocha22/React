import { useState } from "react";

export default function useGameCollection() {
  const stored = localStorage.getItem("uil-poke-lib");

  const [games, setGames] = useState(() => {
    if (!stored) return [];
    return JSON.parse(stored);
  });

  function addPoke({ title, cover }) {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((state) => {
      if (!title || !cover) {
        alert("Preencha os dados!");
        if (!stored) return [];
        return JSON.parse(stored);
      }

      const newState = [...state, game];
      localStorage.setItem("uil-poke-lib", JSON.stringify(newState));

      return newState;
    });
  }

  function removePoke(id) {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      localStorage.setItem("uil-poke-lib", JSON.stringify(newState));
      return newState;
    });
  }

  return { games, addPoke, removePoke };
}
