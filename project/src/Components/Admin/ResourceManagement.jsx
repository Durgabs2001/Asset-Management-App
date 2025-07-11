import React, { useEffect, useState } from 'react'
import AdminDash from './AdminDash'
import instance from '../../Utils/axios'

function ResourceManagement() {
  const [data, setData] = useState([])
  useEffect(() => {
    const token = localStorage.getItem("token")
    instance.get("/view_asset")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  return (
    <div className='container-fluid' style={{ height: "100vh" }}>
      <div className='row h-100'>
        <div className='col-md-2 bg-success h-100'>
          <AdminDash />
        </div>

        <div className='col-md-10'>
          <h2 className='my-2'>Resource Management</h2>
          <div>
            <br></br>
            <button className='btn btn-success me-5' style={{float:"right"}}> <i className="bi bi-plus-circle-fill me-2"></i>Add new resource</button>
            <br></br><br></br>
            <table style={{
              width: '90%',
              margin: '20px',
            }}>
              <thead>
                <tr style={{ border: " 1px solid" }}>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Resource name</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Type</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Capacity</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Availabitity</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Actions</th>

                </tr>
              </thead>
              <tbody>
                {data.map((e) => (
                  <tr style={{ border: " 1px solid" }}>
                    <td style={{ border: " 1px solid", textAlign: "center" }}>{e.name}</td>
                    <td style={{ border: " 1px solid", textAlign: "center" }}>{e.type}</td>
                    <td style={{ border: " 1px solid", textAlign: "center" }}>{e.capacity}</td>
                    <td style={{ border: " 1px solid", textAlign: "center" }}>{e.availability}</td>
                    <td style={{ border: " 1px solid", width: "40px", textAlign: "center" }}>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <button className="btn btn-sm p-2 border-0 bg-transparent">
                          <i className="bi bi-pencil-fill text-primary"></i>
                        </button>
                        <button className="btn btn-sm p-2 border-0 bg-transparent">
                          <i className="bi bi-trash-fill text-danger"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>


          </div>

        </div>
      </div>
    </div>
  )
}

export default ResourceManagement