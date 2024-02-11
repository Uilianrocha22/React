import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const StockContext = createContext({});

StockContextProvider.propTypes = {
  children: PropTypes.node,
};

// item :
// { name, description, quantity, price, category, createdAt, updatedAt }

export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    // crio um local storage para salvar os itens
    const storedItems = localStorage.getItem("uilian-react-stock");

    // se tiver vazio não retorno nada
    if (!storedItems) return [];

    // converto o item de string para objeto
    const items = JSON.parse(storedItems);

    // atualizo as datas manualmente do item criado e da atualização
    items.forEach((item) => {
      item.createdAt = new Date(item.createdAt);
      item.updateAt = new Date(item.updatedAt);
    });

    // retorno o item
    return items;
  });

  function addItem(item) {
    setItems((currentState) => {
      // crio o novo estado pegando o item e todos itens salvos
      const updatedItems = [item, ...currentState];

      // salvo o item no local storage
      localStorage.setItem("uilian-react-stock", JSON.stringify(updatedItems));

      // retorno todos itens
      return updatedItems;
    });
  }

  const stock = {
    items,
    addItem,
  };

  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
