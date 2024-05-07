import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ShopNavBar from './ShopNavBar'
import Home from '../components/Home'
import Furniture from '../components/furniture/Furniture'
import Electronic from '../components/electronics/Electronic'
import Clothing from '../components/clothing/Clothing'
import Mobile from '../components/electronics/mobile/Mobile'
import Laptop from '../components/electronics/laptop/Laptop'
import MobileGallary from '../components/electronics/mobile/MobileGallary'
import MobileDetail from '../components/electronics/mobile/MobileDetail'
import Men from '../components/clothing/Men'
import Women from '../components/clothing/Women'
import Kids from '../components/clothing/Kids'
import LaptopGallary from '../components/electronics/laptop/LaptopGallary'
import LaptopDetail from '../components/electronics/laptop/LaptopDetail'
import CommonParent from '../components/state_sharing/CommomParent'
import FilterableList from '../components/state_sharing/FilterableList'
import ContextDemo from '../components/context/ContextDemo'
import RefDemo from '../components/ref/RedDemo'
import ReducerDemo from '../components/reducer/ReducerDemo'
import EffectDemo from '../components/effect/EffectDemo'

//Router Component
const ShopRouter = () => {

    //Route definitions 
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <ShopNavBar />}>
                    {/* child rout definitions */}
                    <Route index element={ <Home/> }/>
                    <Route path='furniture' element={ <Furniture/> }/>
                    <Route path='electronic' element={ <Electronic/> }>
                        {/*Child route of electronic route */}
                        <Route path='mobile' element={ <Mobile/> }>
                            {/*Child route of MOBILE route */}
                            <Route path='' element={ <MobileGallary/> }/>
                            <Route path='mobile-detail/:mobile_id' element={ <MobileDetail/> } />
                        </Route>
                        <Route path='laptop' element={ <Laptop/> }>
                            <Route path='' element={ <LaptopGallary/> }/>
                            <Route path='laptop-detail/:laptop_id' element={ <LaptopDetail/> } />
                        </Route>
                    </Route>                    
                    <Route path='clothing' element={ <Clothing/> }>
                        <Route path='men' element={ <Men/> } />
                        <Route path='women' element={ <Women/> } />
                        <Route path='kids' element={ <Kids/> } />
                    </Route>
                    <Route path='state-share' element={ <CommonParent/> }/>
                    <Route path='search' element={ <FilterableList/> }/>
                    <Route path='context' element={ <ContextDemo/> }/>
                    <Route path='refdemo' element={ <RefDemo/> }/>
                    
                    <Route path='reducerdemo' element={ <ReducerDemo/> }/>
                    <Route path='effect' element={<EffectDemo/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ShopRouter