import React,{createContext,useState, useEffect} from 'react'
import {auth, db} from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "firebase/auth";
import {
  doc, 
  setDoc
} from "firebase/firestore"

const GlobalContextProvider = createContext();
const GlobalContextContainer = ({children}) => {


    //For themeing
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prev)=> (prev === "light"?"dark":"light"))
    }

    // For Authentication
    const [userProfiles, setUserProfiles] = useState([]);

    // SignUp Function
    const signup = async (email, password, data) => {
      await createUserWithEmailAndPassword(auth, email, password).then(async(authenticateUser)=> {
        const ref = doc(db, "userProfiles",authenticateUser.user.uid);
        await setDoc(ref, {data}).then(() => {
          console.log("User data succesfully added and signup");
        }).catch((error) => {
          console.log(error.message)
        })
      }).catch((error) => {
        console.log(error.message)
      })
    }

     // Login Function
    const login = async (email, password) => {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        console.log("Login Succesully")
      }).catch((error) => {
        console.log(error.message)
      })
    }

     // Logout Function
    const logout = async () => {
      await signOut(auth).then(() => {
        console.log("Signout succesfully")
      }).catch((error) => {
        console.log(error.message)
      })
    }
     // Reset Password Function
    const resetpass = async (email) => {
      await sendPasswordResetEmail(auth, email).then(() => {
        console.log("Password reset message sent succesfully")
      }).catch((error) => {
        console.log(error.message)
      })
    }

     //Current User

     useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
        setUserProfiles(currentUser)
      })
      return () => {
        unSubscribe();
      }
     },[])

  return (
    <GlobalContextProvider.Provider value={{theme, toggleTheme,signup, login, logout, resetpass, userProfiles }}>
        {children}
    </GlobalContextProvider.Provider>
  )
}

export {
    GlobalContextProvider,
    GlobalContextContainer
}