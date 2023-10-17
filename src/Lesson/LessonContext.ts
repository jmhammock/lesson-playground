import React from "react";
import { LessonData } from "../LessonData";

export type LessonContextType = {
  advance: () => void;
  answer: (answer: string) => void;
} & LessonData;

export const LessonContext = React.createContext<LessonContextType | null>(null);

export function useLessonContext() {
  const lesson = React.useContext(LessonContext);
  if (!lesson) {
    throw new Error("useLessonContext must be used within a LessonProvider");
  }

  return lesson;
}