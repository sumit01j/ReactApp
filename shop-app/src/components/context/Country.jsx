import { useState,createContext } from 'react'
import countries from './data/country_data'
import StateOfCountry from './StateOfCountry'

//create context object globally & export it to be available to child components 

export const CountryContext = createContext()

const Country =()=>{
const [selectedCountry,setSelectedCountry] = useState('')

const handleCountryChange = (e) =>{
    setSelectedCountry(e.target.value)
}

    return(
        <div className='p-2 m-2'> 
            <label className='form-label' htmlFor="c">Select country</label>
            <select className='form-select' id="c" value={selectedCountry} onChange={handleCountryChange}>
                {countries.map( cnt => <option key={cnt.id} value={cnt.id}>{cnt.name}</option>)}
            </select>
          { selectedCountry &&
            <CountryContext.Provider value={selectedCountry}>
                <StateOfCountry/>
            </CountryContext.Provider>
            }
        </div>
    )
}

export default Country