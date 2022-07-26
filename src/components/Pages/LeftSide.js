import React from 'react';
import bg from '../../assets/bg.jpg'
import logo from '../../assets/logo.png'

const LeftSide = () => {
    return (
            <div style={{backgroundImage:  `url(${bg})`}} className='fixed max-w-96 bg-no-repeat bg-cover min-h-screen'>
                <div className='text-white p-10 flex flex-col justify-between'>
                    <img className='w-14' src={logo}/>
                    <h3 class="text-2xl object-bottom">© 2022 Fidia Creatives, Inc.</h3>
                </div>
            </div>
    );
};

export default LeftSide;