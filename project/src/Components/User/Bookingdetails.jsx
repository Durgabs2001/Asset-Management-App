import React, { useEffect, useState } from 'react'
import Dash from './Dash'
import image from '../../assets/asset_background.jpg'
import instance from '../../Utils/axios'
import { Link, useParams } from 'react-router-dom'

function Bookingdetails() {
    const [data, setData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        instance.get(`/viewbooking/${id}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const start = new Date(data.start_date).toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
    });

    const end = new Date(data.end_date).toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
    });

    const day = new Date(data.start_date).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'Asia/Kolkata'
    });
     const handle_delete=async(id)=>{
        const confirmDelete = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmDelete) return;
    try{
      const token=localStorage.getItem("token")
      await instance.delete(`/cancel_booking/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
      alert(" Booking cancelled succesfully")
    }
    catch(err){
      console.error("Delete failed:", err);
      alert("Failed to cancel booking.");
    }
    }
    return (
        <div>
            <div className='container-fluid'>
                <div className='row h-100' >
                    <div className='col-md-2 bg-primary h-100 '>
                        <Dash />
                    </div>
                    <div className='col-md-10'>
                        <div className='row'>
                            <div className='col-md-5 mx-3 d-flex justify-content-center align-items-center'>
                                <img src={image} style={{ width: "400px", height: "400px" }} className='mt-4'></img>
                            </div>
                            <div className='col-md-6'>
                                <h1 className='mb-3'>Your Booking Information</h1>
                                <p>Date:<br />{data.start_date ? day : ''}</p>
                                <p>Time slot:<br />{data.start_date ? `${start} - ${end}` : ''}</p>
                                <p>Status:<br />{data.status || 'Not available'}</p>
                                <p>Booked by:<br />{data.user?.username || 'Unknown user'}</p>

                                <button className='btn btn-danger me-2' onClick={()=>{handle_delete(e._id)}}>Cancel Booking</button>
                                <button className='btn btn-primary'>Chat about Booking</button>
                                <div className='mt-3 border rounded p-3'>
                                    <p>Need to book something else?</p>
                                    <Link to='/browse_resources' className='btn btn-success me-2'>Browse all resources</Link>
                                    <Link className='btn btn-primary ' >Rebook this resource</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookingdetails