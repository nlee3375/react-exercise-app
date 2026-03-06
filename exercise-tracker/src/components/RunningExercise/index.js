import React, { useState, useEffect } from "react";

function RunningExercise({ name }) {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
        setLaps([]);
    };

    const handleAddLap = () => {
        setLaps([...laps, seconds]);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const secs = time % 60;
        return `${minutes}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <div>
            <h2>{name}</h2>

            <h3>Timer: {formatTime(seconds)}</h3>

            <button onClick={handleStart}>Start</button>
            <button onClick={handleAddLap}>Record Lap</button>
            <button onClick={handleReset}>Reset</button>

            <h3>Laps</h3>
            <ul>
                {laps.map((lapTime, index) => (
                    <li key={index}>
                        Lap {index + 1}: {formatTime(lapTime)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RunningExercise;