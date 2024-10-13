import { FC, useState } from "react";
import { IQuiz } from "../../interfaces/IQuiz";

// Komponent for å opprette et quizobjekt
const QuizItem: FC<IQuiz> = ({
  question,
  correctAnswer,
  wrongAnswer,
  image,
  score,
  scorePotential,
  onNextQuestion,
}) => {
  // Setter om et svar er valgt og hva som ble valgt
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Funksjon som sjekker hva brukeren valgte
  const handleAnswerClick = (selectedOption: string) => {
    if (isAnswerSelected) {
      return;
    }
    if (selectedAnswer) {
      return;
    }

    const isCorrect = selectedOption === correctAnswer;

    setIsAnswerSelected(true);
    setSelectedAnswer(selectedOption);

    onNextQuestion(isCorrect);
  };

  return (
    <article className="w-75">
      <div>
        Score: {score}/{scorePotential}
      </div>
      <div className="border border-rounded-3 border-dark bg-light text-center h-100">
        <h3 className="m-3 p-1">{question}</h3>
        <div>
          <button
            onClick={() => handleAnswerClick(correctAnswer)}
            className="m-3 p-1 bg-warning"
            disabled={isAnswerSelected}
          >
            {correctAnswer}
          </button>
        </div>
        <div>
          <button
            onClick={() => handleAnswerClick(wrongAnswer)}
            className="mb-3 p-1 bg-warning"
            disabled={isAnswerSelected}
          >
            {wrongAnswer}
          </button>
        </div>
        <img
          src={"images/quiz-images/" + image}
          alt="Quiz-Image"
          className="img-fluid"
        />
      </div>
    </article>
  );
};

export default QuizItem;
