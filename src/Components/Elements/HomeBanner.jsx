import React,{useContext} from 'react'
import {Videos} from "../../Resources/media/Media"
import {GlobalContextProvider} from "../../ContextApi/GlobalContext"
import "../../Resources/Css/Elements/homeheader.scss"

export default function HomeBanner() {
    const {theme} = useContext(GlobalContextProvider)
    return (
        <>
            <div className="container-fluid homeBanner" id={theme}>
                <video width="320" height="240" autoPlay muted loop >
                    <source src={Videos.video} type="video/mp4" />
                </video>
                <div className="overlay"></div>
                <div className="content">
                    <h4>Made by Akash</h4>
                    <h1>Creative Blog</h1>
                </div>
            </div>
        </>
    )
}
