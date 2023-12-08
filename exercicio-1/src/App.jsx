import react from "../public/react.svg";
import "./index.css";

function App() {
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={react} className="logo" alt="react logo" />
      </a>
      <h1>React</h1>
      <p>A biblioteca para interfaces de usúarios web e nativas.</p>

      <div>
        <button>Aprenda React</button>
        <button>Referência da API</button>
      </div>
      <hr />
      <h2>Crie interfaces de usúario de componentes</h2>
      <p>
        React permite que você construa interfaces de usúarios a partir de
        pedaços individuais chamados componentes
      </p>
      <hr />
      <h2>Escreva componentes com código e marcação</h2>
      <p>
        Componentes React são funções JavaScript. A sintaxe de marcação é
        chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo
        React.
      </p>
      <hr />
      <h2>Próximos passos</h2>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>
      </ul>
    </div>
  );
}

export default App;

// <a href="https://vitejs.dev" target="_blank">
// <img src={viteLogo} className="logo" alt="Vite logo" />
// </a>
