// interface som bestemmer hvordan et quizobjekt skal se ut
export interface IQuiz {
  question: string;
  correctAnswer: string;
  wrongAnswer: string;
  image: string;
  score: number;
  scorePotential: number;
  onNextQuestion: (isCorrect: boolean) => void;
}
