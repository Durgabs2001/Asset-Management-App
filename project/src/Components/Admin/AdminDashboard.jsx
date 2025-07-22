import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AdminDash from './AdminDash'
import instance from '../../Utils/axios'

function AdminDashboard() {
  const [data,setData]=useState([])
  useEffect(()=>{
    instance.get("/count")
    .then((res)=>{
      setData(res.data)
      console.log(data)
    })
    .catch((err) => {
        alert("No results found");
        console.log(err);
      });

  },[])
  return (
    <div className='container-fluid' style={{ height: "100vh" }}>
      <div className='row h-100'>
        <div className='col-md-2 bg-success h-100'>
          <AdminDash/>
        </div>

        <div className='col-md-10'>
          <h2 className='my-2'>Admin Dashboard</h2>
          <div className=' container-fluid bg-success text-light py-1  rounded'><br></br>
            <h2 className='mb-2'>Greetings Admin</h2>
            <p className='mb-0'>Manage, Monitor, and Maintain Your Assets Efficiently.Here's your overview</p><br></br>
          </div>
          <h5 className='mt-3'>System Overview</h5>
          <div className='container my-4'>
            <div className='row'>
              <div className='col-md-4 mb-2'>
                <div className='card shadow-sm p-2'>
                  <div className='card-body d-flex align-items-center'>
                    <i className='bi bi-archive text-primary fs-3 me-3'></i>
                    <div>
                      <h6 className='mb-0'>Total Resources</h6>
                      <p className='text-bold mb-0'>{data.resourcecount}</p>
                      <p>All physical assets</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-4 mb-2'>
                <div className='card shadow-sm p-2'>
                  <div className='card-body d-flex align-items-center'>
                    <i className='bi bi-calendar2-check-fill text-success fs-3 me-3'></i>
                    <div>
                      <h6 className='mb-0'>Active Bookings</h6>
                      <p className='text-bold mb-0'>{data.bookingcount}</p>
                      <p>Currently reserved resources</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-2'>
                <div className='card shadow-sm p-2'>
                  <div className='card-body d-flex align-items-center'>
                    <i className='	bi bi-exclamation-triangle text-danger fs-3 me-3'></i>
                    <div>
                      <h6 className='mb-0'>Potential conflicts</h6>
                      <p className='text-bold mb-0'>Count</p>
                      <p>No overlap detected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

               <h5 className='mt-3'>Admin Actions</h5>
          <div className='container my-4'>
            <div className='row'>
              <div className='col-md-3 mb-2'>
                <div className='card shadow-sm p-2'>
                  <div className='card-body d-flex align-items-center'>
                    <i className='bi bi-plus-square text-primary fs-3 me-3'></i>
                      <Link to={'/add_resource'} style={{textDecoration:"none",color:"black"}}><h6 className='mb-0' >Add New Resource</h6></Link>
                  </div>
                </div>
              </div>

              <div className='col-md-3 mb-2'>
                <div className='card shadow-sm p-2'>
                  <div className='card-body d-flex align-items-center'>
                    <i className='bi bi-calendar text-success fs-3 me-3'></i>
                     <Link to={'/manage_booking'} style={{textDecoration:"none",color:"black"}}><h6 className='mb-0'>View All Bookings</h6></Link> 
                  </div>
                </div>
              </div>
              <div className='col-md-3 mb-2'>
                <div className='card shadow-sm p-2'>
                  <div className='card-body d-flex align-items-center'>
                    <i className='	bi bi-person text-secondary fs-3 me-3'></i>
                     <Link to={'/manage_user'} style={{textDecoration:"none",color:"black"}}> <h6 className='mb-0'>Manage Users</h6></Link>
                  </div>
                </div>
              </div>
               <div className='col-md-3 mb-2'>
                <div className='card shadow-sm p-2'>
                  <div className='card-body d-flex align-items-center'>
                    <i className='	bi bi-bar-chart text-secondary fs-3 me-3'></i>
                      <h6 className='mb-0'>Generate Reports</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 className='mt-3'>Live Resource Status</h5>


        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
