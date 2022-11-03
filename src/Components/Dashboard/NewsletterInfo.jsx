import React,{useState, useContext} from 'react'
import useFetch from '../../CustomHooks/useFetch'
import useUpdate from '../../CustomHooks/useUpdate';
import {db} from "../../firebase-config"
import {doc, deleteDoc} from "firebase/firestore"
import {GlobalContextProvider} from "../../ContextApi/GlobalContext"

export default function NewsletterInfo() {
  const [email, setEmail] = useState("");
  const [emailId, setEmailId] = useState();
  const [data] = useFetch("newsletter");
  const [updateData] = useUpdate("newsletter", emailId, {email})
  const {theme} = useContext(GlobalContextProvider)

  const fromHandler = (e) => {
    e.preventDefault();
  }
  const dataSelect = (email, id) => {
    setEmail(email);
    setEmailId(id)
  }
  const deleteEmail = async(id) => {
    if(window.confirm("Are you confirm to delete email")) {
      const emailDoc = doc(db, "newsletter", id)
      await deleteDoc(emailDoc)
    }else {
      
    }
  }
  return (
    <>
      <h1>NewsLetter Infos</h1>
      <table className="table table-striped newsletterTable" id={theme}>
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.slice(0,2).map((emailItem) => 
                <tr key={emailItem.id}>
                  <td>{emailItem.email}</td>
                  <td>
                    <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => dataSelect(emailItem.email, emailItem.id)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => {deleteEmail(emailItem.id)}}>Delete</button>
                  </td>
                </tr>
              )
          }
        </tbody>
      </table>

      <div className="modal fade" id="editModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Newsletter</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="#" onSubmit={fromHandler}>
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Write Your Email" value={email} name="email" onChange={(e)=>{setEmail(e.target.value)}} />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateData}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
