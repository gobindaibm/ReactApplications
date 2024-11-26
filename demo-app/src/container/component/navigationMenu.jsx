import React, { useState } from "react";
import {Link } from 'react-router-dom';
const NavigationMenu = () => {
    let isSignedInttt = localStorage.getItem("isSignedIn");
    const [showMediaIcons, setShowMediaIcons] = useState(false);
   const [isSignedIn, setIsSignedIn] =  useState(isSignedInttt);
   console.log('private Route=>',isSignedIn);

//    useState(() => {
//         console.log("Usestate initiation called");
//         return localStorage.getItem("isSignedIn");

//    });
   
    
   function logOut() {
        localStorage.setItem("isSignedIn", false);
        setIsSignedIn(false)
       setIsSignedIn(previousState => {
        return false
       })
        console.log('localStorage isSignedIn ', localStorage.getItem("isSignedIn"), isSignedIn);
    }
    console.log('private Route=>',isSignedIn);
    return (
        <nav className="navbar">
            <p className="logo">
                 <a href="/products"> BuyBest </a> 
            </p>
            <a href="#" className="toggle-button" onClick= {()=>setShowMediaIcons(!showMediaIcons)} >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                
            </a>
        
            <ul className=  { showMediaIcons ? "open nav-links " :"nav-links" } >
            
                <li className="nav-item">
                    <Link to="/products"> Product </Link>
                </li>
                <li className="nav-item">
                    <Link to="/services"> Membership </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact"> Contact Us </Link>
                </li>
                {
                  
                    isSignedIn ? <li className="nav-item">
                        <Link to="/login" onClick={logOut}> LogOut </Link></li> : 
                    
                    <>
                        <li className="nav-item">
                            <Link to="/login"> Login </Link>
                        </li>
                            <li className="nav-item">
                            <Link to="/signup"> SignUp </Link>
                        </li>
                     </>
                }
               
                
            </ul>

        </nav>
    );
};

export default NavigationMenu;