import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Reaktion",
};

Header.prpoTypes = {
  text: PropTypes.string, // ex: isRequired
};

export default Header; // tryin push
