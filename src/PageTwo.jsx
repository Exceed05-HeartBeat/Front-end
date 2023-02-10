import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react';

const App = () => {
  const [selectedButton, setSelectedButton] = useState("All");
  const [exerciseData, setExerciseData] = useState([    { date: "2022-01-01", time: "09:00", type: "Normal" },    { date: "2022-01-02", time: "10:00", type: "Exercise" },    { date: "2022-01-03", time: "11:00", type: "Normal" },  ]);

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText);
  };

  return (
    <div style={{ backgroundColor: "pink", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => handleButtonClick("All")}>All</button>
        <button onClick={() => handleButtonClick("Normal")}>Normal</button>
        <button onClick={() => handleButtonClick("Exercise")}>Exercise</button>
      </div>
      <table style={{ marginTop: "50px" }}>
        <thead>
          <tr>
            <th style={{ fontSize: "20px" }}>Date</th>
            <th style={{ fontSize: "20px" }}>Time</th>
            <th style={{ fontSize: "20px" }}>Exercise Type</th>
          </tr>
        </thead>
        <tbody>
          {exerciseData
            .filter((data) => {
              if (selectedButton === "All") return true;
              return data.type === selectedButton;
            })
            .map((data, index) => (
              <tr key={index}>
                <td style={{ fontSize: "28px" }}>{data.date}</td>
                <td style={{ fontSize: "28px" }}>{data.time}</td>
                <td style={{ fontSize: "28px" }}>{data.type}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;