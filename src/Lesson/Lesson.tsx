import { useRef } from "react";
import { useLessonContext } from "./LessonContext";
import { Question } from "../Question/Question";
import { Button } from "./Button";

export function Lesson() {
  const lesson = useLessonContext();
  const currentValue = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    if (currentValue.current !== null) {
      lesson.answer(currentValue.current.value);
      currentValue.current.value = "";
    }
  }

  function handleForward() {
    lesson.forward();
  }

  function handleBack() {
    lesson.back();
  }

  const canSubmit = lesson.currentQuestion.answer !== "";
  const canForward =
    lesson.currentQuestion.answer === "" &&
    lesson.remainingQuestions.length > 0;

  currentValue.current?.focus();

  console.log(currentValue.current?.value);

  return (
    <div>
      <h1>{lesson.title}</h1>
      <Question ref={currentValue} />
      <div style={{ marginTop: "1rem" }}>
        <Button action={handleSubmit} disabled={canSubmit}>
          Submit
        </Button>
      </div>
      {lesson.remainingQuestions.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <Button action={handleForward} disabled={canForward}>
            Next
          </Button>
        </div>
      )}
      {lesson.previousQuestions.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <Button action={handleBack}>Back</Button>
        </div>
      )}
    </div>
  );
}
