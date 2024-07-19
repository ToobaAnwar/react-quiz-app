import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions.js";
import Summary from "./Summary.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  console.log('activeQuestionIndex ---', activeQuestionIndex)

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });

    },
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers} />
    );
  }

  return (
    <div id="quiz">

        {/* key={activeQuestionIndex} when passing this QuestionTimer comp will render again and again */}

       <Question 
       key={activeQuestionIndex}
       index={activeQuestionIndex}
       onSelectAnswer={handleSelectAnswer}
       onSkipAnswer={handleSkipAnswer}/>

    </div>
  );
}
