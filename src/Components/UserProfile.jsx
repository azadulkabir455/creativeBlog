import React,{useContext} from 'react'
import GlobalHeader from "../GlobalWidgets/GlobalHeader/GlobalHeader"
import GlobalFooter from "../GlobalWidgets/GlobalFooter/GlobalFooter"
import OtherPageBanner from "./Elements/OtherPageBanner"
import { Link, Outlet } from "react-router-dom";
import {GlobalContextProvider} from "../ContextApi/GlobalContext"
import  "../Resources/Css/UserProfile/userprofile.scss"

export default function UserProfile() {
  const {theme} = useContext(GlobalContextProvider)
  return (
    <>
      <OtherPageBanner title="User Profile" />
      <GlobalHeader />
      <div className="userProfile" id={theme}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 custom" >
              <div className="profileLink">
                <Link to="/userprofile/myprofile">My Profile</Link>
                <Link to="/userprofile/myblog">My Blog</Link>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="profileContent">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GlobalFooter />
    </>
  )
}
