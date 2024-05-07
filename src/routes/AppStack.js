import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { addLocale } from 'primereact/api';

/* AUTH */
import Login from '../modules/Auth/pages/Login';
import Orders from '../modules/Dashboard/pages/Orders';
import Products from '../modules/Dashboard/pages/Products';

/* DASHBOARD */

const AppStack = () => {
 addLocale('pt', {
  firstDayOfWeek: 0,
  showMonthAfterYear: true,
  dayNames: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
  dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
  dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  monthNames: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  today: 'Hoje',
  clear: 'Limpar',
 });

 return (
  <Router>
   <Routes>
    {/* <Route path='/login' element={<Login />} /> */}
    <Route path='/orders' element={<Orders />} />
    <Route path='/products' element={<Products />} />
    {/* <Route path='*' element={<Navigate to='/login' />} /> */}
   </Routes>
  </Router>
 );
};

export default AppStack;
