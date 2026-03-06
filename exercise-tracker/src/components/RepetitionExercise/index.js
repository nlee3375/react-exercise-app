import React, { useState } from "react";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0); 

  const handleIncrement = () => {
    setCount(prev => prev + 1); 
  };

  const handleReset = () => {
    setCount(0); 
  };

  return (
    <div class="menu-container">
      <h2>{name}</h2>
      <p>Reps: {count}</p>
      <div class="button-container">
      <button onClick={handleIncrement} className="exercise-button">Add Rep</button>
      <button onClick={handleReset} className="exercise-button">Reset</button>
      </div>
    </div>
  );
}

export default RepetitionExercise;