import { useEffect,useState } from "react"

const TimerEffect = () => {

    const [count,setCount] = useState(0)

    useEffect( () => {
        //setup function in use effect hook

        //timer effect 
        setTimeout(() => {
                setCount(count+1) // updating count state after 1 sec delay
            }, 1000);
       // }, []); //dependancies as empty array
    }, [count]); //dependancies as state of component

    ///rendering logic
    return(
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default TimerEffect