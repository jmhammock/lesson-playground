
type Question = {
  type: string,
  prompt: string,
  answer: string;
};

export type TextQuestionData = Question;

export type MultipleChoiceQuestionData = Question & {
  prompt: string;
  correct: string;
  distractors: string[];
};

export type LessonQuestionData = 
  | TextQuestionData
  | MultipleChoiceQuestionData;

export type LessonData = {
  title: string;
  previousQuestions: LessonQuestionData[];
  currentQuestion: LessonQuestionData;
  remainingQuestions: LessonQuestionData[];
};
