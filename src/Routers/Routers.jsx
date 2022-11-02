import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import Blog from "../Components/Blog";
import Addblog from "../Components/Addblog";
import UserProfile from "../Components/UserProfile";
import Signup from '../Components/Authentication/Signup';
import Login from '../Components/Authentication/Login';
import ForgotPassword from '../Components/Authentication/ForgotPassword';
import DashbordIndex from '../Components/Dashboard/DashbordIndex';
import ContactInfo from "../Components/Dashboard/ContactInfo";
import NewsLetterInfo from "../Components/Dashboard//NewsletterInfo";
import UserInfo from "../Components/Dashboard/UserInfo";
import Dashbord from '../Components/Dashboard/Dashbord';
import InnerBlog from '../Components/InnerBlog';
import ProfileInfo from '../Components/UserProfiles/ProfileInfo';
import ProfileBlog from '../Components/UserProfiles/ProfileBlog';

export default function Routers() {
  return (
    <>
        <Routes>
            <Route path="/" exact={true} element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<InnerBlog />} />
            <Route path="/userprofile/myblog/:id" element={<InnerBlog />} />
            <Route path="/addblog" element={<Addblog />} />
            <Route path="/userprofile" element={<UserProfile />}>
                <Route path="myprofile" element={<ProfileInfo />}/>
                <Route path="myblog" element={<ProfileBlog />}/>
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgotPassword />} />
            <Route path="/dashbord" element={<Dashbord />}>
                <Route path="dashbordindex" element={<DashbordIndex />} />
                <Route path="contactinfo" element={<ContactInfo />}/>
                <Route path="newsletterinfo" element={<NewsLetterInfo />}/>
                <Route path="userinfo" element={<UserInfo />}/>
            </Route>
        </Routes>
    </>
  )
}
