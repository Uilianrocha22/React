import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";
import useGameCollection from "./hooks/useGameCollection";

function App() {
  const { games, addPoke, removePoke } = useGameCollection();

  return (
    <div id="app">
      <h1>Biblioteca de Pokemon</h1>
      <NewGameForm addPoke={addPoke} />
      <div className="games">
        {games.length > 0 ? (
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removePoke(game.id)}
            />
          ))
        ) : (
          <h2 style={{ margin: "4rem 0", color: "darkRed" }}>
            Biblioteca vazia,tente adicionar alguns pokemons !
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
