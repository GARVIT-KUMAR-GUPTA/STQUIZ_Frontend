import React, { useState, useEffect } from "react";

function QuizTimer({ totalTime, handleTimeUp,isReset }) {
  if(isReset) totalTime=30;
  const [timeRemaining, setTimeRemaining] = useState(totalTime);
  console.log("Hello",isReset,timeRemaining);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeRemaining <=0) {
      console.log("Times UP");
      handleTimeUp();
    }
  }, [timeRemaining, handleTimeUp]);

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return <div>{formatTime(timeRemaining)}</div>;
}

export default QuizTimer;
