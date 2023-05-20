import { shallow } from 'enzyme';
import React from 'react';
import Card from '../src/components/Card.jsx';
import toJson from 'enzyme-to-json';

it('expect to render Card comp', () => {
  const wrapper = shallow(<Card />);
  expect(wrapper).toMatchSnapshot();
});
