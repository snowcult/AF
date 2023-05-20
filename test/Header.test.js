import { shallow } from 'enzyme';
import React from 'react';
import Header from '../src/components/Header.jsx';

it('expect to render Header comp', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
