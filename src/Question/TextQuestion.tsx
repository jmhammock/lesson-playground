import { forwardRef, useEffect, useState } from "react";
import { TextQuestionData } from "../LessonData";

type Props = {
  question: TextQuestionData;
};

export const TextQuestion = forwardRef<HTMLInputElement, Props>(
  ({ question }, ref) => {
    const [value, setValue] = useState(question.answer);

    useEffect(() => {
      setValue(question.answer);
    }, [question.answer]);

    return (
      <div>
        <label>
          <p>{question.prompt}</p>
          <input
            ref={ref}
            type="text"
            value={value}
            disabled={question.answer !== ""}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      </div>
    );
  }
);
