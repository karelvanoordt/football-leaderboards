import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';
import { getStanding, getStandingByYear } from '../redux/pages/standingsReducer';
import { getLeagues } from '../redux/pages/homeReducer';
import LeaderboardHeader from './LeaderboardHead';
import LeaderboardData from './LeaderboardData';
import './leaderboard.css';

const Leaderboard = () => {
  let league = useSelector((state) => state.home);
  league = league.filter((league) => league.selected === true);
  const { id, leagueLogo } = league[0];

  const myStanding = useSelector((state) => state.standing);

  const { leagueName, season, leagueStanding } = myStanding;

  const dispatch = useDispatch();

  const changeYear = (id, number) => dispatch(getStandingByYear(id, number));

  const loadLeague = () => dispatch(getLeagues());

  useEffect(() => {
    dispatch(getStanding(id));
  }, []);
  return (
    <div className="laderboard-page">
      <LeaderboardHeader year={changeYear} id={id} />
      <Link className="back-btn" to="/" onClick={loadLeague}><AiOutlineRollback /></Link>
      <div className="lead-item-main">
        <h2 className="lead-item-name">{leagueName}</h2>
        <img className="lead-item-img" src={leagueLogo} alt="logo" />
        <p>
          Season:
          {season}
        </p>
      </div>
      <table className="table">
        <thead className="t-head">
          <tr className="tr">
            <th>team</th>
            <th>wins</th>
            <th>Loss</th>
            <th>Draws</th>
            <th>Games</th>
            <th>GF</th>
            <th>GA</th>
            <th>points</th>
            <th>rank</th>
            <th>GD</th>
          </tr>
        </thead>
        <tbody>
          {leagueStanding.map((item) => (
            <LeaderboardData
              key={item.id}
              teamName={item.clubName}
              teamStat={item.stats}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
