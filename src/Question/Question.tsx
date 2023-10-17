import { forwardRef } from "react";
import { useLessonContext } from "../Lesson/LessonContext";
import { MultiChoiceQuestion } from "./MultiChoiceQuestion";
import { TextQuestion } from "./TextQuestion";
import { MultipleChoiceQuestionData } from "../LessonData";

export const Question = forwardRef<HTMLInputElement>((_, ref) => {
  const { currentQuestion } = useLessonContext();

  switch (currentQuestion.type) {
    case "multiple-choice":
      return (
        <MultiChoiceQuestion
          ref={ref}
          question={currentQuestion as MultipleChoiceQuestionData}
        />
      );
    case "text":
      return <TextQuestion ref={ref} question={currentQuestion} />;
  }
});
