function StartScreen({ num }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3> {num} Questions to Test your React Mastery</h3>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}

export default StartScreen;
