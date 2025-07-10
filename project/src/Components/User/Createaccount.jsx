import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../../Utils/axios'

function Createaccount() {
    const [data, setData] = useState({ username: '', email: '', password: '', cpassword: '', image: null })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const addUser = async () => {
        try {
            var token = localStorage.getItem("token")
            const formData = new FormData()
            formData.append("username", data.username)
            formData.append("email", data.email)
            formData.append("password", data.password)
            formData.append("profile", data.image)
            await instance.post("/user/register", formData,
                { headers: { "Content-Type": "multipart/form-data" } })
            alert("User added successfully")
        }
        catch (err) {
             alert("Error")
        }
    }
    const handleFile=(e)=>{
     setData({ ...data,image:e.target.files[0]})

  }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(validate())
        {addUser()}
    }
    const validate=()=>{
        let flag=true;
         if(data.username.length<4){
            flag=false;
            alert("Enter full name")
        }
        else if(data.email==''||data.email.length<10){
            flag=false;
            alert("Enter email")
        }
        else if(data.password<8){
            flag=false;
            alert("Enter a strong password")
        }
        else if(data.password!=data.cpassword )
        {
            flag=false;
            alert("Password and confirm password doesn't match")
        }
        return flag;
    }
    
    return (
        <div>
            <div className='container-fluid forms min-vh-100 d-flex justify-content-center align-items-center '>
                <form className='justify-content-center  bg-light m-3 w-25' onSubmit={handleSubmit}>
                    <h1 className='text-center text-dark mx-2 my-2'> Create Account</h1><br></br>
                    <div className="mb-3">
                        <label className="form-label mx-5 ">Full Name</label>
                        <input type="text" className="form-control w-75 mx-auto " placeholder="Enter full name" name='username' onChange={handleChange} value={data.username} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label mx-5 ">Email</label>
                        <input type="email" className="form-control w-75 mx-auto" placeholder="your@email.com" name='email' onChange={handleChange} value={data.email} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label mx-5">Password</label>
                        <input type="password" className="form-control w-75 mx-auto" placeholder="Create password" name='password' onChange={handleChange} value={data.password} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label mx-5">Confirm Password</label>
                        <input type="password" className="form-control w-75 mx-auto" placeholder="confirm password" name='cpassword' onChange={handleChange} value={data.cpassword} />
                    </div>
                     <div className="mb-3">
                        <label className="form-label mx-5">Profile picture</label>
                        <input type="file" className="form-control w-75 mx-auto" placeholder="confirm password" name='image' onChange={handleFile} value={data.image} />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary mb-3">Create Account</button>
                        <p>Already have an account? <Link to={'/userlogin'}>Login here</Link></p>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Createaccount