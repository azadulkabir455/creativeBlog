import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import "../../Resources/Css/GlobalWidgets/globalHeader.scss";
import { GlobalContextProvider } from "../../ContextApi/GlobalContext"
import { BsArrowRightShort } from "react-icons/bs";

export default function GlobalHeader() {
    const { theme } = useContext(GlobalContextProvider)
    return (
        <>
            <nav className=" myNavbar navbar navbar-expand-lg " id={theme}>
                <div className="container">
                    <Link className="navbar-brand" to="/">Akash</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className='nav-link'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className='nav-link'>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <button className="menuButton">Login <BsArrowRightShort /></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
