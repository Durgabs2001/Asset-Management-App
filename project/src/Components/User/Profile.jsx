import React, { useEffect, useState } from 'react'
import Dash from './Dash'
import instance from '../../Utils/axios'
import defaultimage from '../../assets/defaultprofile.jpg'

function Profile() {
    const [details,setUserdetails]=useState([])
    useEffect(()=>{
        const token=localStorage.getItem("token")
        instance.get("/viewprofile")
        .then((res)=>{
            setUserdetails(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
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
                                 <img src={details.profile ? "http://localhost:3000/profileuploads/" + details.assetimage : defaultimage} style={{width: "200px",height:" auto"}}  className="mx-auto"  name="profile"  alt="..."></img>
                                <h3 className='text-center'>{details.username}</h3>
                                <p className='text-center'>{details.email}</p>
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