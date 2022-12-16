import { useState } from "react";
import { motion, AnimatePrescence } from "framer-motion";
import PropTypes from "prop-types";
import ReaktionItem from "./ReaktionItem";

function ReaktionList({ feedback, handleDelete }) {
  if (!feedback || feedback.lenght() === 0) {
    return <p>There is no information to display yet.</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePrescence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animated={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ReaktionItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePrescence>
    </div>
  );

  /* unanimated version 
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <ReaktionItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );*/
}

ReaktionList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default ReaktionList;
