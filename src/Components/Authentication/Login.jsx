import React,{useContext,useState} from 'react'
import {GlobalContextProvider} from "../../ContextApi/GlobalContext"
import {Link,useNavigate} from "react-router-dom"
import "../../Resources/Css/authentication.scss"

export default function Login() {
    const [userData, setUserData] = useState([]);
    const navigate =useNavigate();
    const {theme, login} = useContext(GlobalContextProvider);
    const {email, password} = userData;
    const fromHandler = (e) => {
        e.preventDefault();
        login(email, password).then(() => {
            navigate("/")
        })

    }
    const inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData(prev =>({...prev,[name]:value}))

    }
    return (
        <>
        <div className=" formContainer" id={theme}>
        <div className="container-lg">
                <div className="row">
                    <div className="col-6 offset-3 ">
                        <form className='form p-5 bg-border shadow-lg rounded' onSubmit={fromHandler}>
                            <h2 className='mb-4'>Login</h2>
                            <div className="row">
                                <div className="col-12">

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email: </label>
                                        <input type="email" className="form-control" id="email" placeholder="Write your Email" name="email"  onChange={inputHandle} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password: </label>
                                        <input type="text" className="form-control" id="password" placeholder="Write your password" name="password" onChange={inputHandle} />
                                    </div>
                                    <div className="mt-4">
                                        <button className='btn btn-success'>Send for Login</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-6">
                                    <p>You don't have  any account <Link to="/signup">Sign up</Link></p>
                                    <p>Back to the <Link to="/">Home Page</Link></p>
                                </div>
                                <div className="col-6 clearfix">
                                <p className='float-end'><Link to="/forgetpassword">Forget password?</Link></p>
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
