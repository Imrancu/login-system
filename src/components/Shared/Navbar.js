import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-end pr-16 bg-primary'>
            <button className='btn btn-link text-white'><Link to="/">Home</Link></button>
            <button className='btn btn-link text-white'><Link to="login">Login</Link></button>
            <button className='btn btn-link text-white'><Link to="signup">Sign Up</Link></button>
        </div>
    );
};

export default Navbar;