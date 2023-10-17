import "./App.css";
import { LessonData } from "./LessonData";
import { Lesson } from "./Lesson/Lesson";
import { LessonProvider } from "./Lesson/LessonProvider";

const lesson: LessonData = {
  title: "Lesson 1: Hello, world!",
  currentQuestion: {
    prompt: "What is your name?",
    answer: "",
  },
  remainingQuestions: [
    {
      prompt: "What is your quest?",
      answer: "",
    },
    {
      prompt: "What is your favorite color?",
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
