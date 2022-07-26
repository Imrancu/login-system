import React from 'react';
import bg from '../../assets/bg.jpg'

const LeftSide = () => {
    return (
            <div style={{backgroundImage:  `url(${bg})`}} className='fixed w-1/2 top-0 bg-no-repeat min-h-screen'>
                <div className='text-white pl-5'>
                    <h1 class="text-3xl mt-5 font-bold">logo</h1>
                    <p className='text-5xl font-bold my-56 ml-32'>Middle</p>
                    <h3 class="text-2xl">© 2022 Fidia Creatives, Inc.</h3>
                </div>
            </div>
    );
};

export default LeftSide;