
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './CustomInput.css'

// eslint-disable-next-line react/prop-types
const CustomInput = ({label,type,value,onChange,id,name}) => {
  return (
    <div className='customInput'>
        <label htmlFor="">{label}</label>
        <input type={type} value={value} onChange={onChange} id={id} name={name}/>
    </div>
  )
}

export default CustomInput