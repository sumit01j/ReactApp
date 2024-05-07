import {Link} from 'react-router-dom'
import MobileCard from "./MobileCard"
import mobiles from "./mobile_data"

const MobileGallary = () => {

    const mobileCarList = mobiles.map(m => 
      <Link key={m.id} to={"mobile-detail/" + m.id}> <MobileCard mobile={m}/> </Link>)

    return (
        <div>
            {mobileCarList}
        </div>
    )

}

export default MobileGallary
