import React from 'react';
import Home from '../Home';

const mission = (
  <Home />
);

it('renders correctly', () => {
  expect(Home).toMatchSnapshot();
});
