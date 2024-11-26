import React, { useState } from "react";

const NavigationMenu = () => {
   const [showMediaIcons, setShowMediaIcons] = useState(false);
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
                    <a href="/products"> Product </a>
                </li>
                <li className="nav-item">
                    <a href="/services"> Membership </a>
                </li>
                <li className="nav-item">
                    <a href="/contact"> Contact Us </a>
                </li>
                <li className="nav-item">
                    <a href="/login"> Login </a>
                </li>
                <li className="nav-item">
                    <a href="/signup"> SignUp </a>
                </li>
            </ul>

        </nav>
    );
};

export default NavigationMenu;