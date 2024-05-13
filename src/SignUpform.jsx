/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from 'react'
import { useState } from 'react'
import CustomInput from './Components/CustomInput'
import './SignUpform.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const SignUpform = () => {
    const [formData,setFormData ] = useState({
        name:'',
        username:'',
        password:'',
        confirmPassword:'',
        email:''
    })
    const navigate = useNavigate()
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value});
  }
  const handleSubmit = async(e)=>{
     e.preventDefault();
     try {
      const response = await axios.post("https://entri-news-website.onrender.com/users",formData)
      console.log(response.data);
      navigate('/login')
     } catch (error) {
      console.log(error);
     }

  } 

  return (
    <div className = 'signUpform'>
        <h2 className='title'>SignUp</h2>
        <form onSubmit={handleSubmit} className='form'>

            <div className='title'>Welcome</div>
            <div className='subTitle'>Let's create your account!</div>
            <CustomInput type='text' label='Name:' name='name' id='name' value={formData.name} onChange={handleChange}/>

            <CustomInput type='text' label='Username:' name='username' id='username' value={formData.username} onChange={handleChange}/>

            <CustomInput type='password' label='Password:' name='password' id='password' value={formData.password} onChange={handleChange}/>

            <CustomInput type='password' label='ConfirmPassword' name='confirmPassword' id='confirmPassword' value={formData.confirmPassword} onChange={handleChange}/>

            <CustomInput type='email' label='Email:' name='email' id='email' value={formData.email} onChange={handleChange}/>
            
             <button type='submit'>Sign Up</button>
        </form>

    </div>
  )
}

export default SignUpform