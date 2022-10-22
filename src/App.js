import React,{useContext} from 'react';
import Routers from './Routers/Routers';
import "./Resources/Css/global.scss"
import {GlobalContextProvider} from "./ContextApi/GlobalContext"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function App() {
  const  {theme, toggleTheme} = useContext(GlobalContextProvider);
  return (
    <>
      <Routers />
      {
        theme == "light"? 
        <>
         <button onClick={toggleTheme} className="themeButton dark">Dark <BsFillMoonFill /></button>
        </>:
        <>
        <button onClick={toggleTheme} className="themeButton light">Light <BsFillSunFill /></button>
        </>
      }
    </>
  )
}
