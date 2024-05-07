import City from "./City"
import { CountryContext } from "./Country"
import states from "./data/state_data"
import { createContext, useContext, useState } from "react"

//global context object and export to child

export const StateContext = createContext()

const StateOfCountry = () => {

    //subscribe to context and get the value from context 
    const selectedCountry = useContext(CountryContext)
    const [selectedState,setSelectedState]  = useState('')
    const filterdStates = states.filter(state => state.country_id == selectedCountry)

    const handleStateChange = e => setSelectedState(e.target.value)
    return (
        <div className="mt-2">
            <lable className="form-lable" htmlfor="st">Select State</lable>
            <select className="form-select" id="st" value={selectedState} onChange={handleStateChange}>
                { filterdStates.map( state => 
                    <option key={state.id} value={state.id}>{state.name}</option>)
                }
            </select>
            {selectedState &&
            <StateContext.Provider value={selectedState}>
                <City/>
            </StateContext.Provider>
            }
        </div>
    )
}

export default StateOfCountry