import React from 'react'
import Dash from './Dash'
import image from '../../assets/asset_background.jpg'

function Bookingdetails() {
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
                                <p>Date</p>
                                <p>Time slot</p>
                                <p>Status</p>
                                <p>Booked by</p>
                                <button className='btn btn-danger me-2'>Cancel Booking</button>
                                <button className='btn btn-primary'>Chat about Booking</button>
                                <div className='mt-3 border rounded p-3'>
                                    <p>Need to book something else?</p>
                                     <button className='btn btn-success me-2'>Browse all resources</button>
                                <button className='btn btn-primary'>Rebook this resource</button>

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