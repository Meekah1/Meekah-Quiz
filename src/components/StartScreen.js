function StartScreen({ num, dispatch }) {
  const slideInStyles = {
    animation: "slideIn 1s ease forwards",
  };

  const bounceText = {
    animation: "bounce 1s infinite alternate",
  };

  const colorChangeStyles = {
    animation: "colorChange 3s infinite alternate",
  };

  return (
    <div className="start">
      <div className="startStyle">
        <h2 style={slideInStyles}> Welcome to The</h2>
        <h2 style={bounceText}>React Quiz</h2>
      </div>

      <h3 style={colorChangeStyles}>
        {num} Questions to Test your React Mastery
      </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
