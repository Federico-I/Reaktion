import React from "react";
import { useState, useContext, useEffect } from "react";
import ReaktionContext from "../Context/ReaktionContext";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);

  const { editReaktion } = useContext(ReaktionContext);

  useEffect(() => {
    setSelected(editReaktion.item.rating);
  }, [editReaktion]);

  const handleChange = (e) => {
    setSelected(+e.currtTarget.value);
    select(+e.currtTarget.value);
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;