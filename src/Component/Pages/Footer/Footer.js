import styles from "../../../Style"
import logo from '../../../Asset/logo.png';
import linkdIn from '../../../Asset/linkedin.svg';

const Footer = () =>  {
        return (
          <div className={`${styles.flexCenter} ${styles.paddingY} flex-col text-left text-white`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
              <div className="flex-[1] flex flex-col justify-start mr-10">
                <a
                  href="/"
                  aria-label="Go home"
                  title="Company"
                  className="inline-flex items-center"
                >
                  <img src={logo} alt="" className="w-24" />
             
                  <span className="text-4xl font-bold tracking-wide text-gray-200 uppercase">
                   OR<span className="text-yellow-600">BIDO</span> 
                  </span>
                </a>
                <p className={`${styles.paragraph} mt-4 max-w-[312px] ml-4`}>
          A new way to make the payments easy, reliable and secure.
        </p>
              </div>
              <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                <div>
                  <p className="font-semibold tracking-wide text-gray-200">
                    Useful Links
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                       Content
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        How It Works
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        Create
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        Explore
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        Terms & services
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold tracking-wide text-gray-200">
                    
                    Community
                  </p>
                  <ul className="mt-2 space-y-2">
                    
                    <li>
                      <a
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                       Partner
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                       Suggestions
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                       Newsletters
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold tracking-wide text-gray-200">Partner</p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        Our Partner
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        Become a partner
                      </a>
                    </li>
                    
                  </ul>
                </div>
              
              </div>
            </div>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
              <p className="text-sm text-gray-200">
                © Copyright 2023 Orbido. All rights reserved.
              </p>
              <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                  href="/"
                  className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </a>
                <a
                  href="/"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-gray-200  transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  {/* <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    
                  </svg> */}
                  {/* <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
        <path  d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
        C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
        M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
        c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
        s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"/>
      </svg> */}
    
                  <img src={linkdIn} alt="" className="  text-gray-400 h-5"fill="currentColor"/>
                </a>
               
              </div>
            </div>
          </div>
        );
                };
       

      export default Footer;
