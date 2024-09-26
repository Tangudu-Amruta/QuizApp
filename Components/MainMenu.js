import React from 'react'
import { useContext } from 'react'
import { quizContext } from '../helpers/Context'
import "../App.css";
const MainMenu = () => {
    const {gameState,setGameState} = useContext(quizContext);
  return (
    <div  className='menu'>
      <button onClick={()=>setGameState("quiz")}>Start Quiz</button>
    </div>
  )
}

export default MainMenu
