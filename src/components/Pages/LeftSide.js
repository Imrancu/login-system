import React from 'react';
<<<<<<< HEAD
import bg from '../../assets/bg.jpg';
import logo from '../../assets/logo.png'
import "./LeftSide.css"

const LeftSide = () => {
    return (
        <div /* style={{backgroundImage: `url(${bg})`}} */ className='relative bg-no-repeat'>
            <img className='absolute h-screen' src={bg} alt="" />
            <div className='text-white absolute'>
                <div className='left-side-content flex flex-col justify-between h-screen p-10'>
                    <img className='w-16' src={logo} alt="" />
                    <h3 class="text-2xl">© 2022 Fidia Creatives, Inc.</h3>
=======
import bg from '../../assets/bg.jpg'
import logo from '../../assets/logo.png'

const LeftSide = () => {
    return (
            <div style={{backgroundImage:  `url(${bg})`}} className='fixed max-w-96 bg-no-repeat bg-cover min-h-screen'>
                <div className='text-white p-10 flex flex-col justify-between'>
                    <img className='w-14' src={logo}/>
                    <h3 class="text-2xl object-bottom">© 2022 Fidia Creatives, Inc.</h3>
>>>>>>> 1bd4bdd3fe06e978b11f50e5e3140265e381402c
                </div>
            </div>
        </div>
    );
};

export default LeftSide;