import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../Components/Home";
import Contact from "../Components/Contact";

export default function Routers() {
  return (
    <>
        <Routes>
            <Route path="/" exact={true} element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </>
  )
}
