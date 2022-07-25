import React from 'react';
import bg from '../../assets/bg.jpg'

const SignUp = () => {
  return (
    <div className='flex justify-between'>
      <div class="hero min-h-screen  brightness-50" style={{background: `url(${bg})`}}>
        <div class="hero-overlay bg-primary bg-opacity-90"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div>
        <h2>Right Side</h2>
      </div>
    </div>
  );
};

export default SignUp;