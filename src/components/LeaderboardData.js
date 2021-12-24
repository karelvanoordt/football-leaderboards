import React from 'react';
import PropTypes from 'prop-types';
import standingReducer from '../redux/pages/standingsReducer';

const LeaderboardData = ({ teamName, teamStat }) => {
  const stat = teamStat.filter((stats) => stats.name !== 'rankChange');
  return (
    <tr className="t-row">
      <td className="team-name">{teamName}</td>
      {stat.map((stat) => <td key={stat.name}>{stat.value}</td>)}
    </tr>
  );
};

LeaderboardData.propTypes = {
  teamName: PropTypes.string.isRequired,
  teamStat: PropTypes.arrayOf(standingReducer).isRequired,
};
export default LeaderboardData;
