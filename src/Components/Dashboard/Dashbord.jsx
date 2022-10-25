import React from 'react'
import {Link, Outlet} from "react-router-dom"

export default function Dashboard() {
  return (
    <>
      <div className="container-fluide overflow-hidden">
        <div className="row">
        <div className="col-3">
          <Link to="/dashbord/dashbordindex">Dashbord</Link>
          <Link to="/dashbord/userinfo">UserInfo</Link>
          <Link to="/dashbord/contactinfo">ContactInfo</Link>
          <Link to="/dashbord/bloginfo">BlogInfo</Link> 
          <Link to="/dashbord/newsletterinfo">NewsLetter</Link> 
        </div>
        <div className="col-9">
          <Outlet />
        </div>
        </div>
      </div>
    </>
  )
}
