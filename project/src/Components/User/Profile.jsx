import React from 'react'
import Dash from './Dash'

function Profile() {
  return (
    <div>
        <div className='container-fluid ' style={{ height: "100vh" }}>
                <div className='row h-100'>
                    <div className='col-md-2 bg-primary h-100 '>
                        <Dash />
                    </div>
                    <div className='col-md-10'>
                        <h2 className='my-2'>MY PROFILE</h2>
                        <div className='container my-4'>
                            <div className='row justify-content-center border rounded p-3 container ms-1'>
                                <img></img>
                                <p className='text-center'>Name</p>
                                <p className='text-center'>Email</p>
                                <button className='btn btn-primary w-25 me-3'>Edit profile</button>
                                <button className='btn btn-secondary w-25'>Change password</button>
                            </div><br></br>
                             <h5 className='mt-3'>Recent Bookings</h5>
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
                                            <p>Confirmed</p>
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
                                            <p>Confirmed</p>
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
                                            <p>Completed</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <center><div className=' mx-auto'>
                            <button className='btn btn-primary w-25 '>View all Bookings</button>
                        </div></center>
                       
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default Profile