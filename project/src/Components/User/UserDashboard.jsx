import React from 'react'
import { NavLink } from 'react-router-dom'
import Dash from './Dash'

function UserDashboard() {
  return (
    <div className='container-fluid ' style={{ height: "100vh" }}>
      <div className='row h-100'>
       <div className='col-md-2 bg-primary h-100 '>
        <Dash/>
       </div>
        <div className='col-md-10'>
          <h2 className='my-2'>Employee Dashboard</h2>
          <div className=' container-fluid bg-primary text-light py-1  rounded'><br></br>
            <h2 className='mb-2'>Hello Name</h2>
            <p className='mb-0'>Welcome to Asset Booking.Here's your overview</p><br></br>
          </div>
          <h5 className='mt-3'>Upcoming Bookings</h5>
          <div className='container my-4'>
            <div className='row'>
              <div className='col-md-4 mb-2'>
                <div className='card shadow-sm p-2'>
                  <div className='card-body'>
                    <h6 className='mb-0'>Conference room</h6><br></br>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-calendar text-primary fs-6 me-2'></i>
                      <p className='mb-0 fw-semibold'>Day</p>
                    </div>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-clock text-primary fs-6 me-2'></i>
                      <p className='mb-0 fw-semibold'>Time</p>
                    </div>
                    <button className='btn btn-danger'>Cancel Booking</button>
                  </div>
                </div>
              </div>

              <div className='col-md-4 mb-2'>
                <div className='card shadow-sm p-2'>
                  <div className='card-body'>
                    <h6 className='mb-0'>Projector1</h6><br></br>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-calendar text-primary fs-6 me-2'></i>
                      <p className='mb-0 fw-semibold'>Day</p>
                    </div>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-clock text-primary fs-6 me-2'></i>
                      <p className='mb-0 fw-semibold'>Time</p>
                    </div>
                    <button className='btn btn-danger'>Cancel Booking</button>
                  </div>
                </div>
              </div>

              <div className='col-md-4 mb-2'>
                <div className='card shadow-sm p-2'>
                  <div className='card-body'>
                    <h6 className='mb-0'>Projector2</h6><br></br>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-calendar text-primary fs-6 me-2'></i>
                      <p className='mb-0 fw-semibold'>Day</p>
                    </div>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-clock text-primary fs-6 me-2'></i>
                      <p className='mb-0 fw-semibold'>Time</p>
                    </div>
                    <button className='btn btn-danger'>Cancel Booking</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <h5 className='mt-3'> Actions</h5>
          <div className='container my-4'>
            <div className='row'>
              <div className='col-md-4 mb-2'>
                <div className='card shadow-sm p-2'>
                  <div className='card-body d-flex align-items-center'>
                    <i className='bi bi-plus-square text-primary fs-3 me-3'></i>
                    <h6 className='mb-0'>Make new booking</h6>
                  </div>
                </div>
              </div>

              <div className='col-md-4 mb-2'>
                <div className='card shadow-sm p-2'>
                  <div className='card-body d-flex align-items-center'>
                    <i className='bi bi-calendar text-success fs-3 me-3'></i>
                    <h6 className='mb-0'>View All Resources</h6>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-2'>
                <div className='card shadow-sm p-2'>
                  <div className='card-body d-flex align-items-center'>
                    <i className='	bi bi-clock text-secondary fs-3 me-3'></i>
                    <h6 className='mb-0'>Booking history</h6>
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

export default UserDashboard