import React from 'react'
import { Link } from 'react-router-dom'

function SubHeader() {
  return (
    <div className='bg-white h-12 w-[calc(100hw-12px)]'>
        <div className='my-2 ml-6 mr-16 flex gap-6 border-b-2 border-gray-200 hover:bold-this.first = this.first.bind(border)'>
            <Link className='sub-btn ml-6 hover:font-underline' to="/">Home</Link>
            <Link className='max-w-7xl m-auto' to="/">Profile</Link>
            <Link className='sub-btn' to="/">Address</Link>
            <Link className='sub-btn' to="/">Education</Link>
            <Link className='sub-btn' to="/">Family</Link>
        </div>
    </div>
    // <div className='poflex justify-between'>
    //   <div className=''>
    //     hi
    //   </div>
    //   <div className=''>
    //     mahir
    //   </div>
    // </div>
  )
}

export default SubHeader