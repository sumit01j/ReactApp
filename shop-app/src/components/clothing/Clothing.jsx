import {Link, Outlet} from 'react-router-dom'

const Clothing = () => {

    return (
    <div>
        <h2>Clothing Section </h2>
        <nav className='navbar navbar-expand-md bg-secondary' data-bs-theme="dark">
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link active' to="men">Men</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="women">Women</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="Kids">Kids</Link>
                </li>

            </ul>
        </nav>
        <Outlet/>
    </div>
    )

}
export default Clothing