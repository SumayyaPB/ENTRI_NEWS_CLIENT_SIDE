/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Blog = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        const fetchData = async (req,res)=>{
            try {
                const posts = await axios.get('https://entri-news-website.onrender.com/posts');
                setPosts(posts.data)
            } catch (error) {
               console.log(error); 
            }
        }
  fetchData()
    },[])
  return (
    <div className='gridContainer'>
          {posts.map((post,index)=>(
              <div>
                 <img className='blogImg' 
                 key={index} 
                 src={`https://entri-news-website.onrender.com/${post.image}`}/>
                 <p>{post.title}</p>
                 <p>{post.subtitle}</p>
                 <p>{post.desc}</p>
              </div>
          ))}


    </div>
  )
}

export default Blog