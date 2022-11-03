import React,{useContext} from 'react'
import useFetch from '../../CustomHooks/useFetch'
import {GlobalContextProvider} from "../../ContextApi/GlobalContext"


export default function DashbordIndex() {
  const [contact] = useFetch("contactInfo")
  const [newsletter] = useFetch("newsletter")
  const [profiles] = useFetch("userProfiles")
  
  const {theme} = useContext(GlobalContextProvider)
  return (
    <>
      <div className="totalCount" id={theme}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="countContainer">
                <h3>{contact.length}</h3>
                <h4>Total Contact Info</h4>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="countContainer">
                <h3>{newsletter.length}</h3>
                <h4>Total Newsletter</h4>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="countContainer">
                <h3>{profiles.length}</h3>
                <h4>Total Profiles</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
