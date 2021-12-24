import React from 'react';
import Leaderboard from '../Leaderboard';

const mission = (
  <Leaderboard />
);

it('renders correctly', () => {
  expect(Leaderboard).toMatchSnapshot();
});
