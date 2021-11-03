import axios from "axios";
import {allGames, shooterGames, pcGames} from "../api";

export const loadGames = () => async (dispatch) => {
    const allGamesData = await axios.get(allGames());
    const shooterGamesData = await axios.get(shooterGames());
    const pcGamesData = await axios.get(pcGames());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            games: allGamesData.data,
            shooters: shooterGamesData.data,
            pcGames: pcGamesData.data,
        }
    })
}