import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const handleButtonClick = function() {
    setIsOn(isOn => !isOn);
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
}
