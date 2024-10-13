import QuizItem from "./QuizItem";
import { useContext, useState } from "react";
import { QuizContext } from "../../contexts/QuizContext";

// Komponent for å opprette en liste quiz spørsmål
const QuizList = () => {
  const quizContext = useContext(QuizContext);

  // TEST!
  if (!quizContext) {
    return <div>Loading...</div>;
  }

  const { quiz } = quizContext;

  // Setter score og hvilken spørsmål brukeren er på
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Funksjon for å hente neste spørsmål og oppdatere score
  const handleNextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // Funksjon som henter inn quizobjektene og gir tilbakemelding om hvordan det gikk
  const getQuizTSX = () => {
    if (currentQuestionIndex >= quiz.length) {
      if (score > 3) {
        return (
          <div className="mt-5 p-5 bg-success rounded-3">
            <p className="display-6 text-light">
              Congratulations! You sure know a lot about F1! Your score: {score}
              /5
            </p>
          </div>
        );
      } else {
        return (
          <div className="mt-5 p-5 bg-danger rounded-3">
            <p className="display-6 text-light">
              That could have gone better... Your score: {score}/5
            </p>
          </div>
        );
      }
    }

    const currentQuiz = quiz[currentQuestionIndex];

    return (
      <QuizItem
        key={currentQuestionIndex}
        question={currentQuiz.question}
        correctAnswer={currentQuiz.correctAnswer}
        wrongAnswer={currentQuiz.wrongAnswer}
        image={currentQuiz.image}
        score={score}
        scorePotential={quiz.length}
        onNextQuestion={handleNextQuestion}
      />
    );
  };
  return (
    <section>
      <h3 className="text-center">Test Your F1 Knowledge!</h3>
      <section className="d-flex justify-content-center">
        {getQuizTSX()}
      </section>
    </section>
  );
};

export default QuizList;
