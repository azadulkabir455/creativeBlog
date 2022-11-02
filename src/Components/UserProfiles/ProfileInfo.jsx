import React, { useContext, useState } from 'react'
import useFetch from "../../CustomHooks/useFetch"
import useUpdate from '../../CustomHooks/useUpdate'
import { GlobalContextProvider } from "../../ContextApi/GlobalContext"
import "../../Resources/Css/UserProfile/profileInfo.scss"
export default function ProfileInfo() {
  const [userData, setUserData] = useState([]);
  const [role, setRole] = useState("role");
  const [userId, setUserId] = useState()
  const { userProfiles,theme } = useContext(GlobalContextProvider);
  const combineData = {...userData, role }

  const [data] = useFetch("userProfiles");
  const [updateData] = useUpdate("userProfiles", userId,combineData)


  const selectUser = (name, phone, role,id) => {
    setUserData({ name: name, phone: phone })
    setRole(role)
    setUserId(id)

  }
  const updateProfile = () => {
    updateData();
  }
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((prev) => ({ ...prev, [name]: value }))
  }
  const fromHandler = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className="singleUser" id={theme}>
        {
          data && data.filter(data => userProfiles.uid === data.id).map(profile =>

              <div key={profile.id}>
                <h2> {profile.name}</h2>
                <p>Contact : {profile.phone}</p>
                <p>User role : {profile.role}</p>
                <button onClick={() => { selectUser(profile.name, profile.phone, profile.role, profile.id) }} data-bs-toggle="modal" data-bs-target="#profileedit">Edit</button>
              </div>
          )
        }
      </div>

      <div className="modal fade" id="profileedit" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="#" onSubmit={fromHandler}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your name:</label>
                  <input type="text" className="form-control" id="Name" value={userData.name} placeholder="Write your name" name="name" onChange={inputHandler} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="phone" className="form-control" id="phone" value={userData.phone} placeholder="Write your phone number" name="phone" onChange={inputHandler} />
                </div>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">Your role:</label>
                  <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="role">Choose your role</option>
                    <option value="blogger">Blogger</option>
                    <option value="reader">Reader</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={updateProfile} data-bs-dismiss="modal" >Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
