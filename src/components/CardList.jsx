import Card from "./Card.jsx";
import PropTypes from "prop-types";
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((item, i) => (
        <div key={i}>
          <Card id={item.id} name={item.name} email={item.email} />;
        </div>
      ))}
    </div>
  );
};
CardList.propTypes = {
  robots: PropTypes.array.isRequired,
};
export default CardList;
