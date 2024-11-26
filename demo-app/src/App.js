import React from 'react'
import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Router, Routes, Route, Navigate } from 'react-router-dom';
import './css/styles.css';
import NavigationMenu from './container/component/navigationMenu';
import Products from './pages/products'
import SignUpPage from './pages/signUp';
import ServicePage from './pages/services';
import AboutUsPage from './pages/aboutUs';
import ContactUs from './pages/contactUs';
import SignInPage from './pages/signIn';
import PrivateRoute from './utils/privateRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <NavigationMenu />

        <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />

        {/* PrivateRoutes */}
        <Route element={<PrivateRoute />}>
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
          {/* <Route path="/" element={<Navigate to="/products" replace />} /> */}

          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
