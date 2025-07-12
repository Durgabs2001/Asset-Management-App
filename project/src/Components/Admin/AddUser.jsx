import React from 'react'
import AdminDash from './AdminDash'

function AddUser() {
  return (
   <div className='container-fluid' style={{ height: "100vh" }}>
          <div className='row h-100'>
            <div className='col-md-2 bg-success h-100'>
              <AdminDash/>
            </div>
            <div className='col-md-10'>
              <h2 className='my-2'>Add New User</h2>
              <form className='border rounded p-4'>
              <div className='row'>
                <div className='col-md-6'>
                    <label>Full Name</label><br></br>
                    <input type='text' name='name' className='w-100 mt-2 '></input>
                </div>
                <div className='col-md-6'>
                    <label>Email address</label><br></br>
                    <input type='email' name='email' className='w-100 mt-2 '></input>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                    <label className='mt-3'>Password</label><br></br>
                    <input type="password" name="password" className='w-100 mt-2'></input>
                </div>
                <div className='col-md-6'>
                     <label className='mt-3'>Confirm password</label><br></br>
                    <input type="password" name="cpass" className='w-100 mt-2'></input>
                </div>
              </div>
              <div className='row'>
                <label className='mt-3'>Role</label><br></br>
                <input type='text' className='ms-3 mt-2' style={{width:"97%"}}></input>
              </div>
              <div className='row'>
                <label className='mt-3'>Profile picture(optional)</label>
                 <input type='file' className='ms-3 mt-2' style={{width:"97%"}}></input>
              </div><br></br>
              <div style={{float:"right"}}>
                <button className='btn btn-secondary me-2'>Cancel</button>
                <button className='btn btn-success'>Add User</button>
              </div><br></br>
              </form>
          </div>
        </div>
        </div>
  )
}

export default AddUser