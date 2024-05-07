import { useState } from "react"
import InputComponent from "./InputComponent"
import OutputComponent from "./OutputComponent"

const CommonParent=()=>{

    //state of input component
    const [message,setMessage] = useState('')

    //event handling logic
    const handleMessageChange = (e)=>{
        setMessage(e.target.value)
    }

    return(
        <div>
            <InputComponent msg={message} onInputProp={handleMessageChange}/>
            <OutputComponent message={message}/>
        </div>
    )
}

export default CommonParent