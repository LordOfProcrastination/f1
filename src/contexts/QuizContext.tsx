import { FC, useState, useEffect, createContext, ReactNode } from "react";
import QuizModule from "../modules/QuizModule";
import { IQuizContext } from "../interfaces/IQuizContext";
import { IQuiz } from "../interfaces/IQuiz";

export const QuizContext = createContext<IQuizContext | null>(null);

interface Props {
  children: ReactNode;
}

// Provider som gjør at jeg kan bruke quiz konkteksten min reaktivt
export const QuizProvider: FC<Props> = ({ children }) => {
  const [quiz, setQuiz] = useState<IQuiz[]>([]);

  useEffect(() => {
    getQuizFromModule();
  }, []);

  const getQuizFromModule = () => {
    const quizFromModule = QuizModule.getAll();
    setQuiz(quizFromModule);
  };
  return (
    <QuizContext.Provider value={{ quiz, getQuizFromModule }}>
      {children}
    </QuizContext.Provider>
  );
};
