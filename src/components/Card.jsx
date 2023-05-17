const Card = function ({ id, email, name }) {
  return (
    <div className="tc  white bg-black-50  dib br3 pa2 ma3 grow bw2 shadow-4 content-center ">
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
export default Card;
