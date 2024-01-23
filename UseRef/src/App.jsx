import { useRef, useState } from "react";

import RefExample from "./refExample";

function App() {
  let variable = 0;
  const [state, setState] = useState(0);
  const ref = useRef(0);

  const showValues = () => {
    alert(`
    Variável: ${variable},
    Ref: ${ref.current},
    State: ${state}

    `);
  };

  return (
    <div>
      <h2>Examplo de UseRef com o DOOM</h2>
      <RefExample />

      <h2 className="secondH2">Conhecendo o UseRef</h2>
      <hr />
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button onClick={() => variable++}>Almentar Variavel</button>

      <button onClick={() => ref.current++}>Almentar Ref</button>

      <button onClick={() => setState((state) => state + 2)}>
        Almentar State
      </button>
      <hr />

      <button onClick={showValues}>Exibir valores</button>
    </div>
  );
}

export default App;
