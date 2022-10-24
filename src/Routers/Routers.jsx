import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import Signup from '../Components/Authentication/Signup';
import Login from '../Components/Authentication/Login';
import ForgotPassword from '../Components/Authentication/ForgotPassword';

export default function Routers() {
  return (
    <>
        <Routes>
            <Route path="/" exact={true} element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgotPassword />} />
        </Routes>
    </>
  )
}
