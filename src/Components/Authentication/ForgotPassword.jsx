import React, { useContext, useState } from 'react'
import { GlobalContextProvider } from "../../ContextApi/GlobalContext"
import { Link } from "react-router-dom"
import "../../Resources/Css/authentication.scss"

export default function ForgotPassword() {
    const [email, setEmail] = useState("")
    const { theme } = useContext(GlobalContextProvider);
    const fromHandler= (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className=" formContainer" id={theme}>
                <div className="container-lg" >
                    <div className="row">
                        <div className="col-6 offset-3 ">
                            <form className='form p-5 bg-border shadow-lg rounded' onSubmit={fromHandler}>
                                <h2 className='mb-4'>Forgot Password</h2>
                                <div className="row">
                                    <div className="col-12">

                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email: </label>
                                            <input type="email" className="form-control" id="email" placeholder="Write your Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="mt-4">
                                            <button className='btn btn-success'>Send for Signup</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <p>Back to the <Link to="/login">Login Page</Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
