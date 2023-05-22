import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from '../src/constants.js';
import * as reducers from '../src/reducers/reducers.js';
import * as actions from '../src/actions/actions.js';

describe('searchRobots', function () {
  const initalStateSearch = { searchField: '' };
  it('should return the initail state', () => {
    expect(reducers.searchRobot(undefined, {})).toEqual({ searchField: '' });
  });
  it('should handle Change_SEARCHFIELD', () => {
    expect(
      reducers.searchRobot(initalStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'one10',
      })
    ).toMatchObject({ searchField: 'one10' });
  });
});

describe('requestRobots', function () {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
  };
  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle request_Robots_Pending', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ robots: [], isPending: true, error: '' });
  });

  it('should handle request_robots_success', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{ id: 1, name: 'jon', email: 'jon@jo.com' }],
      })
    ).toStrictEqual({
      robots: [{ id: 1, name: 'jon', email: 'jon@jo.com' }],
      isPending: false,
      error: '',
    });
  });
});
