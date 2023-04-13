import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Main from '../Layout/Main';

import Payment from '../Component/Pages/Billing/Payment';
import Business from '../Component/Business/Business';


const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children:[
          
       
            {
               path:'/',
               element: <Payment></Payment>
            },
            
       

        ]
      }

       
      
    ])


export default router;