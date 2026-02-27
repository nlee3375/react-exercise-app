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
    <div>
      <h2>{name}</h2>
      <p>Reps: {count}</p>
      <button onClick={handleIncrement}>Add Rep</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default RepetitionExercise;