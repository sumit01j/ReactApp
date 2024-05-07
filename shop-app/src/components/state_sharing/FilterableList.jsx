import { useState } from "react"
import PlacesList from "./PlacesList"
import SearchComponent from "./SearchComponent"
import places from "./places_data"
import filterPlaces from "./searchPlace"

//common parent component
const FilterableList=()=>{

    const[searchQuery,setSearchQuery] = useState('')

    const handleSearchQuery = (e) =>{
        setSearchQuery(e.target.value)
    }

    //call business logic of filtering list
    const searchResult = filterPlaces(places,searchQuery)

    return(
        <div> 
            <SearchComponent searchQuery={searchQuery} onSearch={handleSearchQuery} />
            <PlacesList places={searchResult}/>
        </div>
    )

}

export default FilterableList