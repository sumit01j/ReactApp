import { useRef } from "react";

const CountRef = () => {

    const ref = useRef(0)

    // event handling logic 
    const handleClick = () => {
        //directly manipulating ref.current
        ref.current = ref.current+1;
        console.log(ref.current)
    }

    //rendering logic
    return(
        <div>
            <button onClick={handleClick}>{ref.current}</button>
        </div>
    )

}

export default CountRef