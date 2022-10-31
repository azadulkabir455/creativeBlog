import React,{useContext, useState} from 'react';
import GlobalHeader from "../GlobalWidgets/GlobalHeader/GlobalHeader"
import GlobalFooter from "../GlobalWidgets/GlobalFooter/GlobalFooter"
import OtherPageBanner from './Elements/OtherPageBanner';
import {GlobalContextProvider} from "../ContextApi/GlobalContext"
import useCreate from "../CustomHooks/useCreate"
import { BsArrowRightShort } from "react-icons/bs";
import "../Resources/Css/contact.scss"

export default function Contact() {
  const [data, setData] = useState([]);
  const [role, setRole] = useState("role");
  const [message, setMessage] = useState("Write your messaage")
  const {theme} = useContext(GlobalContextProvider);

  const combineData = {...data, role, message};
  const  [addData] = useCreate("contactInfo", combineData);

  const fromHandler = (e) => {
    e.preventDefault();
    addData();
  }
  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(prev => ({...prev, [name]:value}))
  }
  return (
    <>
      <OtherPageBanner title="Contact" />
      <GlobalHeader />
      <div className="contactUs" id={theme}>
        <div className="container-lg">
          <h2>Contact with us</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim neque eius deserunt necessitatibus velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis.</p>
          <form action="#" onSubmit={fromHandler}>
            <div className="row g-4">
              <div className="col-12 col-lg-4 offset-lg-2">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name:</label>
                  <input type="name" className="form-control" id="name" placeholder="Write Your Name" name="name" onChange={inputHandle} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email: </label>
                  <input type="email" className="form-control" id="email" placeholder="Write Your Email" name="email" onChange={inputHandle}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone:</label>
                  <input type="phone" className="form-control" id="phone" placeholder="Write Your phone" name="phone" onChange={inputHandle}/>
                </div>
                <div>
                  <label htmlFor="select" className="form-label">Select your role:</label>
                  <select className="form-select" id="select" value={role} onChange={(e)=>{setRole(e.target.value)}}>
                    <option value='role'>Select your role</option>
                    <option value="bloger">Bloger</option>
                    <option value="reader">Reader</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div >
                  <label htmlFor="message" className="form-label">Example textarea</label>
                  <textarea className="form-control" id="message" rows="9" value={message} onChange={(e)=> setMessage(e.target.value)}/>
                </div>
                <button>Send <BsArrowRightShort /></button>
              </div>
            </div>
            
          </form>
        </div>
      </div>
      <GlobalFooter />
    </>
  )
}
