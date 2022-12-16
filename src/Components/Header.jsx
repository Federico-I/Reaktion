import PropTypes from "prop-types";

function Header(text, bgColor, textColor) {
  const headerStyles = {
    bgColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Reaktion",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6",
};

Header.prpoTypes = {
  text: PropTypes.string, // ex: isRequired
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
