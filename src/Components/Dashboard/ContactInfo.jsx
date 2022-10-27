import React, { useState, useEffect } from 'react'
import useFetch from '../../CustomHooks/useFetch'
import useUpdate from "../../CustomHooks/useUpdate"
import {db} from "../../firebase-config";
import {doc, deleteDoc} from "firebase/firestore"

export default function ContactInfo() {
  const [userdata, setUserData] = useState([]);
  const [role, setRole] = useState("role");
  const [message, setMessage] = useState("Write your messaage")
  const [contactId, setContactId] = useState();
  const combineData = {...userdata, role, message}
  const [data] = useFetch("contactInfo");
  const [updateData] = useUpdate("contactInfo",contactId, combineData);


  const fromHandler = (e) => {
    e.preventDefault();
  }
  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData(prev => ({...prev, [name]:value}))
  }
  const selectContactInfo = (name,email,phone,role,message,id) => {
    setUserData({name,email,phone});
    setRole(role);
    setMessage(message);
    setContactId(id)
  }
  const updateContactInfo = () => {
    updateData();
  }

  const deleteConfirmation = async (id) => {
    if(window.confirm("Are you sure to Delete data")){
      const userDoc = doc(db, "contactInfo", id);
      await deleteDoc(userDoc).then(() => {
        console.log("User delete successfully")
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }


  return (
    <>
      <h1>Contactinfo</h1>

      {
        data.map((contact) =>
          <div className="card" key={contact.id}>
            <div className="card-header">
              <h4>{contact.name} <span>{contact.role}</span></h4>
              <span>Email: {contact.email}</span> <span>Phone: {contact.phone}</span>
            </div>
            <div className="card-body">
              <p>{contact.message}</p>
            </div>
            <div className="card-footer">
              <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => selectContactInfo(contact.name,contact.email,contact.phone,contact.role,contact.message,contact.id)}>Edit</button>
              <button className='btn btn-danger' onClick={() => deleteConfirmation(contact.id)}>Delete</button>
            </div>
          </div>
        )
      }

      <div className="modal modal-lg fade" tabIndex="-1" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit ContactInfo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="#" onSubmit={fromHandler}>
                <div className="row g-4">
                  <div className="col-12 col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Full Name:</label>
                      <input type="name" className="form-control" id="name" placeholder="Write Your Name" value={userdata.name} name="name" onChange={inputHandle} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email: </label>
                      <input type="email" className="form-control" id="email" placeholder="Write Your Email" value={userdata.email} name="email" onChange={inputHandle} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone:</label>
                      <input type="phone" className="form-control" id="phone" placeholder="Write Your phone" value={userdata.phone} name="phone" onChange={inputHandle} />
                    </div>
                    <div>
                      <label htmlFor="select" className="form-label">Select your role:</label>
                      <select className="form-select" id="select" value={role} onChange={(e) => { setRole(e.target.value) }}>
                        <option value='role'>Select your role</option>
                        <option value="bloger">Bloger</option>
                        <option value="reader">Reader</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div >
                      <label htmlFor="message" className="form-label">Example textarea</label>
                      <textarea className="form-control" id="message" rows="9" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                  </div>
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateContactInfo}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
