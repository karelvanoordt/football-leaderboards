import React from 'react';
import Home from '../Home';

const home = (
  <Home />
);

it('renders correctly', () => {
  expect(home).toMatchSnapshot();
});
