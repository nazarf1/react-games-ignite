import axios from "axios";
import {gameDetails} from "../api";

export const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAIL"
    })
    const detailData = await axios.get(gameDetails(id))


    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data
        }
    })
}
