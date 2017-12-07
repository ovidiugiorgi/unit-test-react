import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('has two paragraphs', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('p')).toHaveLength(2);
});

it('renders two Sum components', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('Sum')).toHaveLength(2);
});