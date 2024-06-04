function FinishScreen({ points, maxPossiblePoint, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoint) * 100;

  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPossiblePoint}(
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(highScore: {highScore}) points </p>
      <div className="start">
        <button className="btn" onClick={() => dispatch({ type: "reStart" })}>
          {" "}
          Restart
        </button>
      </div>
    </>
  );
}

export default FinishScreen;
