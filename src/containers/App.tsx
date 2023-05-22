import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { requestRobots, setSearchField } from '../actions/actions.js';
import MainPage from '../components/pages/Mainpage.jsx';
import React from 'react';

interface IState {
  searchRobots: { searchField: string };
  requestRobots: { robots: string[]; error: string; isPending: boolean };
}
type dispatchs = {
  onRequestRobots: () => void;
};

const mapStateToProps = (state: IState) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      return dispatch(setSearchField(event.target.value));
    },
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

function App(props: Element) {
  return <MainPage {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
