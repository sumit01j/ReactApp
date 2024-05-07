import { useReducer, useState } from "react"; 
//global reducer function

function countReducer(state,action){
    switch(action.type){
        case "INCREMENT" : return {...state , count:state.count+1};
        case "DECREMENT" : return {...state , count:state.count-1};
        case "Increment by AMT" : return{...state,count:state.count+action.payload_prop};
        case "Decrement by AMT" : return{...state,count:state.count-action.payload_prop};
        default: throw Error(`Invalid action ${action.type} `)
    }
}

const CountIncDec =() =>{
    const [state,dispatch] = useReducer(countReducer,{count:0})
    const [amount,setAmount] = useState(0)

    const handleIncrement =() =>{
        dispatch({type:"INCREMENT"})
    }

    const handleDecrement =() => { 
        if(state.count > 0)
            dispatch({type:"DECREMENT"})
        }

    const handleIncrByAmount = (amount) =>{
        dispatch({type:"Increment by AMT", payload_prop:amount})
    }

    const handleDecByAmount = (amount) =>{
        dispatch({type:"Decrement by AMT", payload_prop:amount})
    }

    return(
        <div className="p-3">
            <input type='number' placeholder="Enter Number" 
                value={amount} onChange={e=>setAmount(e.target.value)}
            />
            <button className="btn btn-success me-3" onClick={()=>handleDecByAmount(amount)}>By Amount</button>
            <button className="btn btn-success" onClick={handleDecrement}>-</button>
            <span className="mx-3">{state.count}</span>
            <button className="btn btn-success" onClick={handleIncrement}>+</button>
            <button className="btn btn-success ms-3" onClick={()=>handleIncrByAmount(Number(amount))}>By Amount</button>
        </div>
    )

}

export default CountIncDec