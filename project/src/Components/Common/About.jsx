import React from 'react'
import feature3 from '../../assets/feature3.jpeg'
import Navbar from './Navbar'
function About() {
    return (
        <div>
            <Navbar />
            <div className="container my-5">
                <h1 className="text-center mb-4">About Asset Booking</h1>
                <p className=" text-center">
                    Our mission is to simplify and streamline the way organizations manage and reserve shared resources.
                </p>

                <div className="row mt-5 align-items-center">
                    <div className="col-md-6 mb-4">
                        <img
                            src={feature3}
                            className="img-fluid rounded shadow"
                            alt="Asset booking illustration"
                        />
                    </div>
                    <div className="col-md-6">
                        <h4 className="fw-bold">Why Asset Booking?</h4>
                        <p>
                            In many workplaces, managing access to meeting rooms, equipment, or shared facilities is a daily challenge.
                            Our platform provides a centralized, user-friendly system that eliminates scheduling conflicts, reduces
                            administrative overhead, and improves resource visibility.
                        </p>

                        <h5 className="fw-bold mt-4">What We Offer</h5>
                        <ul>
                            <li>Intuitive booking system with real-time availability</li>
                            <li>Automated confirmation and notification features</li>
                            <li>Detailed usage history and analytics</li>
                            <li>Role-based access for users and administrators</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <h5 className="fw-bold">Empowering teams to use resources smarter, faster, and better.</h5>
                    <p>
                        Whether you're a growing business, a university, or a large enterprise, our solution scales with your needs to ensure
                        efficient resource allocation at every level.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About