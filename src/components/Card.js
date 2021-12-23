import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { loadLeague } from '../redux/pages/homeReducer';
import './card.css';

const LeagueCard = ({ name, logo, id }) => {
  const dispatch = useDispatch();

  const loadStanding = (id) => dispatch(loadLeague(id));

  return (
    <div className="card-container">
      <Link className="links" to={`/leaderboard/${name}`} onClick={() => loadStanding(id)}>
        <div className="card-items">
          <img className="league-logo" src={logo} alt="league-logo" />
          <h1 className="card-title">{name}</h1>
        </div>
      </Link>
    </div>
  );
};

LeagueCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default LeagueCard;
