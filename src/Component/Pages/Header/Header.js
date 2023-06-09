import React, { useState } from 'react';
import logo from '../../../Asset/logo.png';
import {Link} from 'react-router-dom';

import './header.css';

import styles from '../../../Style';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className={`header py-10 mb-5  ${styles.paragraph}`}>
                        {/* Navbar Started */}
                          <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                        <div className="relative flex items-center justify-between nav">
                          <a
                            href="/"
                            aria-label="orbido"
                            title="orbido"
                            className="inline-flex items-center"
                          >
                            
                             <img src={logo} alt="" className='w-20' />
                             <a
                                href="/"
                                aria-label="Orbido"
                                title="Orbido"
                                className=" font-semibold tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                             <span className="text-xl font-bold tracking-wide text-gray-200 uppercase">
                   OR<span className="text-yellow-600">BIDO</span> 
                  </span>
                              </a>
                          </a>
                          <ul className=" items-center hidden space-x-8 lg:flex">
                            <li>
                              <Link
                                to="/"
                             
                                className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                               Home
                              </Link>
                            </li>
                            <li>
                              <a
                                href="/"
                              
                                className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                               About Us
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                             
                                className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Features
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                              
                                className="font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                               Solution
                              </a>
                            </li>
                            
                            
                          </ul>
                          <div className="lg:hidden">
                            <button
                              aria-label="Open Menu"
                              title="Open Menu"
                              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                              onClick={() => setIsMenuOpen(true)}
                            >
                              <svg className="w-5 text-cyan-400" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                              </svg>
                            </button>
                            {isMenuOpen && (
                              <div className="absolute pl-5 top-0 right-0 w-4/7">
                                <div className="p-5 bg-black text-cyan-400 border rounded shadow-sm">
                                  <div className="flex items-center justify-between mb-4">
                                    <div>
                                      <a
                                        href="/"
                                        aria-label="Orbido"
                                        title="Orbido"
                                        className="inline-flex items-center"
                                      >
                                
                                        <img src={logo} alt="" className='w-24' />
                                       
                                      </a>
                                    </div>
                                    <div>
                                      <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        className="  lg:flex p-2 -mt-2  transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                          <path
                                            fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <nav>
                                    <ul className="space-y-4">
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="Home"
                                          title="Home"
                                          className="font-medium tracking-wide text-cyan-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          Home
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="About us"
                                          title="About us"
                                          className="font-medium tracking-wide text-cyan-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          About Us
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="features"
                                          title="features"
                                          className="font-medium tracking-wide text-cyan-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          Features
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="solution"
                                          title="solution"
                                          className="font-medium tracking-wide text-cyan-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          Solution
                                        </a>
                                      </li>
                                      
                                    </ul>
                                  </nav>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                         
                      </div>
                      {/* NabVar Ended */}
                     
  
                     
        </div>
      );
   };

export default Header;