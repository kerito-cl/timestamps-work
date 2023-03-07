import React, {useState, useEffect} from 'react';
import Timer from './Timer.js'

const Form = ({ inputDate, setInputDate, isRunning,
  setIsRunning, inputTime, list, setList, work, setWork }) => {

  function createWork() {

    setWork(list.filter(h => h.id !== work.id))

    }; 

  useEffect(() => {
    let d = new Date(Date.now())
    let a = list[list.length - 1]
    setInputDate(d.toString())

    if (isRunning === true) {
      console.log("empieza")
      a.startDate = d.toString()
      setList([...list, {startDate:a.startDate, id:Math.random() * 1000}])

    }

      else if (isRunning === false) {
        console.log("termina")
      
        a.endDate = d.toString()

        setList([...list, {endTime:a.endDate}])
        
        createWork()
    };

  },[isRunning]);
 
  
     
  return(

    <div>
      <form>    
      <input value={inputDate} className="todo-input" />

    </form>

    <ul>
        {work.map((w) => (


          <li>START:{w.startDate}||
            END:{w.endDate}</li>


          ))}

      </ul>
    </div>

  );
};


export default Form;
