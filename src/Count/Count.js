import React,{useState} from "react";
import './style.css';

const Count = () => {

    let Time = new Date().toLocaleTimeString();
    const [count,setCount] = useState(0);
    const [curtime,SetTime] = useState(Time);

    const Inc = () => {
        setCount(count+1)
    }
    const Dec = () => {
        setCount(count-1)
    }
    const getTime = () => {
         Time = new Date().toLocaleTimeString();
         SetTime(Time);
    }
    return(
        <div className="pageStyle">
        <h2>{count}</h2>
        <button onClick={Inc}>Increment ➕</button>
        <button onClick={Dec}>Decrement ➖</button>
        <hr/>
        <h2>{curtime}</h2>
        <button onClick={getTime}>get Time</button>
        </div>
    )
}

export default Count;