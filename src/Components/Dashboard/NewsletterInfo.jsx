import React from 'react'
import useFetch from '../../CustomHooks/useFetch'

export default function NewsletterInfo() {
  const [data] = useFetch("newsletter")
  return (
    <>
      <h1>NewsLetter Info</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((emailItem) => {
              <tr>
                <td>{emailItem.email}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>

    </>
  )
}
