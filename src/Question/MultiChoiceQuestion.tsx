import { forwardRef, useEffect, useState } from "react";
import { MultipleChoiceQuestionData } from "../LessonData";

type Props = {
  question: MultipleChoiceQuestionData;
};

export const MultiChoiceQuestion = forwardRef<HTMLInputElement, Props>(
  ({ question }, ref) => {
    const [value, setValue] = useState(question.answer);

    useEffect(() => {
      setValue(question.answer);
    }, [question.answer]);

    const choices = [...question.distractors, question.correct];

    return (
      <div>
        <p>{question.prompt}</p>
        <input type="hidden" value={value} ref={ref} />
        {choices.map((choice, idx) => (
          <label key={idx}>
            <input
              type="radio"
              value={choice}
              checked={value === choice}
              disabled={question.answer !== ""}
              onChange={(e) => setValue(e.target.value)}
            />
            {choice}
          </label>
        ))}
      </div>
    );
  }
);
