import {Link,Outlet} from 'react-router-dom'
const ShopNavBar = ()=>{

    return(
        <div>
            <nav className='navbar navbar-expand-md bg-dark' data-bs-theme="dark">
                <ul className='navbar-nav'>
                    <li className='nav-item'>                        
                        <Link className='nav-link active' to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/electronic">Electronic</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/clothing">Clothing</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/furniture">Furniture</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/state-share">State Sharing</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/search">Search</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/context">Context Demo</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/refdemo">Ref Demo</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/reducerdemo">Reducer Demo</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/effect">Effect Demo</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default ShopNavBar