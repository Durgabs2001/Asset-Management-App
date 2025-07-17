import React from 'react'
import AdminDash from './AdminDash'
import { useState } from 'react'
import { useEffect } from 'react'
import instance from '../../Utils/axios'
import { Link } from 'react-router-dom'

function UserManagement() {
  const [data,setData]=useState([])
  useEffect(()=>{
    const token = localStorage.getItem("token")
    instance.get("/view_users")
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    
   <div className='container-fluid' style={{ height: "100vh" }}>
      <div className='row h-100'>
        <div className='col-md-2 bg-success h-100'>
          <AdminDash />
        </div>

        <div className='col-md-10'>
          <h2 className='my-2'>User Management</h2>
          <nav class="navbar navbar-light bg-light py-1">
            <div class="container-fluid">
              <form class="d-flex w-75 align-items-center">
                <input class="form-control me-5" type="search" placeholder="Search users" aria-label="Search Users" ></input>
                <button class="btn btn-outline-success me-3" type="submit">Search</button>
                <Link to='/add_users' className='btn btn-success me-0 w-50' ><i className="bi bi-plus-circle-fill me-2"></i>Add new user</Link>
              </form>
            </div>
          </nav>
          <div>
            <br></br>
            <table style={{
              width: '90%',
              margin: '20px',
            }}>
              <thead>
                <tr style={{ border: " 1px solid" }}>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>User</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Email</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Role</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Last Active</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Actions</th>

                </tr>
              </thead>
              <tbody>
                {data.map((e) => (
                  <tr style={{ border: " 1px solid" }}>
                    <td style={{ border: " 1px solid", textAlign: "center" }}>{e.username}</td>
                    <td style={{ border: " 1px solid", textAlign: "center" }}>{e.email}</td>
                    <td style={{ border: " 1px solid", textAlign: "center" }}>{e.role}</td>
                    <td style={{ border: " 1px solid", textAlign: "center" }}></td>
                    <td style={{ border: " 1px solid", width: "40px", textAlign: "center" }}>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <Link to={`/edit_users/${e._id}`} className="btn btn-sm p-2 border-0 bg-transparent">
                          <i className="bi bi-pencil-fill text-primary"></i>
                        </Link>
                        <button className="btn btn-sm p-2 border-0 bg-transparent">
                          <i className="bi bi-trash-fill text-danger"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
               }
              </tbody>
            </table>


          </div>

        </div>
      </div>
    </div>
  )
}

export default UserManagement