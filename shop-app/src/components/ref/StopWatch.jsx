
import { useRef, useState } from "react"
const StopWatch = () => {

    const [startTime,setStartTime] = useState(null)
    const [currentTime,setCurrentTime] = useState(null)

    const intervalTimeoutRef = useRef(null)

    const handleStart = () => {
        setStartTime(Date.now())
        setCurrentTime(Date.now())
        clearInterval(intervalTimeoutRef.current)

        //storing timeout ID in ref object
       intervalTimeoutRef.current =  setInterval( ()=>{
            setCurrentTime(Date.now())
        },10)

    }

    const handleStop = () => {
        //clear time interval through ref
        clearInterval(intervalTimeoutRef.current)
    }

    let minutes=0,seconds=0;
    if(startTime != null && currentTime != null){
        const durationInMilisecs = currentTime-startTime;
        seconds = (durationInMilisecs/1000)%60;
        minutes = Math.floor(durationInMilisecs/(1000*60));
    }

    seconds = seconds <10?"0"+seconds.toFixed(2):seconds.toFixed(2)
    minutes = minutes < 10 ? "0"+minutes : minutes 
    return(
        <div>
            <h2>Stop watch</h2>
            <h3>{minutes}:{seconds}</h3>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default StopWatch