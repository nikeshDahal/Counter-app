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
      <div className="middle-container">
      <div className="counter-Header">
            <h1>SOFTWARE ENGINEER INTERN</h1>
            <h2>Front End - Task Assesment</h2>
            
            <h3>Counter-app</h3>
        </div>

      <div className="counter">
        <span>{currentState}</span>
      </div>
      <div className="button-container">
        <button className="increment" onClick={handleIncrement}><span>Increment</span></button>
        <button className="decrement" onClick={handleDecrement}><span>Decrement</span></button>
      </div>
      <div className="reset">
        <img className="reset-img" src="/images/reset3.png" alt="reset" onClick={handleReset}/>
      </div>
      <div className="Footer">
          <span>All rights reserved &copy; {year} || @Nikesh Dahal</span>
      </div>

      </div>
        
    </div>
  );
};

export default Counter;




