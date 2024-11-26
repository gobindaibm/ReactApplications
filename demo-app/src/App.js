import React from 'react'
import logo from './logo.svg';
//import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import './css/styles.css';
import NavigationMenu from './container/component/navigationMenu';
import Products from './pages/products'
import SignUpPage from './pages/signUp';
import ServicePage  from './pages/services';
import AboutUsPage from './pages/aboutUs';
import ContactUs from './pages/contactUs';
import SignInPage from './pages/signIn';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <NavigationMenu/>

        <Routes>
          <Route path="/" element={<Navigate to="/signup" replace />} />

          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/services" element={<ServicePage/>} />
          <Route path="/about-us" element={<AboutUsPage/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/login" element={<SignInPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
