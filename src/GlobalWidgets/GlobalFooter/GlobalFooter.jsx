import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { GlobalContextProvider } from "../../ContextApi/GlobalContext"
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import "../../Resources/Css/GlobalWidgets/GlobalFooter.scss"

export default function GlobalFooter() {
    const { theme } = useContext(GlobalContextProvider)
    return (
        <>
            <div className="mainFooter" id={theme}>
                <div className="container-lg" >
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="brandLogo">
                                <Link to="/">Akash</Link>
                            </div>
                            <div className="socialLink">
                                <Link><BsFacebook /></Link>
                                <Link><BsLinkedin /></Link>
                                <Link><BsInstagram /></Link>
                                <Link><BsTwitter /></Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3 offset-md-3 offset-lg-0">
                            <div className="footertitle">
                                <h4>Quick Link</h4>
                            </div>
                            <div className="quickLink">
                                <Link to="/">Home</Link>
                                <Link to="/contact">Contact</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="footertitle">
                                <h4>Contact Info</h4>
                            </div>
                            <div className="contactinfo">
                                <Link tel="88000345589">+88 000 345589</Link>
                                <Link mailto="info@gmail.com">info@gmail.com</Link>
                            </div>
                            <div className="address">
                                <p>221B , Baker Street, Marylebone London NW1 6XE, United Kingdom.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
