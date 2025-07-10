import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../../Utils/axios'

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const validate=(e)=>{
        e.preventDefault()
        if(email=='')
        {
            alert('Enter email')
        }
        else if(password=='')
        {
            alert('Enter password')
        }
        else{
            const userlogin=async()=>{
               instance.post("user/verify",{
                email:email,
                password:password
               }).then((res)=>{
                if(res.data)
                {
                    navigate("/user_dashboard");
                    localStorage.getItem("token",res.data.token)
                }
               })
               .catch((err) => {
            if (err.status == 400) {
              alert("Invalid credentials")
            }
            console.log(err)
          });
      }
      userlogin()
        }
    }
    return (
        <div>
            <div className='container-fluid forms min-vh-100 d-flex justify-content-center align-items-center '>

                <form className='justify-content-center  bg-light m-3 w-25' onSubmit={validate}>
                    <h1 className='text-center text-dark mx-5 my-2'>Welcome to Asset Booking</h1><br></br>
                    <div className="mb-3">
                        <label className="form-label mx-5 ">Email</label>
                        <input type="email" className="form-control w-75 mx-auto" placeholder="your@email.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label mx-5">Password</label>
                        <input type="password" className="form-control w-75 mx-auto" placeholder="your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <Link to={'/'} style={{float:"right",marginRight:"35px"}} className='mb-3'>Forgot Password</Link><br></br><br></br>
                    <div className="text-center">
                        <button className="btn btn-primary mb-3">Login</button>
                        <p>Don't have an account? <Link to={'/create_account'}>Sign up</Link></p>
                        
                    </div>


                </form>


            </div>
        </div>
    )
}

export default Login