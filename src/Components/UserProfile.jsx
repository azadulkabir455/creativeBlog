import React from 'react'
import GlobalHeader from "../GlobalWidgets/GlobalHeader/GlobalHeader"
import GlobalFooter from "../GlobalWidgets/GlobalFooter/GlobalFooter"
import OtherPageBanner from "./Elements/OtherPageBanner"
import {Link, Outlet} from "react-router-dom"

export default function UserProfile() {
  return (
    <>
      <GlobalHeader />
      <OtherPageBanner title="User Profile" />
      <div className="userProfile">
        <div className="container">
          <div className="row">
          <div className="col-12 col-lg-4">
            <Link to="/userprofile/myprofile">My Profile</Link> <br />
            <Link to="/userprofile/myblog">My Blog</Link>
          </div>
          <div className="col-12 col-lg-8">
            <Outlet />
          </div>
          </div>
        </div>
      </div>
      <GlobalFooter />
    </>
  )
}
