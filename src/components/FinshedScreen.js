function FinshedScreen({ points, maxPosiblePoints, highscore }) {
  const percentage = (points / maxPosiblePoints) * 100;

  let emoji;

  if (percentage === 100) emoji = "👍🏽";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "😕";
  if (percentage === 0) emoji = "🤦🏽‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPosiblePoints} ({Math.cell(percentage)})
      </p>
      <p className="highscore">(highscore: {highscore} points)</p>
    </>
  );
}

export default FinshedScreen;
