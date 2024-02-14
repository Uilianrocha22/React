import PropTypes from "prop-types";
import useStock from "../hooks/useStock";
import { useNavigate } from "react-router-dom";

DeleteButton.propTypes = {
  itemId: PropTypes.number,
  itemName: PropTypes.string,
};

export default function DeleteButton({ itemId, itemName }) {
  const { deleteItem } = useStock();
  const navigate = useNavigate();

  function handleDelete() {
    if (confirm(`Tem certeza que deseja excluir o item! ${itemName}?`)) {
      deleteItem(itemId);
      navigate("/items");
    }
  }

  return (
    <button className="button is-danger is-small" onClick={handleDelete}>
      Excluir
    </button>
  );
}
