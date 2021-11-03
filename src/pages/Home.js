import React, {useEffect} from "react";
import GameDetail from "../components/GameDetail";
import { useDispatch, useSelector } from "react-redux";
import { loadGames} from "../actions/gamesAction";
import Game from "../components/Game";
import styled from "styled-components";
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";
import {useLocation} from "react-router-dom";

const Home = () => {
    const location = useLocation()
    const dispatch = useDispatch();
    const pathId = location.pathname.split('/')[2]

    useEffect(() => {
        dispatch(loadGames());
    },[dispatch]);
    const {games, shooters, pcGames} = useSelector(state => state.games)

    return (
        <GameList>
            <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
            {pathId && <GameDetail pathId={pathId} />}
            </AnimatePresence>
            <h2>All games</h2>
              <Games>
                  {games.slice(0, 20).map((game) => (
                      <Game game={game}/>
                  ))}
              </Games>
            <h2>Shooters</h2>
            <Games>
                {shooters.slice(0, 20).map((game) => (
                    <Game game={game}/>
                ))}
            </Games>
            <h2>Pc Games</h2>
            <Games>
                {pcGames.slice(0, 20).map((game) => (
                    <Game game={game}/>
                ))}
            </Games>
            </AnimateSharedLayout>
        </GameList>
    );
};

const GameList = styled(motion.div)`
padding: 0 5rem;
h2 {
  padding: 5rem 0;
}  
`

const Games = styled(motion.div)`
 min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`



export default Home