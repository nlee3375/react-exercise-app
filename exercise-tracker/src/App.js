import React, { useState } from "react";
import "./App.css";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Sit Ups", type: "repetition" },
    { name: "Planking", type: "duration" },
    { name: "Burpees", type: "duration" },
    { name: "Running", type: "running"},
  ];

  const handleSelect = (exercise) => {
    setSelectedExercise(exercise.name);
    setSelectedType(exercise.type);
  };

  const handleBackToMenu = () => {
    setSelectedExercise(null);
    setSelectedType(null);
  };

  let screen = null;

  if (!selectedExercise) {
    screen = (
      <div class="menu-container">
        <h1>Exercise Tracker</h1>
        <p>Select an exercise:</p>
        <div class="button-container">
          {exercises.map((ex) => (
            <button
              key={ex.name}
              onClick={() => handleSelect(ex)}
              className="exercise-button"
            >
              {ex.name} ({ex.type})
          </button>
        ))}
        </div>
      </div>
    );
  } else {
    let exerciseComponent = null;
    if (selectedType === "repetition") {
      exerciseComponent = <RepetitionExercise name={selectedExercise} />;
    } else if (selectedType === "duration") {
      exerciseComponent = <DurationExercise name={selectedExercise} />;
    } else if (selectedType === "running") {
      exerciseComponent = <RunningExercise name={selectedExercise} />;
    }

    screen = (
      <div>
        <button onClick={handleBackToMenu} className="exercise-button">Back to Menu</button>
        {exerciseComponent}
      </div>
    );
  }

  return (
    <div className="App">
      {screen}
    </div>
  );
}

export default App;