import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">HomeChef</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                    user?.email ?
                        <>
                            <ul className="menu menu-horizontal p-0">
                                <li><Link to='/service'>Add Services</Link></li>
                                <li><Link to='/review'>My Reviews</Link></li>
                            </ul>
                            <li className='btn bg-green-600 border-green-600 font-semibold'><button onClick={handleLogOut} className='btn-ghost'>Log Out</button></li>
                        </> :
                        <li className='btn bg-green-600 border-green-600 font-semibold'><Link to='/login'>Login</Link></li>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;