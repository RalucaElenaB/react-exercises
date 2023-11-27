import PropTypes from 'prop-types';
// import "./SearchBar.modules.css";

function SearchBar({ isVisible, text, price, children }) {
  const helpText = text.length > 10 && (
    <p>The text in longer than 10 charactere</p>
  );
  return (
    <div className="SearchBar">
      {isVisible ? 'Show text' : ''}
      {helpText}
      <h3>{text}</h3>Search
      <p>{price}</p>
      {children}
    </div>
  );
}

SearchBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default SearchBar;
