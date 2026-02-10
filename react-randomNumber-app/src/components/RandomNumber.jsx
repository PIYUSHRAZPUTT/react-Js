import React, { useState, useEffect } from "react";
import './RandomNumber.css'
const RandomNumber = () => {
  const [number, setNumber] = useState(0);

  const generateNumber = () => {
    setNumber(Math.floor(Math.random() * 900000) + 100000);
  };

  useEffect(() => {
    generateNumber();
  }, []);

  return (
    <div>
      <h1>Generate Random Number App</h1>
      <h3>{number}</h3>
      <button onClick={generateNumber}>Generate Number</button>
    </div>
  );
};

export default RandomNumber;
