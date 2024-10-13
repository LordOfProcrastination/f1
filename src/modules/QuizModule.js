// Her er en modul for alt jeg trenger til quizen
const QuizModule = (() => {
  const quiz = [
    {
      id: 1,
      question: "What is the name of the legendary driver in this picture?",
      correctAnswer: "Ayrton Senna",
      wrongAnswer: "Alain Prost",
      image: "senna.png",
    },
    {
      id: 2,
      question: "Which driver has won the most World Driver Championships?",
      correctAnswer: "Lewis Hamilton",
      wrongAnswer: "Max Verstappen",
      image: "trophy.png",
    },
    {
      id: 3,
      question:
        "What was the former name of the Aston Martin team which had this logo?",
      correctAnswer: "Racing Point",
      wrongAnswer: "Reanult F1",
      image: "racing-point.png",
    },
    {
      id: 4,
      question: "Which of the circuits still in use is the oldest?",
      correctAnswer: "Monza",
      wrongAnswer: "Silverstone",
      image: "monza.png",
    },
    {
      id: 5,
      question: "Who is this handsome little devil?",
      correctAnswer: "Günther Steiner",
      wrongAnswer: "Toto Wolf",
      image: "steiner.png",
    },
  ];

  const getAll = () => {
    return structuredClone(quiz);
  };

  const getById = (id) => {
    return structuredClone(quiz);
  };

  return {
    getAll,
    getById,
  };
})();

export default QuizModule;
