import React from 'react'

import Navbar from './Navbar';

function Homepage() {
    return (
        <div>
            <Navbar/>
            <div className='container-fluid c1 text-center hero  ' >
                <h3 className='text-light'>BOOK ASSETS IN SECONDS,<br />
                    BOOST TEAM PRODUCTIVITY</h3><br></br>
                <p className="text-center text-light">
                    A powerful and intuitive platform designed to streamline asset booking, eliminate scheduling conflicts,<br></br> and ensure your team has the right resources at the right time — boosting<br></br> productivity and operational efficiency across your entire organization.
                </p>
                <button className='btn' style={{ color: "blue", backgroundColor: "white", borderRadius: "25px" }}>Get Started</button>

            </div><br></br>

            <div className="container">
                <h4 className='text-center'>KEY FEATURES</h4><br></br>
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 text-center shadow">
                            <div className="card-body">
                                <i className="bi bi-calendar2-check-fill display-4 text-primary"></i>
                                <h5 className="card-title mt-3">Effortless Booking</h5>
                                <p className="card-text">
                                    Quickly reserve resources with a simple, intuitive booking interface.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 mb-4">
                        <div className="card h-100 text-center shadow">
                            <div className="card-body">
                                <i className="bi bi-display-fill display-4 text-success"></i>
                                <h5 className="card-title mt-3">Asset Visibility</h5>
                                <p className="card-text">
                                    See the status and availability of all assets in real time.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 mb-4">
                        <div className="card h-100 text-center shadow">
                            <div className="card-body">
                                <i className="bi bi-people-fill display-4 text-warning"></i>
                                <h5 className="card-title mt-3">Team Collaboration</h5>
                                <p className="card-text">
                                    Streamline communication and approvals for better coordination.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row justify-content-center g-4">

                    <div className="col-md-5">
                        <div className="card shadow-sm p-4 text-center h-100">
                            <div style={{ fontSize: '2rem' }}>💻</div>
                            <h5 className="fw-bold mt-2">For Employees</h5>
                            <ul className="list-unstyled mt-3 text-start">
                                <li>✓ View and book resources with ease.</li>
                                <li>✓ Check real-time availability on an interactive calendar.</li>
                                <li>✓ Receive instant booking confirmations.</li>
                                <li>✓ Manage and cancel your reservations effortlessly.</li>
                                <li>✓ Access your complete booking history.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="card shadow-sm p-4 text-center h-100">
                            <i className="bi bi-person-badge-fill text-primary" style={{ fontSize: '2rem' }}></i>
                            <h5 className="fw-bold mt-2">For Administrators</h5>
                            <ul className="list-unstyled mt-3 text-start">
                                <li>✓ Full control over resource addition, editing, and deletion.</li>
                                <li>✓ Oversee all bookings and manage conflicts.</li>
                                <li>✓ Add and remove employee accounts.</li>
                                <li>✓ Generate insightful usage reports.</li>
                                <li>✓ Block resources for maintenance.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container text-center">
                <h3 className="mb-3">Make Resource Management Effortless</h3>
                <p>
                    Ready to simplify resource booking?<br />
                    Sign up now and unlock a smarter way to manage your workspace and assets.
                </p>

                <div className="d-flex justify-content-center">
                    <button
                        className="btn px-4 py-2"
                        style={{
                            color: "white",
                            backgroundColor: "blue",
                            borderRadius: "25px"
                        }}
                    > Sign up for free
                    </button>
                </div>
            </div>
            <br></br>
            
            <footer className='bg-dark text-light' ><br></br>
                <p className='text-center pb-3'>@2025 Asset Booking.All Rights Reserved<br></br>Privacy Policy         Terms of Service
            </p>
            </footer>
        </div>
    )
}

export default Homepage;
