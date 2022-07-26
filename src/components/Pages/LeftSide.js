import React from 'react';
import bg from '../../assets/bg.jpg'

const LeftSide = () => {
    return (
            <div style={{backgroundImage:  `url(${bg})`}} className='fixed w-full bg-no-repeat h-screen'>
                <div className='text-white pl-14'>
                    <h1 class="text-3xl mt-7 font-bold">logo</h1>
                    <p className='text-5xl font-bold my-56 ml-40'>Middle</p>
                    <h3 class="text-2xl">© 2022 Fidia Creatives, Inc.</h3>
                </div>
            </div>
    );
};

export default LeftSide;