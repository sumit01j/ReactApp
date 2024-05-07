const LaptopCard = ({laptop}) => {

    return(
        <div className="card my-3" style={{width:'15rem'}}>
            <img className="card-img-top" src={laptop.imageUrl} alt={laptop.model}/>
            <div className="card-body">
                <h4 className="card-title">{laptop.brand} {laptop.model}</h4>
                <h5 className="card-subtitle"> &#8377; {laptop.price}</h5>
            </div>
        </div>
    )
}

export default LaptopCard