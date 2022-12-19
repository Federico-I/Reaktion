//import { useState } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./Shared/Card";
import ReaktionContext from "../Context/ReaktionContext";

function ReaktionItem({ item }) {
  //Ex. const [rating, setRating] = useState(7);
  //Ex. const [text, setText] = useState("DefaultText");
  const { deleteFeedback, editFeedback } = useContext(ReaktionContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>

      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

ReaktionItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ReaktionItem;
