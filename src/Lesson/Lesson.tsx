import { useRef } from "react";
import { useLessonContext } from "./LessonContext";
import { Question } from "./Question";
import { Button } from "./Button";

export function Lesson() {
  const lesson = useLessonContext();
  const currentValue = useRef<HTMLInputElement>(null);

  function onSubmit() {
    lesson.answer(currentValue.current?.value ?? "");
  }

  function onAdvance() {
    lesson.advance();
  }

  const canSubmit = lesson.currentQuestion.answer !== "";
  const canAdvance =
    lesson.currentQuestion.answer === "" &&
    lesson.remainingQuestions.length > 0;

  currentValue.current?.focus();

  return (
    <div>
      <h1>{lesson.title}</h1>
      <Question ref={currentValue} />
      <div style={{ marginTop: "1rem" }}>
        <Button action={onSubmit} disabled={canSubmit}>
          Submit
        </Button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Button action={onAdvance} disabled={canAdvance}>
          Next
        </Button>
      </div>
    </div>
  );
}
