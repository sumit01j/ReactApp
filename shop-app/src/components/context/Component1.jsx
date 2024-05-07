
import { useState, createContext } from "react"
import Component2 from "./Component2"

//create Context object globally and export it

export const MyContext = createContext()


const Component1 = () => {

    //State of parent Component
    const [message, setMessage] = useState('')

    //event handling
    const handleMEssageChange = e => setMessage(e.target.value)

    const showAlert = () => alert("this is alert from Component1")

    return (
        <div className="border border-3 border-primary rounded p-3">
            Component 1 - parent Component <br/>
            <input className="form-control my-2" value={message} onChange={handleMEssageChange} placeholder="Enter message" />
            <MyContext.Provider value={ {message, showAlert} }>
                <Component2/>
            </MyContext.Provider>
            
        </div>
    )

}

export default Component1