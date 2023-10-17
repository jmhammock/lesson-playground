export type Question = {
  prompt: string;
  answer: string;
};

export type LessonData = {
  title: string;
  currentQuestion: Question;
  remainingQuestions: Question[];
};
