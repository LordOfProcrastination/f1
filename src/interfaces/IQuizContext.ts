import { IQuiz } from "./IQuiz";

export interface IQuizContext {
  quiz: IQuiz[];
  getQuizFromModule: (quiz: IQuiz) => void;
}
