import React from 'react'
import ERP from "../assets/ERP.png"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>   
        <div className='bg-blue-300 flex justify-between items-center'>
            <Link className='p-1' to="/">
                <img src={ERP} alt="Logo" className='bg-neutral-50 rounded-sm w-14 h-14 border-1 border-cyan-300'/>
            </Link>
            <div>
                <div className='mr-2 flex gap-2'>
                    <Link className='btn' to="/">Home</Link>
                    <Link className='btn' to="/signup">Sign up</Link>
                    <Link className='btn' to="/login">Log in</Link>
                    <Link className='btn' to="/about">About Us</Link>
                    <Link className='btn' to="/check">Check</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header