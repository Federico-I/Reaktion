import React from "react";
import { useState, useContext, useEffect } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";
import RatingSelect from "./RatingSelect";
import ReaktionContext from "../Context/ReaktionContext";

function ReaktionForm() {
  const [text, setText] = useState();
  const [rating, setRating] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState();

  const { addFeedback, editReaktion, updateFeedback } =
    useContext(ReaktionContext);

  useEffect(() => {
    if (editReaktion.edit === true) {
      setBtnDisabled(false);
      setText(editReaktion.item.text);
      setRating(editReaktion.rating);
    }
  }, [editReaktion]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().lenght <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().lenght > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (editReaktion.edit === true) {
        updateFeedback(editReaktion.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

// ReaktionForm.propType = {}; ???

export default ReaktionForm;
