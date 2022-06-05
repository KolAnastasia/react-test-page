import { useState } from "react";
import Header from "../../components/Header";
const TimePage = () => {
    
    const [time, setTime] = useState("00:00:00");
    
    const handleClick = () => {
        setInterval (() => {
            const time = new Date().toLocaleTimeString();
            setTime(time)
        }, 1000)
        
      
    }
  
    return (
       <>
        <Header title="timePage"></Header>
        <p> 
        <button onClick={handleClick}>
        get time     
        </button> 

        { time }
        </p>
       </>
      
    )
}

export default TimePage;