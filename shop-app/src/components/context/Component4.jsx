import { useContext } from "react"
import { MyContext } from "./Component1"

const Component4 = () => {

    //subscribe to the context and get the value.\
    const {message, showAlert} = useContext(MyContext)
    
return (
    <div className="border border-3 border-secondary rounded p-2">
        component 4 is chile of component 3 
        <h2>Message from top most component 1 {message}</h2>
        <button onClick={showAlert}>Show Alert</button>
    </div>
)
}


export default Component4