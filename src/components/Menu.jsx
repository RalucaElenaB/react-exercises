import PropTypes from 'prop-types';

// const Menu = (props) => { props.items }

const Menu = ({ items }) => {
  return (
    <ul className="Menu">
      <h3>Menu</h3>
      {items.map(item => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};

Menu.propTypes = {
  items: PropTypes.array,
};

export default Menu;
