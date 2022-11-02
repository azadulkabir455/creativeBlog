import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import "../../Resources/Css/GlobalWidgets/globalHeader.scss";
import { GlobalContextProvider } from "../../ContextApi/GlobalContext"
import { BsArrowRightShort } from "react-icons/bs";

export default function GlobalHeader() {
    const { theme, userProfiles, logout } = useContext(GlobalContextProvider)
    return (
        <>
            <nav className=" myNavbar navbar navbar-expand-lg sticky-top" id={theme}>
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
                            {
                                userProfiles ?
                                    <>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Blogs
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><Link className='dropdown-item' to="/blog">Read Blogs</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className='dropdown-item' to="/addBlog">Add Blogs</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                User
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><Link className='dropdown-item' to="/userprofile/myprofile">User Profile</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className='dropdown-item' onClick={logout}>Logout</Link></li>
                                            </ul>
                                        </li>
                                    </> :
                                    <>
                                        <li className="nav-item">
                                            <Link to="/login"><button className="menuButton">Login <BsArrowRightShort /></button></Link>
                                        </li>
                                    </>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
