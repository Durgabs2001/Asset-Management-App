import React from 'react'
import AdminDash from './AdminDash'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import instance from '../../../../../../OneDrive/Desktop/Note-taking-application/project/src/Utils/axios'

function AddResource() {
  const navigate=useNavigate()
  const [resourcedata,setResourceData]=useState({name:'',type:'',capacity:'',location:'',description:'',assetimage:null})
  const handleChange=(e)=>{
    setResourceData({...resourcedata,[e.target.name]:e.target.value})
  }
  const addresource=async()=>{
    try{
      var token=localStorage.getItem("token")
      const formData=new FormData
      formData.append("name",resourcedata.name)
      formData.append("type",resourcedata.type)
      formData.append("capacity",resourcedata.capacity)
      formData.append("location",resourcedata.location)
      formData.append("description",resourcedata.description)
      formData.append("assetimage",resourcedata.assetimage)
      await instance.post("/add_asset",formData,{headers:{"Content-Type":"multipart/form-data"}})
      alert("Resource added successfully")
      setResourceData({name:'',type:'',capacity:'',location:'',description:''})
      navigate('/manage_resource')

    }
    catch(err){
      console.log(err)
      alert("Resource not added")
    }
  }
  const handleFile=(e)=>{
    setResourceData({ ...resourcedata,assetimage:e.target.files[0]})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("submitted")
    addresource()
  }
  return (
    <div className='container-fluid' style={{ height: "100vh" }}>
          <div className='row h-100'>
            <div className='col-md-2 bg-success h-100'>
              <AdminDash/>
            </div>
            <div className='col-md-10'>
              <h2 className='my-2'>Add Resource</h2>
              <form className='border rounded p-4' onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-md-6'>
                    <label>Resource Name</label><br></br>
                    <input type='text' name='name' className='w-100 mt-2 ' onChange={handleChange} value={resourcedata.name}></input>
                </div>
                <div className='col-md-6'>
                    <label>Type</label><br></br>
                    <input type='text' name='type' className='w-100 mt-2 ' onChange={handleChange} value={resourcedata.type}></input>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                    <label className='mt-3'>Capacity</label><br></br>
                    <input type="text" name="capacity" className='w-100 mt-2' onChange={handleChange} value={resourcedata.capacity}></input>
                </div>
                <div className='col-md-6'>
                     <label className='mt-3'>Location(Optional)</label><br></br>
                    <input type="text" name="location" className='w-100 mt-2' onChange={handleChange} value={resourcedata.location}></input>
                </div>
              </div>
              <div className='row'>
                <label className='mt-3'>Detailed description</label><br></br>
                <textarea className='ms-3 mt-2' style={{width:"97%"}} name="description" onChange={handleChange} value={resourcedata.description}></textarea>
              </div>
              <div className='row'>
                <label className='mt-3'>Image</label>
                 <input type='file' className='ms-3 mt-2' style={{width:"97%"}} name='assetimage' id='image' onChange={handleFile}></input>
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