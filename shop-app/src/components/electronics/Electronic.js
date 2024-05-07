import {Link, Outlet} from 'react-router-dom'

const Electronic = () => {

    return (
        <div>
            <h2 className='text-center text-secondary'>Electronics Section </h2>
            <nav className='navbar navbar-expand-md bg-primary' data-bs-theme="dark">
                <ul className='navbar-nav'>
                    <li className='navbar-item'>
                        <Link className='nav-link active'  to="mobile">Mobile</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link className='nav-link'  to="laptop">Laptop</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Electronic