import { shallow } from 'enzyme';
import React from 'react';
import CardList from '../src/components/CardList.jsx';

it('expect to render CardList comp', () => {
  const mockRobots = [{ id: 1, name: 'jon', username: 'ss', email: 'san@si' }];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
