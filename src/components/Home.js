import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeagueCard from './Card';
import Header from './Header';
import { getLeagues, searchLeagues } from '../redux/pages/homeReducer';
import './home.css';

const Home = () => {
  const allLeagues = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const searchLeague = (value) => {
    setSearch(value);
    if (value !== '') {
      dispatch(searchLeagues(value));
    } else {
      dispatch(getLeagues());
    }
  };
  return (
    <div className="main-container">
      <Header length={allLeagues.length} />
      <div className="input-cont">
        <input type="text" className="search" placeholder="search league" value={search} onInput={(e) => searchLeague(e.target.value)} />
      </div>
      <div className="cards-container">
        { allLeagues.map((league) => (
          <LeagueCard
            key={league.id}
            name={league.leagueName}
            logo={league.leagueLogo}
            abbr={league.leagueAbbr}
            id={league.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
