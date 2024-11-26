
import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import { useState } from 'react';

 const PrivateRoute = () => {
    let auth ={'token':false};
    //let isSignedIn = localStorage.getItem("isSignedIn");
    const [isSignedIn, setIsSignedIn] =  useState(localStorage.getItem("isSignedIn"));
    console.log('private Route=>',isSignedIn);
  return (
    isSignedIn ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoute;