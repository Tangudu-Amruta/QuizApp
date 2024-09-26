import React, { useState,useContext } from 'react'
import MainMenu from './Components/MainMenu'
import Quiz from './Components/Quiz'
import EndScreen from './Components/EndScreen'
import { quizContext } from './helpers/Context'
import "./App.css"

const App = () => {
  const [gameState,setGameState] = useState("menu")
  const [score,setScore] = useState(0)
  return (
    <div className='App'>
      <h1>Quiz App</h1>

      <quizContext.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "endscreen" && <EndScreen/>}
      </quizContext.Provider>
    </div>
  )
}

export default App
