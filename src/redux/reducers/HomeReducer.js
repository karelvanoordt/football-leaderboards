const FETCH_ALL_LEAGUES = 'FETCH_ALL_LEAGUES'
const SELECT_LEAGUE = 'SELECT_LEAGUE';

const initialState = [];

export const fetchAllLeagues = leagues => {
    return {
        type: FETCH_ALL_LEAGUES,
        info: 'retrieve data from all leagues',
        payload: leagues
    }
};

export const selectLeague = selected => {
    return {
        type: SELECT_LEAGUE,
        info: 'user selects league',
        payload: selected
    }
};

export const getAllLeagues = () => async (dispatch) => {
    const allLeagues = await fetch('https://api-football-standings.azharimm.site/leagues');
    const leaguesData = await allLeagues.json();
    dispatch(fetchAllLeagues(leaguesData.data));
};

const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALL_LEAGUES:
            return action.payload.map((league) => (
                {
                    league_id: league.id,
                    league_logo: league.logos.light,
                    league_name: league.name,
                    league_abr: league.abbr,
                    selected: false,
            }
            ));
        case SELECT_LEAGUE:
            return state.map((league) => {
                if (league.id === action.payload) {
                    return {
                        ...league,
                        selected: true,
                    };
                }

                return league;
        
            });
        default: return state;
    }
};

export default homeReducer





