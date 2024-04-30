import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

/* AUTH */
import Login from '../modules/Auth/pages/Login';

/* DASHBOARD */

const AppStack = () => {
 return (
  <Router>
   <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='*' element={<Navigate to='/login' />} />
   </Routes>
  </Router>
 );
};

export default AppStack;
