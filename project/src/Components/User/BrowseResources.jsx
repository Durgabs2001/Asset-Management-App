import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import instance from '../../Utils/axios'
import defaultimage from '../../assets/asset_background.jpg'
import Dash from './Dash'

function BrowseResources() {
  const [data, setData] = useState([])

  useEffect(() => {
    instance.get("/view_assets")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching assets:", err))
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-primary text-white min-vh-100 p-3">
          <Dash/>
          </div>
        <div className="col-md-10 py-4">
          <h2>Browse Resources</h2>
          <div className="row">
            {data.length === 0 ? (
              <p>No resources found.</p>
            ) : (
              data.map((e, index) => (
                <div className="col-md-4 mb-4" key={e._id || index}>
                  <div className="card p-3 h-100 shadow-sm">
                     <img src={e.assetimage ? "http://localhost:3000/assetuploads/" + e.assetimage : defaultimage}  className="mx-auto" width="300px" height="200px" name="image"  alt="..."></img>
                    <h4 className='mx-auto'>{e.name}</h4>
                    <p >Type: {e.type}</p>
                    <p>Capacity:{e.capacity}</p>
                    <p>Description:</p>
                    <Link to={`/booking/${e._id}`}  class="btn btn-primary">View Details and Book</Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseResources
