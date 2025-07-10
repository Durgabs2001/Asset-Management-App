import React from 'react';
import Navbar from './Navbar';

function Contact() {
  return (
    <div>
        <Navbar/>
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h5 className="fw-bold">Address</h5>
          <p>
            Asset Booking Solutions Pvt. Ltd.<br />
            #12, Innovation Park, Technopark Campus,<br />
            Trivandrum, Kerala, India – 695581
          </p>

          <h5 className="fw-bold mt-4">Phone</h5>
          <p>+91 7736600516</p>

          <h5 className="fw-bold mt-4">Email</h5>
          <p>support@assetbookingapp.com</p>

          <h5 className="fw-bold mt-4">Working Hours</h5>
          <p>Monday to Friday – 9:00 AM to 6:00 PM</p>

          <h5 className="fw-bold mt-4">Follow Us</h5>
          <p>
            <a href="#" className="me-3">Facebook</a>
            <a href="#" className="me-3">LinkedIn</a>
            <a href="#">Instagram</a>
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h5 className="fw-bold mb-3">Send Us a Message</h5>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your name" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="your@email.com" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
