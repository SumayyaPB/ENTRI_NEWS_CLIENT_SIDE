/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

const Root = () => {
  return (
    <>
      <div className='container'>
       <Header/>
       <Outlet/>
      </div>
    </>
    
  )
}

export default Root