import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div class="menu-container">
      <h2>{name}</h2>
      <p>{minutes}:{secs}</p>
      <div class="button-container">
      <button onClick={handleStart} className="exercise-button">Start</button>
      <button onClick={handleStop} className="exercise-button">Stop</button>
      <button onClick={handleReset} className="exercise-button">Reset</button>
      </div>
    </div>
  );
}

export default DurationExercise;