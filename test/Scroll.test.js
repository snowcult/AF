import { shallow } from 'enzyme';
import React from 'react';
import Scroll from '../src/components/Scroll.jsx';

it('expect to render Scroll comp', () => {
  const wrapper = shallow(<Scroll />);
  expect(wrapper).toMatchSnapshot();
});
