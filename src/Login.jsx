// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import CustomInput from './Components/CustomInput'
import './SignUpform.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [formData,setFormData ] = useState({
        password:'',
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
      const response = await axios.post("https://entri-news-website.onrender.com/users/login",formData)
      sessionStorage.setItem('userToken',response.data.token)
      // console.log(response);
      navigate('/')
     } catch (error) {
      console.log(error);
     }

  } 

  return (
    <div className = 'signUpform'>
        <h2 className='title'>Log In</h2>
        <form onSubmit={handleSubmit} className='form'>

            <div className='title'>Welcome</div>
            <div className='subTitle'>Lets create your account!</div>

            <CustomInput type='password' label='Password:' name='password' id='password' value={formData.password} onChange={handleChange}/>

            <CustomInput type='email' label='Email:' name='email' id='email' value={formData.email} onChange={handleChange}/>
            
             <button type='submit'>LogIn</button>
        </form>

    </div>
  )
}



export default Login