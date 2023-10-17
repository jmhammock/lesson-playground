import React from "react";
import { LessonData } from "../LessonData";
import { LessonContext, LessonContextType } from "./LessonContext";

export type LessonAction =
  | { type: "forward" }
  | { type: "back" }
  | { type: "answer"; answer: string };

function lessonReducer(state: LessonData, action: LessonAction): LessonData {
  switch (action.type) {
    case "forward": {
      const [nextQuestion, ...remainingQuestions] = state.remainingQuestions;
      return {
        ...state,
        previousQuestions: [state.currentQuestion, ...state.previousQuestions],
        currentQuestion: nextQuestion,
        remainingQuestions,
      };
    }
    case "back": {
      const [previousQuestion, ...previousQuestions] = state.previousQuestions;
      return {
        ...state,
        previousQuestions,
        currentQuestion: previousQuestion,
        remainingQuestions: [
          state.currentQuestion,
          ...state.remainingQuestions,
        ],
      };
    }
    case "answer": {
      return {
        ...state,
        currentQuestion: { ...state.currentQuestion, answer: action.answer },
      };
    }
    default: {
      return state;
    }
  }
}

type LessonProviderProps = {
  children: React.ReactNode;
  lesson: LessonData;
};

export function LessonProvider({ children, lesson }: LessonProviderProps) {
  const [state, dispatch] = React.useReducer(lessonReducer, lesson);

  const value: LessonContextType = {
    ...state,
    forward: () => dispatch({ type: "forward" }),
    back: () => dispatch({ type: "back" }),
    answer: (answer: string) => dispatch({ type: "answer", answer }),
  };

  return (
    <LessonContext.Provider value={value}>{children}</LessonContext.Provider>
  );
}
