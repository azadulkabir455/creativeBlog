import React,{createContext,useState} from 'react'

const GlobalContextProvider = createContext();
const GlobalContextContainer = ({children}) => {


    //For themeing
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prev)=> (prev === "light"?"dark":"light"))
    }
  return (
    <GlobalContextProvider.Provider value={{theme, toggleTheme}}>
        {children}
    </GlobalContextProvider.Provider>
  )
}

export {
    GlobalContextProvider,
    GlobalContextContainer
}