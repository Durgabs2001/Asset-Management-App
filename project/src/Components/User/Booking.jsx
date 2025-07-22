import React, { useEffect, useState } from 'react'
import Dash from './Dash'
import instance from '../../Utils/axios'
import { useNavigate, useParams } from 'react-router-dom'
import defaultimage from '../../assets/asset_background.jpg'

function Booking() {
    const navigate=useNavigate()
    const [data, setData] = useState([])
    const [booking, setBooking] = useState({date:'', starttime: '', endtime: '' })
    const handleChange = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    };
    const { id } = useParams()
    useEffect(() => {
        const token = localStorage.getItem("token")
        instance.get(`/view_assets/${id}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
                console.log("Asset fetched")
            })
            .catch((err) => {
                console.log(err, "error")
            })
    }, [])
    const handleBooking = (e) => {
        const token = localStorage.getItem("token")
        const start_date = `${booking.date} ${booking.starttime}`;
        const end_date = `${booking.date}   ${booking.endtime}`;

        e.preventDefault()
        if (!booking.starttime || !booking.endtime) {
            alert("Please select time")
        }
        instance.post(`/book_asset/${id}`, {
            start_date: start_date,
            end_date: end_date,
            asset: id

        })
            .then((res) => {
                if (res.data) {
                    alert("Booking successful")
                    navigate('/browse_resources')
                    
                }
            })
            .catch((err) => {
                alert("Cannot book")
            })
    }
    return (
        <div>
            <div className='container-fluid'>
                <div className='row h-100' >
                    <div className='col-md-2 bg-primary h-100 '>
                        <Dash />
                    </div>
                    <div className='col-md-10 py-4'>
                        <h2>Resource Details and Booking</h2>
                        <div className='row mt-3'>
                            <div className='col-md-5 mx-3 d-flex justify-content-center align-items-center'>
                                <div className="card p-3 h-100 shadow-sm">
                                    <img src={data.assetimage ? "http://localhost:3000/assetuploads/" + data.assetimage : defaultimage} className="mx-auto" width="300px" height="200px" name="image" alt="..."></img>
                                    <h4 className='py-2'>{data.name}</h4>
                                    <p >Type: {data.type}</p>
                                    <p>Capacity:{data.capacity}</p>
                                    <p>{data.properties}</p>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <h1>Book this resource</h1>
                                <form className='m-3 p-4  border rounded' onSubmit={handleBooking}>
                                    <div className='row'>
                                        <label>Select date</label><br></br>
                                        <input type='date' name='date' placeholder="choose date" className='me-3 ' onChange={handleChange} value={booking.date}></input>
                                    </div><br></br>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label >Start time</label><br></br>
                                            <input type="time" name='starttime' placeholder='start time' className='mx-1 w-100' onChange={handleChange} value={booking.starttime}></input>
                                        </div>
                                        <div className='col-md-6'>
                                            <label className='mx-3'>End time</label><br></br>
                                            <input type='time' name='endtime' placeholder='end time ' className='w-100' onChange={handleChange} value={booking.endtime}></input>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <button className='btn btn-primary mt-3  me-3'>Book Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking