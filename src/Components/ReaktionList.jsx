// import { useState } from "react";
import { motion, AnimatePrescence } from "framer-motion";
import { useContext } from "react/cjs/react.production.min";
import ReaktionItem from "./ReaktionItem";
import Sppiner from "./Shared/sppiner";
import ReaktionContext from "../Context/ReaktionContext";
//import PropTypes from "prop-types";

function ReaktionList() {
  const { feedback, Loading } = useContext(ReaktionContext);

  if (!Loading && (!feedback || feedback.lenght() === 0)) {
    return <p>There is no information to display yet.</p>;
  }

  return Loading ? (
    <Sppiner />
  ) : (
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
              // handleDelete={handleDelete} /// check 
            />
          </motion.div>
        ))}
      </AnimatePrescence>
    </div>
  );
}

export default ReaktionList;
