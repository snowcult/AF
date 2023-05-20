import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from '../src/components/Card.jsx';

it('expect to render Card comp', () => {
  expect(shallow(<Card />).length).toBe(1);
});
