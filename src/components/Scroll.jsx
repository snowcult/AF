import PropTypes from 'prop-types';
const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid gray',
      }}
    >
      {children}
    </div>
  );
};
Scroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Scroll;