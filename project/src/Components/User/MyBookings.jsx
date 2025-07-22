import React from 'react'
import Dash from './Dash'
import instance from '../../Utils/axios'
import { useState } from 'react'
import { useEffect } from 'react'

function MyBookings() {
    const [data, setData] = useState([])
    useEffect(() => {
        const token = localStorage.getItem("token")
        instance.get("/view_booking")
            .then((res) => {
                setData(res.data)
                console.log("Bookings fetched")
            })
            .catch((err) => {
                console.log(err, "error")
            })
    }, [])
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
                                {data.filter(e => new Date(e.end_date) > new Date()).map((e, index) => {
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
                                        <div className='col-md-4 mb-2' key={index}>
                                            <div className='card shadow-sm p-2'>
                                                <div className='card-body'>
                                                    <h6 className='mb-0'>{e.asset?.name || 'Resource'}</h6><br />
                                                    <div className='d-flex align-items-center mb-2'>
                                                        <i className='bi bi-calendar text-primary fs-6 me-2'></i>
                                                        <p className='mb-0 fw-semibold'>{day}</p>
                                                    </div>
                                                    <div className='d-flex align-items-center mb-2'>
                                                        <i className='bi bi-clock text-primary fs-6 me-2'></i>
                                                        <p className='mb-0 fw-semibold'>{start} - {end}</p>
                                                    </div>
                                                    <button className='btn btn-danger'>Cancel Booking</button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <h5 className='mt-3'>Past Bookings</h5>
                        <div className='container my-4'>
                            <div className='row'>
                                {data.filter(e => new Date(e.end_date) <= new Date()).map((e, index) => {
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
                                        <div className='col-md-4 mb-2' key={index}>
                                            <div className='card shadow-sm p-2'>
                                                <div className='card-body'>
                                                    <h6 className='mb-0'>{e.asset?.name || 'Resource'}</h6><br />
                                                    <div className='d-flex align-items-center mb-2'>
                                                        <i className='bi bi-calendar text-primary fs-6 me-2'></i>
                                                        <p className='mb-0 fw-semibold'>{day}</p>
                                                    </div>
                                                    <div className='d-flex align-items-center mb-2'>
                                                        <i className='bi bi-clock text-primary fs-6 me-2'></i>
                                                        <p className='mb-0 fw-semibold'>{start} - {end}</p>
                                                    </div>
                                                    <button className='btn btn-secondary me-2'>Book Again</button>
                                                     <button className='btn btn-primary'>View Details</button>
                                                    <p style={{color:'green'}}>Completed</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBookings
