const SearchComponent = ({searchQuery,onSearch})=>{
    return(
        <div className="border border-2 border-primary rounded-2 m-2 p-2">
            <input placeholder="Search Query" value={searchQuery}
            onChange={onSearch}/>
        </div>
    )
}

export default SearchComponent