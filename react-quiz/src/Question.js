import React from "react";
import Options from "./Options";
export default function Question({ questions, dispatch, answer }) {
  console.log(questions);
  return (
    <>
      <h4>{questions.question}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </>
  );
}
