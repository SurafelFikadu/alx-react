import App from './App';
import { shallow } from 'enzyme';
import React from 'react';

const wrapper = shallow(<App />);

test('checkin crashing issue', () => {
  shallow(<App />);
});

test('checkin header', () => {
  expect(wrapper.find('header.App-header').exists()).toEqual(true);
});
test('checkin body', () => {
  expect(wrapper.find('body.App-body').exists()).toEqual(true);
});
test('checkin footer', () => {
  expect(wrapper.find('footer.App-footer').exists()).toEqual(true);
});