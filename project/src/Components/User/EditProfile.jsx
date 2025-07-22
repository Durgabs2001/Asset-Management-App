import React from 'react'
import Dash from './Dash'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../../Utils/axios'

function EditProfile() {
    const navigate=useNavigate()
    const [userdetails, setUserdetails] = useState({ username: '', email: '', profile: '' })
    const handleChange = (e) => {
        setUserdetails({ ...userdetails, [e.target.name]: e.target.value })
    }
    const handleFile = (e) => {
        setUserdetails({ ...userdetails, image: e.target.files[0] })
    }
    useEffect(() => {
        const token = localStorage.getItem("token")
        instance.get("/viewprofile")
            .then((res) => {
                setUserdetails(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const editprofile = async(e)=>{
    e.preventDefault();
         const formData=new FormData()
    formData.append("username",userdetails.username)
    formData.append("email",userdetails.email)
    formData.append("profile",userdetails.profile)
    
        const token = localStorage.getItem("token");
        instance.put(`/editprofile`,formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
            .then((res) => {
                setUserdetails(res.data);
                alert("Profile updated successfully")
                console.log("Profile details gathered:", res.data);
                navigate("/profile")
                
            })
            .catch((err) => {
                console.log("Error fetching profile data:", err);
            });
  }
    return (
        <div className='container-fluid' style={{ height: "100vh" }}>
            <div className='row h-100'>
                <div className='col-md-2 bg-primary h-100'>
                    <Dash />
                </div>
                <div className='col-md-10'>
                    <h2 className='my-2'>Edit User</h2>
                    <form className='border rounded p-4' onSubmit={editprofile}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>Full Name</label><br></br>
                                <input type='text' name='username' className='w-100 mt-2 ' onChange={handleChange} value={userdetails.username || ""}></input>
                            </div>
                            <div className='col-md-6'>
                                <label>Email address</label><br></br>
                                <input type='email' name='email' className='w-100 mt-2' onChange={handleChange} value={userdetails.email || ""}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <label className='mt-3'>Profile picture</label><br></br>
                            <input type='file' className='ms-3 mt-2' style={{ width: "97%" }} name='profile' onChange={handleFile}></input>
                        </div><br></br>
                        <div style={{ float: "right" }}>
                            <Link to={'/profile'} className='btn btn-secondary me-2'>Cancel</Link>
                            <button className='btn btn-success'>Edit User</button>
                        </div><br></br>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProfile