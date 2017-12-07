import React from 'react';
import ReactDOM from 'react-dom';
import Sum from './Sum';

import { shallow, mount, render } from 'enzyme';

it('displays 5 for 2 and 3 props', () => {
  const wrapper = shallow(<Sum a={2} b={3} />);

  expect(wrapper.find('p').text()).toBe('The sum of 2 + 3 is 5');
});

it('renders two buttons', () => {
  const wrapper = shallow(<Sum />);

  expect(wrapper.find('button')).toHaveLength(2);
});

it('multiplies the result when the 1st btn is clicked', () => {
  const wrapper = shallow(<Sum a={2} b={3} />);

  wrapper.find('.multiply').simulate('click');

  expect(wrapper.find('p').text()).toBe('The sum of 2 + 3 is 10');
});

it('squares the result when the 2nd btn is clicked - shallow', () => {
  const wrapper = shallow(<Sum a={2} b={3} />);

  wrapper.find('.square').simulate('click');

  expect(wrapper.find('p').text()).toBe('The sum of 2 + 3 is 25');
});

it('squares the result when the 2nd btn is clicked - full', () => {
  const wrapper = mount(<Sum a={2} b={3} />);

  wrapper.find('.square').simulate('click');

  expect(wrapper.state('value')).toBe(25);
});