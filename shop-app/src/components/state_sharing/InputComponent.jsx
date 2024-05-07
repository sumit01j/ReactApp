import { useState } from "react"

const InputComponent=({msg, onInputProp})=>{

    //rendering logic
    return(
        <div className="border border-2 border-dark m-2 p-2">
            <h3>Input Component</h3>
            <input placeholder="Enter message" 
            value={msg}
            onChange={onInputProp}/>
        </div>
    )

}

export default InputComponent