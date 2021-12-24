import React from 'react';
import Leaderboard from '../Leaderboard';

const leaderboard = (
  <Leaderboard />
);

it('renders correctly', () => {
  expect(leaderboard).toMatchSnapshot();
});
