/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './NewBlog.css'
import CustomInput from './Components/CustomInput.jsx'
import { useNavigate } from 'react-router-dom'


const NewBlog = () => {

    const [image,setImage]=useState(null);
    const [title,setTitle]=useState('');
    const [subTitle,setSubTitle]=useState('');
    const [desc,setDesc]=useState('');
    const navigate = useNavigate();

    const handleImageChange = (e)=>{
        setImage(e.target.files[0])
    }
    const handleSubmit = async(e)=>{
          e.preventDefault();
          const formData = new FormData()
          formData.append('image',image)
          formData.append('title',title)
          formData.append('subtitle',subTitle)
          formData.append('desc',desc)
            console.log(formData);
          try {
            const token = sessionStorage.getItem('userToken')
            if(token){
              const response = await axios.post('https://entri-news-website.onrender.com/posts',
              formData,
              {
                  headers:{
                     'Content-Type':'multipart/form-data',
                     'Authorization':`Bearer ${token}`
                  }
              }
          )
             console.log(response.data);          
          }else{
            navigate('/login')
          }
          
           
          } catch (error) {

            console.log(error);
          }
    }

  return (
    <div className='blog-container'>
        <form action="" className='form' onSubmit={handleSubmit}>
            <div className='subTitle'>create a new post</div>
                <div className='input'>
                    <CustomInput type='file' label='Blog Image:' name='image' id='image'  onChange={handleImageChange} required/>
                </div>
                <div className='input'>
                    <CustomInput type='text' label='Title:' name='title' id='title'  onChange={(e)=>setTitle(e.target.value)} required/>
                </div>
                <div className='input'>
                   <CustomInput type='text' label='Sub Title:' name='subtitle' id='subTitle'  onChange={(e)=>setSubTitle(e.target.value)} required/>
                </div>
                <div className='input'>
                   <CustomInput type='text' label='Description' name='desc' id='desc'  onChange={(e)=>setDesc(e.target.value)} required/>
                </div>

               <button type='Submit'>Create a new post</button>

        </form>

    </div>
  )
}

export default NewBlog