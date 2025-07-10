import React from 'react'
import Dash from './Dash'
import image from '../../assets/asset_background.jpg'

function Booking() {
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
                            <div className='col-md-5'>
                                <h1>Book this resource</h1>
                                <form className='m-3 p-4  border rounded'>
                                    <div className='row'>
                                        <label>Select date</label><br></br>
                                        <input type='date' name='date' placeholder="choose date" className='me-3 '></input>
                                    </div><br></br>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label >Start time</label><br></br>
                                            <input type="time" name='starttime' placeholder='start time' className='mx-1 w-100'></input>
                                        </div>
                                        <div className='col-md-6'>
                                            <label className='mx-3'>End time</label><br></br>
                                            <input type='time' name='endtime' placeholder='end time ' className='w-100'></input>
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