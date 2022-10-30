import React, { useEffect, useState } from 'react'
import "./TimerButton.css"
const TimerButton = () => {
    const [time, setTime] = useState(0)
    const [timeOn, setTimeOn] = useState(false);
    useEffect (() => {
        let interval = null;
        if (timeOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else { clearInterval(interval)}
        return () => clearInterval(interval)
    }, [timeOn])
  return (
    <div className='timer'>
        <span>{("0" + Math.floor(time/60000)%60).slice(-2)}:</span>
        <span>{("0" + Math.floor(time/1000)%60).slice(-2)}:</span>
        <span>{("0" + (time/10)%100).slice(-2)}</span>
        {!timeOn && time === 0 && 
        <button className="btn" onClick={() => setTimeOn(true)}>Start</button>
        }
        {timeOn && 
        <button className="btn" onClick={() => setTimeOn(false)}>Stop</button>
        }
        {!timeOn && time !== 0 && 
        <button className="btn" onClick={() => setTimeOn(true)}>Resume</button>
        }
        {!timeOn && time > 0 &&  
        <button className="btn" onClick={() => setTime(0)}>Reset</button>
        }
        
    </div>
  )
}

export default TimerButton