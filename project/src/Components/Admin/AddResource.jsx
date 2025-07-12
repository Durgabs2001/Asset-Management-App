import React from 'react'
import AdminDash from './AdminDash'

function AddResource() {
  return (
    <div className='container-fluid' style={{ height: "100vh" }}>
          <div className='row h-100'>
            <div className='col-md-2 bg-success h-100'>
              <AdminDash/>
            </div>
            <div className='col-md-10'>
              <h2 className='my-2'>Add Resource</h2>
              <form className='border rounded p-4'>
              <div className='row'>
                <div className='col-md-6'>
                    <label>Resource Name</label><br></br>
                    <input type='text' name='name' className='w-100 mt-2 '></input>
                </div>
                <div className='col-md-6'>
                    <label>Type</label><br></br>
                    <input type='text' name='type' className='w-100 mt-2 '></input>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                    <label className='mt-3'>Capacity</label><br></br>
                    <input type="text" name="capacity" className='w-100 mt-2'></input>
                </div>
                <div className='col-md-6'>
                     <label className='mt-3'>Location(Optional)</label><br></br>
                    <input type="text" name="location" className='w-100 mt-2'></input>
                </div>
              </div>
              <div className='row'>
                <label className='mt-3'>Detailed description</label><br></br>
                <textarea className='ms-3 mt-2' style={{width:"97%"}}></textarea>
              </div>
              <div className='row'>
                <label className='mt-3'>Image</label>
                 <input type='file' className='ms-3 mt-2' style={{width:"97%"}}></input>
              </div><br></br>
              <div style={{float:"right"}}>
                <button className='btn btn-secondary me-2'>Cancel</button>
                <button className='btn btn-success'>Add Resource</button>
              </div><br></br>
              </form>
          </div>
        </div>
        </div>
  )
}

export default AddResource