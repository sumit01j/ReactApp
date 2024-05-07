import { useRef } from "react"
const InputDom = () => {

    const inputRef = useRef(null)

    //event handling logic
    const handleClick=() => {
        //focus in the input HTML element by manipulating DOM api using ref
        inputRef.current.focus() // calling browser DOM API
    }


    return(
        <div>
            <input ref={inputRef}/>
            <button onClick={handleClick}>Click to Focus</button>
        </div>
    )
}

export default InputDom