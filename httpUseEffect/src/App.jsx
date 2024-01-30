import { useState } from "react";

import "./App.css";

// function que faz a requisição a API dos pokemon

async function fetchPokemon() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon").then((result) =>
    result.json()
  );
  // const data = await response.json();
  return data.results;
}

export default function App() {
  const [pokemon, setPokemon] = useState([]);

  const [pokemonShown, setPokemonShown] = useState(null);

  // Posso substituir o UseEffect por uma verificação com (IF) que se tiver vazio ele tbm só vai chame uma unica vez...
  //............................................

  if (pokemon.length === 0) {
    fetchPokemon().then((result) => {
      console.log("requisição realizada");
      console.log(result);
      setPokemon(result);
    });
  }

  // useEffect(() => {
  //   fetchPokemon().then((results) => {
  //     console.log("requisição realizada");
  //     console.log(results);
  //     setPokemon(results);
  //   });
  // }, [url]);

  async function showDatails(url) {
    const data = await fetch(url).then((result) => result.json());
    console.log("pokemon encontrado");
    console.log(data);
    setPokemonShown(data);
  }

  return (
    <div>
      <div className="app">
        <div>
          <h2>Pokemons</h2>
          <ul className="pokemon">
            {pokemon.map((poke) => (
              <li key={poke.name}>
                <span>{poke.name}</span>
                <button onClick={() => showDatails(poke.url)}>
                  Ver detalhes
                </button>
              </li>
            ))}
          </ul>
        </div>

        {pokemonShown && (
          <div className="pokeInfo">
            <h2>{pokemonShown.name}</h2>
            <img src={pokemonShown.sprites.front_default} alt="" />
            <div className="stat">
              <b>Tipo: </b>
              {pokemonShown.types.map(({ type }) => (
                <span key={type.name}>{type.name} </span>
              ))}
            </div>
            <div className="stat">
              <b>Altura: </b>
              {pokemonShown.height / 10} m
            </div>
            <div className="stat">
              <b>Peso: </b>
              {pokemonShown.weight / 10} Kg
            </div>
            <div className="stat">
              <b>Atributos</b>
              <ul>
                {pokemonShown.stats.map(({ base_stat, stat }) => (
                  <li key={stat.name}>
                    {stat.name}: {base_stat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="stat">
              <b>Habilidades</b>
              <ul>
                {pokemonShown.abilities.map(({ ability, is_hidden }) => (
                  <li key={ability.name}>
                    {ability.name}
                    {is_hidden && " (secreta)"}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
