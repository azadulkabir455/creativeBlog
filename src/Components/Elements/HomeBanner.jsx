import React, { useContext } from 'react'
import { Videos } from "../../Resources/media/Media"
import { GlobalContextProvider } from "../../ContextApi/GlobalContext"
import {Link} from "react-router-dom"
import "../../Resources/Css/Elements/homeheader.scss"

export default function HomeBanner() {
    const { theme } = useContext(GlobalContextProvider)
    return (
        <>
            <div className="container-fluid homeBanner overflow-hidden" id={theme}>
                <video autoPlay muted loop >
                    <source src={Videos.video} type="video/mp4" />
                </video>
                <div className="overlay"></div>
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <h4>Made by Akash</h4>
                            <h1>Creative Blog</h1>
                            <div className="buttonGroup">
                                <button><Link to="/blog">Read Blog</Link></button>
                                <button><Link to="/contact" className='contactButton'>Contact Us</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
