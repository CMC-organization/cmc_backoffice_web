import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

/* AUTH */
import Register from '../modules/Auth/pages/Register';
import Login from '../modules/Auth/pages/Login';
import LostPassword from '../modules/Auth/pages/LostPassword';
import EmailSent from '../modules/Auth/pages/EmailSent';
import RecoverPassword from '../modules/Auth/pages/RecoverPassword';

/* DASHBOARD */

const AppStack = () => {
 return (
  <Router>
   <Routes>
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    <Route path='/lostpassword' element={<LostPassword />} />
    <Route path='/emailsent' element={<EmailSent />} />
    <Route path='/recoverypassword' element={<RecoverPassword />} />
    <Route path='*' element={<Navigate to='/login' />} />
   </Routes>
  </Router>
 );
};

export default AppStack;
