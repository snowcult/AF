const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "1px solid gray",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
