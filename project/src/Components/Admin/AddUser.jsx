import React from 'react'
import AdminDash from './AdminDash'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../../Utils/axios'

function AddUser() {
  const navigate=useNavigate()
  const [userdetails,setUserdetails]=useState({username:'',email:'',password:'',cpass:'',role:'',profile:''})
  const handleChange=(e)=>{
    setUserdetails({...userdetails,[e.target.name]:e.target.value})
  }
  const addUser=async ()=>{
    try{
      const token=localStorage.getItem("token")
      const formData=new FormData
      formData.append("username",userdetails.username)
      formData.append("email",userdetails.email)
      formData.append("password",userdetails.password)
      formData.append("role",userdetails.role)
      formData.append("profile",userdetails.profile)
     await instance.post('/add_user',formData,
      {headers:{"Content-Type":"multipart/form-data"}})
      alert("User added successfully")
      navigate("/manage_user")
    }
    catch(err){
      alert("Error")
      console.log(err)
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(validate())
    {
      {addUser()}
    }

  }
  const validate=()=>{
    let flag=true;
         if(userdetails.username.length<4){
            flag=false;
            alert("Enter full name")
        }
        else if(userdetails.email==''||userdetails.email.length<10){
            flag=false;
            alert("Enter email")
        }
        else if(userdetails.password<8){
            flag=false;
            alert("Enter a strong password")
        }
        else if(userdetails.password!=userdetails.cpass )
        {
            flag=false;
            alert("Password and confirm password doesn't match")
        }
        return flag;

  }
  return (
   <div className='container-fluid' style={{ height: "100vh" }}>
          <div className='row h-100'>
            <div className='col-md-2 bg-success h-100'>
              <AdminDash/>
            </div>
            <div className='col-md-10'>
              <h2 className='my-2'>Add New User</h2>
              <form className='border rounded p-4' onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-md-6'>
                    <label>Full Name</label><br></br>
                    <input type='text' name='username' className='w-100 mt-2 ' onChange={handleChange}></input>
                </div>
                <div className='col-md-6'>
                    <label>Email address</label><br></br>
                    <input type='email' name='email' className='w-100 mt-2' onChange={handleChange}></input>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                    <label className='mt-3'>Password</label><br></br>
                    <input type="password" name="password" className='w-100 mt-2' onChange={handleChange}></input>
                </div>
                <div className='col-md-6'>
                     <label className='mt-3'>Confirm password</label><br></br>
                    <input type="password" name="cpass" className='w-100 mt-2' onChange={handleChange}></input>
                </div>
              </div>
              <div className='row'>
                <label className='mt-3'>Role</label><br></br>
                <input type='text' className='ms-3 mt-2' style={{width:"97%"}} name='role' onChange={handleChange}></input>
              </div>
              <div className='row'>
                <label className='mt-3'>Profile picture(optional)</label>
                 <input type='file' className='ms-3 mt-2' style={{width:"97%"}} name='profile'></input>
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