import React from 'react'
import AdminDash from './AdminDash'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import instance from '../../Utils/axios'

function EditUser() {
    const navigate=useNavigate()
    const {id}=useParams()
      const [userdetails,setUserdetails]=useState({username:'',email:'',role:''})
      const handleChange=(e)=>{
        setUserdetails({...userdetails,[e.target.name]:e.target.value})
      }
      useEffect(()=>{
        const token=localStorage.getItem("token")
        instance.get(`/view_user/${id}`)
        .then((res)=>{
            setUserdetails(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
  },[id])
  const edituser=async (id)=>{
    try{
        const token=localStorage.getItem("token")
        
        await instance.put(`/edit_users/${id}`,userdetails,{
            headers: {'Authorization': `Bearer ${token}`  }})
            alert("Edited successfully")
            navigate("/manage_user")
    }
    catch(err){
        console.log(err)
        alert("Cannot update")
    }
  }
   const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Edited");
        edituser(id)
    };
  return (
   <div className='container-fluid' style={{ height: "100vh" }}>
             <div className='row h-100'>
               <div className='col-md-2 bg-success h-100'>
                 <AdminDash/>
               </div>
               <div className='col-md-10'>
                 <h2 className='my-2'>Edit User</h2>
                 <form className='border rounded p-4' onSubmit={handleSubmit}>
                 <div className='row'>
                   <div className='col-md-6'>
                       <label>Full Name</label><br></br>
                       <input type='text' name='username' className='w-100 mt-2 ' onChange={handleChange} value={userdetails.username||""}></input>
                   </div>
                   <div className='col-md-6'>
                       <label>Email address</label><br></br>
                       <input type='email' name='email' className='w-100 mt-2' onChange={handleChange} value={userdetails.email||""}></input>
                   </div>
                 </div>
                 <div className='row'>
                   <label className='mt-3'>Role</label><br></br>
                   <input type='text' className='ms-3 mt-2' style={{width:"97%"}} name='role' onChange={handleChange} value={userdetails.role||""}></input>
                 </div><br></br>
                 <div style={{float:"right"}}>
                   <Link  to={'/manage_user'}className='btn btn-secondary me-2'>Cancel</Link>
                   <button className='btn btn-success'>Edit User</button>
                 </div><br></br>
                 </form>
             </div>
           </div>
           </div>
  )
}

export default EditUser
