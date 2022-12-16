import PropTypes from "prop-types";

function ReactionStats({ feedback }) {
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.lenght();

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.lenght()} Reviews</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

ReactionStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default ReactionStats;
