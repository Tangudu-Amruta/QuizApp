import React from 'react'
import { useContext } from 'react'
import { quizContext } from '../helpers/Context'
import {Questions}  from '../helpers/QuestionBank'
import "../App.css";

const EndScreen = () => {
  const {score,setScore,setGameState} = useContext(quizContext)

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu")
  }
  return (
    <div className='endscreen'>
       <h1>Quiz Finished</h1>
       <h1>{score}/{Questions.length}</h1>
       <button onClick={()=>restartQuiz()}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen
