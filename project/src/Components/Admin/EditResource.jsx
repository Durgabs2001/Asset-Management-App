import React from 'react'
import AdminDash from './AdminDash'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import instance from '../../Utils/axios'

function EditResource() {
  const [data,setData]=useState({name:'',type:'',capacity:'',location:'',description:'',assetimage:null})
  const {id}=useParams()
  const navigate=useNavigate()
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleFile=(e)=>{
     setData({ ...data,assetimage:e.target.files[0]})
  }
  useEffect(()=>{
     const token=localStorage.getItem("token")
    instance.get(`/view_asset/${id}`,{
    headers: { Authorization: `Bearer ${token}` }
  })
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[id])
  const editresource = async(id)=>{
    try{
        const admintoken=localStorage.getItem("admintoken")
        const formData=new FormData
        formData.append("name",data.name)
        formData.append("type",data.type)
        formData.append("capacity",data.capacity)
      formData.append("location",data.location)
      formData.append("description",data.description)
      formData.append("assetimage",data.assetimage)
      await instance.put(`/edit_asset/${id}`,formData,{
            headers: { 'Content-Type': 'multipart/form-data' }})
            alert("Updated successfully")
            navigate('/manage_resource')
    }
    catch(err)
    {
      console.log(err)
      alert('Not updated')
    }
   

  }
  const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Edited");
        editresource(id)
    };
  return (
     <div className='container-fluid' style={{ height: "100vh" }}>
          <div className='row h-100'>
            <div className='col-md-2 bg-success h-100'>
              <AdminDash/>
            </div>
            <div className='col-md-10'>
              <h2 className='my-2'>Edit Resource</h2>
              <form className='border rounded p-4' onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-md-6'>
                    <label>Resource Name</label><br></br>
                    <input type='text' name='name' className='w-100 mt-2 ' onChange={handleChange} value={data.name}></input>
                </div>
                <div className='col-md-6'>
                    <label>Type</label><br></br>
                    <input type='text' name='type' className='w-100 mt-2 ' onChange={handleChange} value={data.type}></input>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                    <label className='mt-3'>Capacity</label><br></br>
                    <input type="text" name="capacity" className='w-100 mt-2' onChange={handleChange} value={data.capacity}></input>
                </div>
                <div className='col-md-6'>
                     <label className='mt-3'>Location(Optional)</label><br></br>
                    <input type="text" name="location" className='w-100 mt-2' onChange={handleChange} value={data.location}></input>
                </div>
              </div>
              <div className='row'>
                <label className='mt-3'>Detailed description</label><br></br>
                <textarea className='ms-3 mt-2' style={{width:"97%"}} name='description' onChange={handleChange} value={data.description}></textarea>
              </div>
              <div className='row'>
                <label className='mt-3'>Image</label>
                 <input type='file' className='ms-3 mt-2' style={{width:"97%"}} name='assetimage' onChange={handleFile}></input>
              </div><br></br>
              <div style={{float:"right"}}>
                <button className='btn btn-secondary me-2'>Cancel</button>
                <button className='btn btn-success'>Save Changes</button>
              </div><br></br>
              </form>
          </div>
        </div>
        </div>
  )
}

export default EditResource