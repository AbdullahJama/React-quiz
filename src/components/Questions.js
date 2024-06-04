import Options from "./Options";

function Questions({ question, answer, dispatch, points }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        answer={answer}
        dispatch={dispatch}
        points={points}
      />
    </div>
  );
}

export default Questions;
