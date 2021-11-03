import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import steam from '../img/steam.svg'

const GameDetail = ({pathId}) => {
    const history = useHistory();
    const {game, isLoading} = useSelector(state => state.detail)
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push('/')
        }
    }

   const getPlatform = (platfrom) => {
        switch (platfrom) {
            case 'Windows':
                return steam;
            default :
                return null
        }
   }


    return (
        <>
            {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail LayoutId={pathId}>
                <Stats>
                    <div className="rating">
                        <h3>{game.title}</h3>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                           <img src={getPlatform(game?.platform)} alt={game?.platform} />
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <img src={game.thumbnail} alt="img"/>
                </Media>
                <Description>
                    <p>{game.description}</p>
                </Description>
                <div className="gallery">
                    {game.screenshots?.map(screen => (
                        <img src={screen.image} alt="img"/>
                    ))}
                </div>
            </Detail>
        </CardShadow>
            )}
            </>
    )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img{
    width: 100%;
  }
`

const Stats = styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
`;

const Info = styled(motion.div)`
text-align: center;
`

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img{
    margin-left: 3rem;
  }
`

const Media = styled(motion.div)`
margin-top: 5rem;
  img {
    width: 100%;
  }
`

const Description = styled(motion.div)`
  margin: 5rem 0;
`

export default GameDetail