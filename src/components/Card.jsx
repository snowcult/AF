import PropTypes from 'prop-types';
const Card = function ({ id, email, name }) {
  return (
    <div className="c  white bg-black-50  dib br3 pa2 ma3 grow bw2 shadow-4">
      <img
        src={`https://robohash.org/${id}?size=220x220&set=set2`}
        alt="robot"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
Card.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};
export default Card;
