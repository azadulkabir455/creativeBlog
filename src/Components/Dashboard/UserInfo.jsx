import React,{useContext} from 'react'
import useFetch from '../../CustomHooks/useFetch'
import {GlobalContextProvider} from "../../ContextApi/GlobalContext"

export default function UserInfo() {
  const [data] = useFetch("userProfiles")
  const {theme} = useContext(GlobalContextProvider)
  return (
    <>
      <table class="table table-striped userTable" id={theme}>
        <thead>
          <tr>
            <th scope="col">Name:</th>
            <th scope="col">Contact Info</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((userData) =>
              <>
                <tr key="userData.id">
                  <td>{userData.name}</td>
                  <td>{userData.phone}</td>
                  <td>{userData.role}</td>
                </tr>
              </>
            )
          }
        </tbody>
      </table>
    </>
  )
}
