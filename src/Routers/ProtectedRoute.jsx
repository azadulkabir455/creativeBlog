import React,{useContext} from 'react'
import {Navigate} from "react-router-dom"
import {GlobalContextProvider} from "../ContextApi/GlobalContext" 

export default function ProtectedRoute({children}) {
    const {userProfiles}  = useContext(GlobalContextProvider)

    if(!userProfiles) {
        return <Navigate to="/" />
    }else {
        return children;
    }
    
}
