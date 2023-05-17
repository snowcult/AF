import Card from "./Card.jsx";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return <Card key={i} id={user.id} name={user.name} email={user.email} />;
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
