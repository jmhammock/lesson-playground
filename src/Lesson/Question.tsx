import { forwardRef, useEffect, useState } from "react";
import { useLessonContext } from "./LessonContext";

export const Question = forwardRef<HTMLInputElement>((_, ref) => {
  const { currentQuestion } = useLessonContext();
  const [value, setValue] = useState(currentQuestion.answer);

  useEffect(() => {
    setValue(currentQuestion.answer);
  }, [currentQuestion.answer]);

  return (
    <div>
      <label>
        {currentQuestion.prompt}
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </div>
  );
});
