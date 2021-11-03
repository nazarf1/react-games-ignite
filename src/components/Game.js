import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {loadDetail} from "../actions/detailAction";
import {Link} from "react-router-dom";

const Game = ({game}) => {
    const stringPathId = game.id.toString();
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(game.id))
        document.body.style.overflow = "hidden"
    }

    return(
        <StyledGame LayoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${game.id}`}>
            <h3>{game.title}</h3>
            <p>{game.release_date}</p>
            <motion.img LayoutId={`image ${stringPathId}`} src={game.thumbnail} alt={game.title}/>
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
 img {
   object-fit: cover;
 }
`

export default Game