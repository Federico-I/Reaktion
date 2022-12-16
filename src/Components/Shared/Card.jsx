import { PropTypes } from "prop-types";

function Card({ children, reverse }) {
  return <div className="card">children</div>;
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;

// conditional class example
// style={{backgroundColor: reveerse ? "rgba(0,0,0,0.4)",
// color: reverse? "#fff" : "#000",}}
