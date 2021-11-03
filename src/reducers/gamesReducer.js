const initState = {
    games: [],
    shooters: [],
    pcGames: [],
    alphabeticalGames: [],
}

const gamesReducer = (state=initState, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return {...state,
                games: action.payload.games,
                shooters: action.payload.shooters,
                pcGames: action.payload.pcGames,
            }
        default:
            return {...state}
    }
}

export default gamesReducer