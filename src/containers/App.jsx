import CardList from "../components/CardList.jsx";
import SearchBox from "../components/SearchBox.jsx";
import { Component } from "react";
import Scroll from "../components/Scroll.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      this.setState({ robots: [...data] });
    } catch (e) {
      console.error(e.message);
    }
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value.toLowerCase() });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField);
    });
    if (this.state.robots.length === 0) {
      return (
        <div className="tc">
          <h2 className="red">Loading...</h2>;
        </div>
      );
    } else {
      return (
        <div className="tc">
          <h1 className="tc f-5 white ">AiFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
