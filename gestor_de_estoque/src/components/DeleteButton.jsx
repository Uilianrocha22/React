import PropTypes from "prop-types";
import useStock from "../hooks/useStock";

DeleteButton.propTypes = {
  itemId: PropTypes.number,
  itemName: PropTypes.string,
};

export default function DeleteButton({ itemId, itemName }) {
  const { deleteItem } = useStock();

  function handleDelete() {
    if (confirm(`Tem certeza que deseja excluir o item! ${itemName}?`)) {
      deleteItem(itemId);
    }
  }

  return (
    <button className="button is-danger is-small" onClick={handleDelete}>
      Excluir
    </button>
  );
}
