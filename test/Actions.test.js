import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING,
} from '../src/constants.js';
import * as actions from '../src/actions/actions.js';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);
describe('actions set search field', function () {
  it('should create action for search robots', () => {
    const text = 'ai';
    const expectedAction = { type: CHANGE_SEARCH_FIELD, payload: text };

    expect(actions.setSearchField(text)).toStrictEqual(expectedAction);
  });
});
