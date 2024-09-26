import React,{useContext, useState} from 'react'
import { Questions } from '../helpers/QuestionBank'
import { quizContext } from '../helpers/Context';
const Quiz = () => {

  const {score,setScore,setGameState} = useContext(quizContext)

  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [optionChoosen,setOptionChoose] = useState("");

  const nextQuestion = () => {
    if(Questions[currentQuestion].answer === optionChoosen){
      setScore(score+1);
    }
    setCurrentQuestion(currentQuestion+1)
  }

  const finishQuiz = () => {
    if(Questions[currentQuestion].answer === optionChoosen){
      setScore(score+1);
    }
    setGameState("endscreen")
  }

  return (
    <div className='quiz'>
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={()=>setOptionChoose("A")}>{Questions[currentQuestion].optionA}</button>
        <button onClick={()=>setOptionChoose("B")}>{Questions[currentQuestion].optionB}</button>
        <button onClick={()=>setOptionChoose("C")}>{Questions[currentQuestion].optionC}</button>
        <button onClick={()=>setOptionChoose("D")}>{Questions[currentQuestion].optionD}</button>
      </div>

      {
        currentQuestion === Questions.length -1 ? (
          <button onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button onClick={nextQuestion}>Next Question</button>
        )
      }
      
    </div>
  )
}

export default Quiz
