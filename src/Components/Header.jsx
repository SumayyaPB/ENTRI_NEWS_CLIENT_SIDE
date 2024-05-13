/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const tokenRelease=()=>{
        sessionStorage.removeItem('userToken')
      }
  return (
    <div className='header-div'>
        <header className='navbar'>
            <nav className='links'>
                <ul>
                    <li className='link'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='link'>
                        <Link to='/new'>New</Link>
                    </li>
                    <li className='link'>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li className='link'>
                        <Link to='/signUp'>SignUp</Link>
                    </li>
                    <li className='link'>
                        <Link to='/login' >LogIn</Link>
                    </li>
                    <li className='link'>
                        <Link to='/logout' onClick={tokenRelease}>Logout</Link>
                    </li>
                    
                </ul>

            </nav>
            
        </header>
    </div>
  )
}

export default Header