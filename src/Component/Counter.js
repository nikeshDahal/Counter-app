/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
const date = new Date();
const year = date.getFullYear();
const Counter = () => {
  const [currentState, setCurrentState] = useState(0);
  //handling events started
  const handleIncrement = (e) => {
    setCurrentState(currentState + 1);
  };
  const handleDecrement = (e) => {
      console.log(e);
    {
      currentState > 0 ? setCurrentState(currentState - 1) : setCurrentState(0);
    }
  };
  const handleReset = (e) => {
    setCurrentState(0);
  };
  //handling events finished

  return (
    <div className="counter-container">
        <div className="counter-Header">
            <h1>Software Engineer-Front End Task</h1>
            <h3>Counter-app</h3>
        </div>

      <div className="counter">
        <span>count is :{currentState}</span>
      </div>
      <div className="button-container">
        <button onClick={handleIncrement}> Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="Footer">
          <span>All rights reserved &copy; {year} || @Nikesh Dahal</span>
      </div>
    </div>
  );
};

export default Counter;




