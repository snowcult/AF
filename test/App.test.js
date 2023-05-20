import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../src/containers/App.jsx';

it('expect to render App comp', () => {
  const mockStore = { robots: [], searchField: '' };
  const wrapper = shallow(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
