import { useParams, useNavigate } from 'react-router-dom'
import laptops from './laptop_data'

const LaptopDetail=()=>{
    const navigate = useNavigate()
    const {laptop_id} = useParams()
    const laptopObj = laptops.find( l => l.id == laptop_id) 

    return (
    
        <div>
        <h3>{laptopObj.brand} {laptopObj.model}</h3>
            <img src={laptopObj.imageUrl}/>
            <h5>&#8377;{laptopObj.price}</h5>
            <table className='table table-striped table-primary'>
                <thead>
                    <tr>
                        <th>Specification</th><th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><th>Internal Storage</th><td>{laptopObj.specification.storage }</td></tr>
                    <tr><th>RAM</th><td>{laptopObj.specification.ram }</td></tr>
                    <tr><th>Display</th><td>{laptopObj.specification.display }</td></tr>
                    <tr><th>Processor</th><td>{laptopObj.specification.processor }</td></tr>
                </tbody>
            </table>
            <button className='btn btn-outline-secondary'  onClick={ () => navigate("/electronic/laptop") }>Back to Gallery</button>
        </div>
    )

}

export default LaptopDetail