import React from 'react';
import styles from '../../Style';
import arrow from '../../Asset/arrow-up.svg'
import Button from '../Button/Button';
import './Service.css';
const Service = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-gradient-to-r from-gray-700 to-gray-500 rounded-[20px] box-shadow text-left grad`}>
        <div className="flex-1 flex flex-col">
          <h2 className={styles.heading2}>Let’s try our service now!</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
    
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button />
        </div>
      </section>
    );
};

export default Service;