import { useParams, useNavigate } from 'react-router-dom'
import mobiles from './mobile_data'

const MobileDetail = ()=>{

    const navigate = useNavigate()
    const {mobile_id} = useParams()
    const mobileObj = mobiles.find( m => m.id == mobile_id) 

    return (
    
        <div>
        <h3>{mobileObj.brand} {mobileObj.model}</h3>
            <img src={mobileObj.imageUrl}/>
            <h5>&#8377;{mobileObj.price}</h5>
            <table className='table table-striped table-primary'>
                <thead>
                    <tr>
                        <th>Specification</th><th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><th>Internal Storage</th><td>{mobileObj.specification.storage }</td></tr>
                    <tr><th>RAM</th><td>{mobileObj.specification.ram }</td></tr>
                    <tr><th>Primary Camera</th><td>{mobileObj.specification.camera.primary }</td></tr>
                    <tr><th>Front Camera</th><td>{mobileObj.specification.camera.front }</td></tr>
                </tbody>
            </table>
            <button className='btn btn-outline-secondary'  onClick={ () => navigate("/electronic/mobile") }>Back to Gallery</button>
        </div>
    )
}

export default MobileDetail