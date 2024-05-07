import {Link} from 'react-router-dom'
import laptops from "./laptop_data"
import LaptopCard from './LaptopCard'

const LaptopGallary = () => {

    const laptopCarList = laptops.map(l => 
      <Link key={l.id} to={"laptop-detail/" + l.id}> <LaptopCard laptop={l}/> </Link>)

    return (
        <div>
            {laptopCarList}
        </div>
    )

}

export default LaptopGallary
