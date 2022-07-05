import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/public/Login'
import { Register } from './pages/public/Register'
import { ForgotPassword } from './pages/public/ForgotPassword'
import { Products } from './pages/private/Products'
import { Sales } from './pages/private/Sales'
<<<<<<< HEAD
=======
import { Warehouse } from './pages/private/Warehouse'
>>>>>>> 70ab4d5c99d06b4ef320ff1e18092e937d3e7ca8

import './styles/Products.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot' element={<ForgotPassword />} />
      <Route path='/products' element={<Products />} />
      <Route path='/sales' element={<Sales />} />
<<<<<<< HEAD
=======
      <Route path='/warehouse' element={<Warehouse />} />
>>>>>>> 70ab4d5c99d06b4ef320ff1e18092e937d3e7ca8
    </Routes>
  </BrowserRouter>
);


