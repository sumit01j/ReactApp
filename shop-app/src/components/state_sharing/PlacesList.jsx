const PlacesList = ({places}) => {

    const placeList = places.map(p => <li className="list-group-item" key={p.id}>{p.name}</li>)

    return(
        <div className="border border-2 border-success rounder-2 m-2 p-2">
            <ul className="list-group">
                {placeList}
            </ul>
        </div>
    )

}

export default PlacesList