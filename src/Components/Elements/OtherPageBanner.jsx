import React,{useContext} from 'react';
import {GlobalContextProvider} from "../../ContextApi/GlobalContext"
import "../../Resources/Css/Elements/otherPageBanner.scss"
export default function OtherPageBanner(props) {
  const {theme} = useContext(GlobalContextProvider)
  return (
    <>
     <div className="otherPageBanner" id={theme}>
        <div className="overlay"></div>
        <div className="container-lg">
            <div className="bannerContent">
            <h1>{props.title}</h1>
            <p>Synergistically productivate resource maximizing vortals through functional networks. Seamlessly impact web-enabled quality.</p>
            </div>
        </div>
     </div>
    </>
  )
}
