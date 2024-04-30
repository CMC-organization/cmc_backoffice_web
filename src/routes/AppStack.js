import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

/* AUTH */
import Login from '../modules/Auth/pages/Login';
import Orders from '../modules/Dashboard/pages/Orders';

/* DASHBOARD */

const AppStack = () => {
 return (
  <Router>
   <Routes>
    {/* <Route path='/login' element={<Login />} /> */}
    <Route path='/orders' element={<Orders />} />
    {/* <Route path='*' element={<Navigate to='/login' />} /> */}
   </Routes>
  </Router>
 );
};

export default AppStack;
