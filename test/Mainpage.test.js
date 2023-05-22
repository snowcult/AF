import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../src/components/pages/MainPage';

describe('MainPage component', () => {
  let wrapper;
  const mockProps = {
    searchField: '',
    onSearchChange: jest.fn(),
    robots: [],
    isPending: false,
    onRequestRobots: jest.fn(),
  };

  wrapper = shallow(<MainPage {...mockProps} />);

  it('renders Main page without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
