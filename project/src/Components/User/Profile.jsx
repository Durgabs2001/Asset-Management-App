import React, { useEffect, useState } from 'react'
import Dash from './Dash'
import instance from '../../Utils/axios'
import defaultimage from '../../assets/defaultprofile.jpg'
import { Link } from 'react-router-dom'

function Profile() {
    const [details, setUserdetails] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        const token = localStorage.getItem("token")
        instance.get("/viewprofile")
            .then((res) => {
                setUserdetails(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    useEffect(() => {
        const token = localStorage.getItem("token")
        instance.get("/recent_booking")
            .then((res) => {
                setData(res.data)
                console.log("Bookings fetched")
            })
            .catch((err) => {
                console.log(err, "error")
            })
    }, [])
    const viewall = async () => {
    try {
        const token = localStorage.getItem("token");
        const res = await instance.get("/view_booking");
        setData(res.data);
        console.log("Bookings fetched");
    } catch (err) {
        console.log(err, "error");
    }
};

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
                            <img src={details.profile ? "http://localhost:3000/profileuploads/" + details.assetimage : defaultimage} style={{ width: "200px", height: " auto" }} className="mx-auto" name="profile" alt="..."></img>
                            <h3 className='text-center'>{details.username}</h3>
                            <p className='text-center'>{details.email}</p>
                            <Link to={'/edit-profile'} className='btn btn-primary w-25 me-3'>Edit profile</Link>
                            <button className='btn btn-secondary w-25'>Change password</button>
                        </div><br></br>
                        <h5 className='mt-3'>Recent Bookings</h5>
                        <div className='row'>
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
                                    <div className='col-md-4 mb-2'>
                                        <div className='card shadow-sm p-2'>
                                            <div className='card-body'>
                                                <h6 className='mb-0'>{e.asset?.name || 'Resource'}</h6><br></br>
                                                <div className='d-flex align-items-center mb-2'>
                                                    <i className='bi bi-calendar text-primary fs-6 me-2'></i>
                                                    <p className='mb-0 fw-semibold'>{day}</p>
                                                </div>
                                                <div className='d-flex align-items-center mb-2'>
                                                    <i className='bi bi-clock text-primary fs-6 me-2'></i>
                                                    <p className='mb-0 fw-semibold'>{start + '-' + end}</p>
                                                </div>
                                                <p>{new Date(e.end_date) <= new Date() ? 'Completed' : 'Confirmed'}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <center><div className=' mx-auto mb-5'>
                        <button onClick={viewall} className='btn btn-primary w-25 '>View all Bookings</button>
                    </div></center>

                </div>

            </div>
        </div>
    </div>
)
}

export default Profile