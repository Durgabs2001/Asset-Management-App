import React from 'react'
import AdminDash from './AdminDash'

function Reporting() {
  return (
<div className='container-fluid' style={{ height: "100vh" }}>
          <div className='row h-100'>
            <div className='col-md-2 bg-success h-100'>
              <AdminDash/>
            </div>
            <div className='col-md-10'>
              <h2 className='my-2'>Reporting and Analytics</h2>
              <form className='border rounded p-4'>
              <div className='row'>
                <div className='col-md-6'>
                    
                </div>
                <div className='col-md-6'>
                   <button className='btn btn-success me-2'>Generate Report</button>
                    <button className='btn btn-primary '>Export csv</button>
                </div>
              </div><br></br>
              <div className='row p-3'>
               
                <div className='col-md-5 border rounded me-5 p-2'>
                     <h4><i className="bi bi-arrow-90deg-right"></i> Booking Trends Overview</h4>
                     <p>Visual representation of booking activity over time</p>
                     <p>Chart</p>
                     <p>Peak booking day</p>
                     <p>Average bookings per day</p>
                </div>
                <div className='col-md-5 border rounded p-2'>
                     <h4><i className="bi bi-percent"></i>Resource Utilization Summary</h4>
                     <p>Detailed breakdown of how often resources are utilized</p>
                     <p>Chart</p>
                     <p>Most used resource</p>
                     <p>Least used resource</p>
                </div>
              </div><br></br>
              <div className='row border rounded p-2'>
                <h4><i className="bi bi-people"></i> Recent User Activity</h4>
                <table style={{
              width: '90%',
              margin: '20px',
            }}>
              <thead>
                <tr style={{ border: " 1px solid" }}>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>User</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Action</th>
                  <th style={{ border: " 1px solid", textAlign: "center" }}>Time stamp</th>
                </tr>
              </thead>
              <tbody>
                {//data.map((e) => (
                  <tr style={{ border: " 1px solid" }}>
                    <td style={{ border: " 1px solid", textAlign: "center" }}></td>
                    <td style={{ border: " 1px solid", textAlign: "center" }}></td>
                    <td style={{ border: " 1px solid", textAlign: "center" }}></td>
                  </tr>
                  // ))
                }
              </tbody>
            </table>
              </div>
             
              </form>
          </div>
        </div>
        </div>
  )
}

export default Reporting