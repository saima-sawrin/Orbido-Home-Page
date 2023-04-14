import React from 'react';

const Button = ({styles}) => {
    return (
        <div>
            <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-black bg-gradient-to-t from-cyan-400 to-cyan-200 rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
        </div>
    );
};

export default Button;