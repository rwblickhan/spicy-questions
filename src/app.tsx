import { useState } from "preact/hooks";
import styles from "./app.module.css";
import questions from "./questions.json";
import askholeQuestions from "./askhole_questions.json";
import askholeExtraQuestions from "./askhole_extra_questions.json";
import SlButton from "@shoelace-style/shoelace/dist/react/button/index.js";

export function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionSet, setQuestionSet] = useState<
    "questions" | "askhole" | "askhole_extra"
  >("questions");

  return (
    <div className={styles.container}>
      <p className={styles.question}>
        {questionSet === "questions"
          ? questions[currentQuestionIndex]
          : questionSet === "askhole"
            ? askholeQuestions[currentQuestionIndex]
            : askholeExtraQuestions[currentQuestionIndex]}
      </p>

      <div className={styles.buttons}>
        <SlButton
          variant={questionSet === "questions" ? "primary" : "default"}
          onClick={() => {
            setQuestionSet("questions");
            setCurrentQuestionIndex(
              Math.floor(Math.random() * questions.length)
            );
          }}
        >
          Random question (Russell&apos;s set)
        </SlButton>
        <SlButton
          variant={questionSet === "askhole" ? "primary" : "default"}
          onClick={() => {
            setQuestionSet("askhole");
            setCurrentQuestionIndex(
              Math.floor(Math.random() * askholeQuestions.length)
            );
          }}
        >
          Random question (original Askhole set)
        </SlButton>
        <SlButton
          variant={questionSet === "askhole_extra" ? "primary" : "default"}
          onClick={() => {
            setQuestionSet("askhole_extra");
            setCurrentQuestionIndex(
              Math.floor(Math.random() * askholeExtraQuestions.length)
            );
          }}
        >
          Random question (Askhole extras set)
        </SlButton>
      </div>
    </div>
  );
}
