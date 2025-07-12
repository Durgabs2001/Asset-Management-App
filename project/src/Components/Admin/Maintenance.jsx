import React from 'react'
import AdminDash from './AdminDash'

function Maintenance() {
  return (
    <div className='container-fluid' style={{ height: "100vh" }}>
      <div className='row h-100'>
        <div className='col-md-2 bg-success h-100'>
          <AdminDash />
        </div>

        <div className='col-md-10'>
          <h2 className='my-2'>Maintenance and Repairs</h2>
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <form class="d-flex w-75 align-items-center">
                <input class="form-control me-2 " type="search" placeholder="Search maintenance logs" aria-label="Search Bookings" ></input>
                <button class="btn btn-outline-success me-4" type="submit">Search</button>
                <button className='btn btn-success w-50'> <i className="bi bi-plus-circle-fill me-2"></i> Schedule maintenance</button>
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
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Resource</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Issue/Description</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Scheduled date</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Status</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Actions</th>

                </tr>
              </thead>
              <tbody>
                {//data.map((e) => (
                  <tr style={{ border: " 1px solid" }}>
                    <td style={{ border: " 1px solid", textAlign: "center" }}></td>
                    <td style={{ border: " 1px solid", textAlign: "center" }}></td>
                    <td style={{ border: " 1px solid", textAlign: "center" }}></td>
                    <td style={{ border: " 1px solid", textAlign: "center" }}></td>
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
                  // ))
                }
              </tbody>
            </table>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Maintenance