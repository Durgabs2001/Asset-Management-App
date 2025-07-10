import React from 'react'
import Dash from './Dash'

function MyBookings() {
    return (
        <div>
            <div className='container-fluid ' style={{ height: "100vh" }}>
                <div className='row h-100'>
                    <div className='col-md-2 bg-primary h-100 '>
                        <Dash />
                    </div>
                    <div className='col-md-10'>
                        <h2 className='my-2'>My Bookings</h2>
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
                                            <button className='btn btn-danger me-2'>Cancel Booking</button>
                                            <button className='btn btn-primary'>View Details</button>
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
                                            <button className='btn btn-danger me-2'>Cancel Booking</button>
                                            <button className='btn btn-primary'>View Details</button>
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
                                            <button className='btn btn-danger me-2'>Cancel Booking</button>
                                            <button className='btn btn-primary'>View Details</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <h5 className='mt-3'>Past Bookings</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBookings
