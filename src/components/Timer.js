import React, {useState,useEffect} from "react";


const Timer = ({inputTime, setInputTime, isRunning, setRunning, list, setList}) => {

  useEffect(() => {

    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        

        setInputTime((e) => e + 10);
      }, 10)
    } else {


      clearInterval(interval)
    }
    return () => clearInterval(interval)



  }, [isRunning])






  return(


    <div className="container">
      <div className="timerin">
      <span>{("0" + Math.floor(inputTime / 360000 % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor(inputTime / 60000 % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor(inputTime / 1000 % 60)).slice(-2)}</span>

    </div>

    <div className="todo-container">
        {isRunning ? (
          <button className="todo-button" type="submit" onClick={() => { setInputTime(0, setRunning(false)) }}> Stop Work</button>
        ):(
        <button className="todo-button" type="submit" onClick={() => { setRunning(true) }}> Start Work</button>
        )}



       </div>
       </div>
  )}


export default Timer;


