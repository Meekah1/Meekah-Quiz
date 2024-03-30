function Progress({ index, numQuestion, points, maxPoint }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}{" "}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoint}
      </p>
    </header>
  );
}

export default Progress;
