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
import BlogInfo from "../Components/Dashboard/BlogInfo";
import UserInfo from "../Components/Dashboard/UserInfo";
import Dashbord from '../Components/Dashboard/Dashbord';

export default function Routers() {
  return (
    <>
        <Routes>
            <Route path="/" exact={true} element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/blog" element={<Blog />} />
            <Route path="/addblog" element={<Addblog />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgotPassword />} />
            <Route path="/dashbord" element={<Dashbord />}>
                <Route path="/dashbord/dashbordindex" element={<DashbordIndex />} />
                <Route path="contactinfo" element={<ContactInfo />}/>
                <Route path="newsletterinfo" element={<NewsLetterInfo />}/>
                <Route path="bloginfo" element={<BlogInfo />}/>
                <Route path="userinfo" element={<UserInfo />}/>
            </Route>
        </Routes>
    </>
  )
}
