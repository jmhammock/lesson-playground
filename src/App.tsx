import "./App.css";
import { LessonData } from "./LessonData";
import { Lesson } from "./Lesson/Lesson";
import { LessonProvider } from "./Lesson/LessonProvider";

const lesson: LessonData = {
  title: "Lesson 1: The Quest for the Holy Grail!",
  previousQuestions: [],
  currentQuestion: {
    type: "text",
    prompt: "What is your name?",
    answer: "",
  },
  remainingQuestions: [
    {
      type: "text",
      prompt: "What is your quest?",
      answer: "",
    },
    {
      type: "multiple-choice",
      prompt: "What is your favorite color?",
      correct: "blue",
      distractors: ["red", "yellow", "green"],
      answer: "",
    },
  ],
};

function App() {
  return (
    <LessonProvider lesson={lesson}>
      <Lesson />
    </LessonProvider>
  );
}

export default App;
