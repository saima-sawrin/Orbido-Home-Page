import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../Style';
import '../App.css'
import Header from '../Component/Pages/Header/Header';
import Footer from '../Component/Pages/Footer/Footer';
import Business from '../Component/Business/Business';
import Payment from '../Component/Pages/Billing/Payment';
import Hero from '../Component/Pages/Hero/Hero';
import Clients from '../Component/States/Clients';
import Service from '../Component/Service/Service';

const Main = () => {
    return (
        // <div className="bg-primary w-full overflow-hidden">
        //     <Header></Header>
        //     <Business></Business>
        //     <Outlet></Outlet>
        //     <Footer></Footer>
        // </div>
        <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Header></Header>
      </div>
    </div>

    <div className={`bg-gradient-to-r  from-#22160E to-cyan-950 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       <Hero></Hero>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Business />
        <Payment/>
       <Clients></Clients>
       <Service></Service>
        <Footer />
      </div>
    </div>
  </div>
       
    );
};

export default Main;