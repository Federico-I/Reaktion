import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./Shared/Card";

function ReaktionItem({ item, handleDelete }) {
  //Ex. const [rating, setRating] = useState(7);
  //Ex. const [text, setText] = useState("DefaultText");

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

ReaktionItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ReaktionItem;
