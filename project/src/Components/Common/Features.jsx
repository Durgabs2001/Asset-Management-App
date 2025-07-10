import React from 'react'
import feature1 from '../../assets/feature1.jpg'
import feature2 from '../../assets/feature2.jpg'
import feature3 from '../../assets/feature3.jpeg'
import feature4 from '../../assets/feature4.jpg'
import feature5 from '../../assets/feature5.jpg'
import feature6 from '../../assets/feature6.jpg'
import Navbar from './Navbar'


function Features() {
    return (
        <div>
            <Navbar/>
            <div className='container my-5'>
                <h1 className='text-center'>FEATURES</h1>
                <div className="row justify-content-center">

                    <div className='col-md-4 mb-4'>
                        <div className="card shadow-sm h-100 border-0 d-flex flex-column text-center p-3">
                            <img src={feature1} className="mx-auto mb-3" style={{ width: "200px", height: "200px", objectFit: "cover" }} alt="Effortless Booking" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="fw-bold">Effortless Booking</h5>
                                <p className="text-muted mt-auto">
                                    Quickly reserve resources with a simple, intuitive booking interface.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm h-100 border-0 d-flex flex-column text-center p-3">
                            <img src={feature2} className="mx-auto mb-3" style={{ width: "200px", height: "200px", objectFit: "cover" }} alt="Asset Visibility" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="fw-bold">Asset Visibility</h5>
                                <p className="text-muted mt-auto">
                                    See the status and availability of all assets in real time.
                                </p>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-4 mb-4">
                        <div className="card shadow-sm h-100 border-0 d-flex flex-column text-center p-3">
                            <img src={feature3} className="mx-auto mb-3" style={{ width: "200px", height: "200px", objectFit: "cover" }} alt="Team Collaboration" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="fw-bold">Team Collaboration</h5>
                                <p className="text-muted mt-auto">
                                   Streamline communication and approvals for better coordination
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm h-100 border-0 d-flex flex-column text-center p-3">
                            <img src={feature4} className="mx-auto mb-3" style={{ width: "200px", height: "200px", objectFit: "cover" }} alt="Asset Visibility" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="fw-bold">Real Time Availability</h5>
                                <p className="text-muted mt-auto">
                                    Check interactive calendar views to avoid double bookings and conflicts
                                </p>
                            </div>
                        </div>
                    </div>

                     <div className="col-md-4 mb-4">
                        <div className="card shadow-sm h-100 border-0 d-flex flex-column text-center p-3">
                            <img src={feature5} className="mx-auto mb-3" style={{ width: "200px", height: "200px", objectFit: "cover" }} alt="Asset Visibility" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="fw-bold">Instant Confirmation</h5>
                                <p className="text-muted mt-auto">
                                   Receive instant booking confirmations for peace of mind and efficiency
                                </p>
                            </div>
                        </div>
                    </div>

                     <div className="col-md-4 mb-4">
                        <div className="card shadow-sm h-100 border-0 d-flex flex-column text-center p-3">
                            <img src={feature6} className="mx-auto mb-3" style={{ width: "200px", height: "200px", objectFit: "cover" }} alt="Asset Visibility" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="fw-bold">Booking History</h5>
                                <p className="text-muted mt-auto">
                                   Easily view and track your past reservations in one centralized place
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Features