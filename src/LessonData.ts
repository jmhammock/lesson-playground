export type Question = {
  prompt: string;
  answer: string;
};

export type LessonData = {
  title: string;
  previousQuestions: Question[];
  currentQuestion: Question;
  remainingQuestions: Question[];
};
