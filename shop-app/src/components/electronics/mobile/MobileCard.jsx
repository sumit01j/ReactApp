const MobileCard = ({mobile}) => {

    return(
        <div className="card my-3" style={{width:'15rem'}}>
            <img className="card-img-top" src={mobile.imageUrl} alt={mobile.model}/>
            <div className="card-body">
                <h4 className="card-title">{mobile.brand} {mobile.model}</h4>
                <h5 className="card-subtitle"> &#8377; {mobile.price}</h5>
            </div>
        </div>
    )
}

export default MobileCard