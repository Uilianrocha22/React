import { useState } from "react";
import TextInput from "./TextInput";

export default function NewGameForm({ addPoke }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    addPoke({ title, cover });
    setTitle("");
    setCover("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput id="Titulo:" label="Nome:" value={title} setValue={setTitle} />
      <TextInput id="Capa:" label="Imagem:" value={cover} setValue={setCover} />
      <button type="submit">Adicionar a biblioteca</button>
    </form>
  );
}
