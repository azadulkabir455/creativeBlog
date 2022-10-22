import React,{useContext} from 'react';
import GlobalHeader from "../GlobalWidgets/GlobalHeader/GlobalHeader"
import GlobalFooter from "../GlobalWidgets/GlobalFooter/GlobalFooter"
import OtherPageBanner from './Elements/OtherPageBanner';
import {GlobalContextProvider} from "../ContextApi/GlobalContext"
import { BsArrowRightShort } from "react-icons/bs";
import "../Resources/Css/contact.scss"

export default function Contact() {
  const {theme} = useContext(GlobalContextProvider)
  return (
    <>
      <GlobalHeader />
      <OtherPageBanner title="Contact" />
      <div className="contactUs" id={theme}>
        <div className="container-lg">
          <h2 className='offset-2'>Send Us Message</h2>
          <form action="#">
            <div className="row g-4">
              <div className="col-12 col-lg-4 offset-2">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name:</label>
                  <input type="name" className="form-control" id="name" placeholder="Write Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email: </label>
                  <input type="email" className="form-control" id="email" placeholder="Write Your Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone:</label>
                  <input type="phone" className="form-control" id="phone" placeholder="Write Your phone" />
                </div>
                <div>
                  <label htmlFor="select" className="form-label">What is your purpose:</label>
                  <select className="form-select" id="select">
                    <option value={''}>Open this select menu</option>
                    <option value="bloger">Bloger</option>
                    <option value="reder">Reader</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div >
                  <label htmlFor="message" class="form-label">Example textarea</label>
                  <textarea className="form-control" id="message" rows="9" value="Write your massage" ></textarea>
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
