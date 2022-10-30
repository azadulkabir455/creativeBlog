import React,{useContext} from 'react'
import {Link, Outlet} from "react-router-dom"
import {GlobalContextProvider} from "../../ContextApi/GlobalContext"
import "../../Resources/Css/Dashbord/dashbord.scss"
import { BsFillHouseFill,BsArrowRightShort } from "react-icons/bs";

export default function Dashboard() {
  const {theme} = useContext(GlobalContextProvider)
  return (
    <>
      <div className="dashbord" id={theme}>
        <div className="dashbordMenuItem">
          <Link to="/" className='home'><BsFillHouseFill/> Back to Home</Link>
          <Link to="/dashbord/dashbordindex"><BsArrowRightShort />Dashbord</Link>
          <Link to="/dashbord/userinfo"><BsArrowRightShort />UserInfo</Link>
          <Link to="/dashbord/contactinfo"><BsArrowRightShort />ContactInfo</Link>
          <Link to="/dashbord/bloginfo"><BsArrowRightShort />BlogInfo</Link> 
          <Link to="/dashbord/newsletterinfo"><BsArrowRightShort />NewsLetter</Link> 
        </div>
        <div className="dashbordContent">
          <Outlet />
        </div>
      </div>
    </>
  )
}
