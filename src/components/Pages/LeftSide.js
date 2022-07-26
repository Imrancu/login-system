import React from 'react';
import bg from '../../assets/bg.jpg';
import logo from '../../assets/logo.png'
import "./LeftSide.css"

const LeftSide = () => {
    return (
        <div className='relative bg-no-repeat'>
            <img className='absolute h-screen' src={bg} alt="" />
            <div className='text-white absolute'>
                <div className='left-side-content flex flex-col justify-between h-screen p-10'>
                    <img className='w-16' src={logo} alt="" />
                    <h3 class="text-2xl">© 2022 Fidia Creatives, Inc.</h3>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;