import CardList from "../components/CardList.jsx";
import SearchBox from "../components/SearchBox.jsx";
import { useState, useEffect } from "react";
import Scroll from "../components/Scroll.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSeField] = useState("");

  useEffect(() => {
    return async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setRobots(data);
      } catch (e) {
        console.error(e.message);
      }
    };
  }, []);

  const onSearchChange = (e) => {
    setSeField(e.target.value.toLowerCase());
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField);
  });

  return !robots.length ? (
    <div className="tc">
      <h2 className="red">Loading...</h2>;
    </div>
  ) : (
    <div className="tc">
      <h1 className="tc f-5 white ">AiFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}
export default App;
