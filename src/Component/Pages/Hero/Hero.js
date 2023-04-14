import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='lg:px-24 lg:mx-24 my-5 header '>
 
     <h1 className='text-5xl font-bold py-2 bg-gradient-to-r from-emerald-400 via-purple-800 to-pink-600  inline-block text-transparent bg-clip-text'>MAKE YOUR DREAM 
       </h1>
       <br />
       <h1 className='text-5xl font-bold bg-gradient-to-r from-emerald-400 via-purple-800 to-pink-600 inline-block text-transparent bg-clip-text'> WEBSITE STAND OUT</h1>
       <br />
       <h1 className='text-5xl font-bold  bg-gradient-to-r from-emerald-400 via-purple-800 to-pink-600    inline-block text-transparent bg-clip-text py-2'> IN A CROWD</h1>
     </div>

    );
};

export default Hero;