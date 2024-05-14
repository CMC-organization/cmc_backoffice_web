import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { addLocale } from 'primereact/api';

/* AUTH */
import Login from '../modules/Auth/pages/Login';
import Orders from '../modules/Dashboard/pages/Orders';
import Products from '../modules/Dashboard/pages/Products';
import CreateProducts from '../modules/Dashboard/pages/Products/CreateProduct';
import EditProduct from '../modules/Dashboard/pages/Products/EditProduct';
import Access from '../modules/Dashboard/pages/Access';
import Clients from '../modules/Dashboard/pages/Clients';

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
    <Route path='/login' element={<Login />} />
    <Route path='/orders' element={<Orders />} />
    <Route path='/products' element={<Products />} />
    <Route path='/products/create' element={<CreateProducts />} />
    <Route path='/products/edit' element={<EditProduct />} />
    <Route path='/access' element={<Access />} />
    <Route path='/clients' element={<Clients />} />
    <Route path='*' element={<Navigate to='/login' />} />
   </Routes>
  </Router>
 );
};

export default AppStack;
