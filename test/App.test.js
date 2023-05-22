import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from 'src/containers/App.tsx';

const mockStore = configureStore([]);
const initialState = { robots: [], searchField: '' };
const store = mockStore(initialState);

describe('App component', function () {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it('expect to render App comp', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
