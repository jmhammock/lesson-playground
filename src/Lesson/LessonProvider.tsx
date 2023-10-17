import React from "react";
import { LessonData } from "../LessonData";
import { LessonContext, LessonContextType } from "./LessonContext";

export type LessonAction =
  | { type: "advance" }
  | { type: "answer"; answer: string };

function lessonReducer(state: LessonData, action: LessonAction): LessonData {
  switch (action.type) {
    case "advance": {
      const [nextQuestion, ...remainingQuestions] = state.remainingQuestions;
      return {
        ...state,
        currentQuestion: nextQuestion,
        remainingQuestions,
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
    advance: () => dispatch({ type: "advance" }),
    answer: (answer: string) => dispatch({ type: "answer", answer }),
  };

  return (
    <LessonContext.Provider value={value}>{children}</LessonContext.Provider>
  );
}
