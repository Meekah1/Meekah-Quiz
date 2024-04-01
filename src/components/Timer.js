import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  useEffect(
    function () {
      setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
    },
    [dispatch]
  );
  return <div>{secondsRemaining}</div>;
}

export default Timer;
