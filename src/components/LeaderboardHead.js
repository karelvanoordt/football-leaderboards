import React from 'react';
import PropTypes from 'prop-types';

const LeaderboardHeader = ({ id, year }) => {
  const seasons = [2020, 2019, 2018, 2017, 2016, 2015];

  return (
    <div className="lead-head-cont">
      <div className="lead-title">
        <h2>Football360</h2>
      </div>
      <div className="year-cont">
        <h3 className="lead-years">
          Choose year:
          {' '}
        </h3>
        <select onChange={(e) => year(id, e.target.value)}>
          {seasons.map((season) => (
            <option key={season} value={season}>
              {' '}
              {season}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

LeaderboardHeader.propTypes = {
  year: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default LeaderboardHeader;
