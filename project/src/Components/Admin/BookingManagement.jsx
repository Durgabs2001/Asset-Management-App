import React from 'react'
import AdminDash from './AdminDash'
import { useState } from 'react'
import { useEffect } from 'react'
import instance from '../../Utils/axios'

function BookingManagement() {
  const [data, setData] = useState([])
  useEffect(() => {
    const token = localStorage.getItem("token")
    instance.get("/view_booking")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className='container-fluid' style={{ height: "100vh" }}>
      <div className='row h-100'>
        <div className='col-md-2 bg-success h-100'>
          <AdminDash />
        </div>

        <div className='col-md-10'>
          <h2 className='my-2'>Booking Management</h2>
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <form class="d-flex w-100">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search Bookings" ></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
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
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Resource name</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Booked by</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Start time</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>End time</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Status</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Actions</th>

                </tr>
              </thead>
              <tbody>
                {data.map((e) => {
                  const start = new Date(e.start_date).toLocaleTimeString('en-IN', {
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: 'Asia/Kolkata'
                  });
                  const end = new Date(e.end_date).toLocaleTimeString('en-IN', {
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: 'Asia/Kolkata'
                  });

                  const day = new Date(e.start_date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    timeZone: 'Asia/Kolkata'
                  });
                  return (
                    <tr style={{ border: " 1px solid" }}>
                      <td style={{ border: " 1px solid", textAlign: "center" }}>{e.asset.name}</td>
                      <td style={{ border: " 1px solid", textAlign: "center" }}>{e.user.username}</td>
                      <td style={{ border: " 1px solid", textAlign: "center" }}>{day + '' + start}</td>
                      <td style={{ border: " 1px solid", textAlign: "center" }}>{day + '' + end}</td>
                      <td style={{ border: " 1px solid", textAlign: "center" }}>{e.status}</td>
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
                  )
                })
                }
              </tbody>
            </table>


          </div>

        </div>
      </div>
    </div>
  )
}

export default BookingManagement