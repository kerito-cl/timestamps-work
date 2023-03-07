import './App.css';
import React, {useState,useEffect} from "react";
import Form from "./components/Form.js";
import Timer from "./components/Timer.js";

function App() {

  const [inputTime, setInputTime] = useState(0)
  const [inputDate, setInputDate] = useState(Date.now())
  const [isRunning ,setRunning] = useState()
  const [work, setWork] = useState([{id:0}])
  const [list, setList] = useState([ {
    startDate:"",
    endDate:""
  }]);
  
 // const [seconds, setSeconds] = useState(0)
  //const [minutes, setMinutes] = useState(0)
  //const [hours, setHours] = useState(0)

  return (
    <div className="App">
      <header>
        
    <div className="container-time">

        <Timer inputTime={inputTime} setInputTime={setInputTime}
          isRunning={isRunning} setRunning={setRunning} list={list} setList={setList}/>
        <Form inputTime={inputTime}
          inputDate={inputDate} setInputDate={setInputDate}
          isRunning={isRunning} setRunning={setRunning} list={list} 
          work={work} setWork={setWork} setList={setList}/>
        

    </div>
    </header>

    </div>
  );
}

export default App;
