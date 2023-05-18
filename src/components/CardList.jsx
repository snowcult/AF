import Card from './Card.jsx';
import PropTypes from 'prop-types';
const CardList = ({ robots }) => {
  return (
    <div className="tc">
      {robots.map((item, i) => (
        <span key={i}>
          <Card id={item.id} name={item.name} email={item.email} />;
        </span>
      ))}
    </div>
  );
};
CardList.propTypes = {
  robots: PropTypes.array.isRequired,
};
export default CardList;
