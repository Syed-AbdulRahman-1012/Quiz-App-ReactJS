import React from "react";

export default function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return;
  const lastQuestion = index < numQuestions - 1;
  const hasAnswer = answer !== null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
}
