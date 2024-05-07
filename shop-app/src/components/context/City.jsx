import { useContext } from "react"
import { StateContext } from "./StateOfCountry"
import cities from "./data/city_data"

const City = () => {

    const selectedState = useContext(StateContext)
    
    const filterdCity = cities.filter(ct => ct.state_id == selectedState)

return(
    <div className="mt-2">
    <lable className="form-lable" htmlfor="ct">Select City</lable>
    <select className="form-select" id="ct" >
        { filterdCity.map( ct => 
            <option key={ct.id} value={ct.id}>{ct.name}</option>)
        }
    </select>    
</div>
)
}

export default City;