import React, { useContext, useState } from 'react'
import { GlobalContextProvider } from "../../ContextApi/GlobalContext"
import { Link, useNavigate  } from "react-router-dom"
import "../../Resources/Css/authentication.scss"

export default function Signup() {
    const [userData, setUserData] = useState([]);
    const [role, setRole] = useState("selected");
    const navigate = useNavigate()
    const { theme,signup } = useContext(GlobalContextProvider);

    const combinedUserData = {...userData, role}
    const {email, password, ...data} = combinedUserData;
    console.log({email, password, ...data})
    
    const formHandler =(e) => {
        e.preventDefault();
        signup(email, password, {...data}).then(() => {
            navigate("/login")
        })
        
    }
    const inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData((prev) => ({...prev, [name]:value}));
    }
    return (
        <>
            <div className=" formContainer" id={theme}>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-6 offset-3 ">
                            <form className='form p-5 bg-border shadow-lg rounded' onSubmit={formHandler}>
                                <h2 className='mb-4'>Signup</h2>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Your Full Name: </label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Write your full name" onChange={inputHandle} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Phone Number: </label>
                                            <input type="tel" className="form-control" id="phone" name="phone" placeholder="Write your phone number" onChange={inputHandle} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="role" className="form-label">Select your role </label>
                                            <select className="form-select" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                                                <option value="selected">Select your role</option>
                                                <option value="reader">Reader</option>
                                                <option value="blogger">Blogger</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">

                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email: </label>
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Write your Email" onChange={inputHandle} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password: </label>
                                            <input type="text" className="form-control" id="password" name="password" placeholder="Write your password" onChange={inputHandle}/>
                                        </div>
                                        <div className="mt-5">
                                            <button className='btn btn-success'>Send for Signup</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-8">
                                        <p>You have account already <Link to="/login">Login here</Link></p>
                                        <p>Back to the <Link to="/">Home Page</Link></p>
                                    </div>
                                    <div className="col-6">

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
