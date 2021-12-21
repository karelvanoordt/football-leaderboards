const FETCH_LEAGUE = 'FETCH_LEAGUE';

const initialState = {
    league_name: '',
    season: '',
    league_leaderboard: []
};

const fetchLeague = leaderboard => {
    return {
        type: FETCH_LEAGUE,
        info: 'retrieve data from selected league',
        payload: leaderboard
    }
};

export const getLeague = (id) => async (dispatch) => {
    const league = await fetch(`https://api-football-standings.azharimm.site/leagues/${id}/standings?season=2020&sort=asc`);
    const leagueData = await league.json();
    dispatch(fetchLeague(leagueData.data));
};

export const getLeaguebyYear = (id, year) => async (dispatch) => {
    const league = await fetch(`https://api-football-standings.azharimm.site/leagues/${id}/standings?season=${year}&sort=asc`);
    const leagueData = await league.json();
    dispatch(fetchLeague(leagueData.data));
};

const fetchNumbers = (list) => {
    const numbers = list.map((stats) => (
      {
        name: stats.name,
        value: stats.value,
      }
    ));
    return numbers;
  };


const detailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LEAGUE:
            return {
                ...state,
                league_name: action.payload.name,
                league_season: action.payload.season,
                league_leaderboard: action.payload.leaderboard.map((leaderboard) => (
                        {
                            id: leaderboard.team.id,
                            team_name: leaderboard.team.displayName,
                            numbers: fetchNumbers(leaderboard.numbers.slice(0, 19)),
                        }
                    )
            
                )
            }; default: return state
    }

};

export default detailsReducer;