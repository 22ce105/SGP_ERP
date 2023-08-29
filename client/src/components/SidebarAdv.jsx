import React from 'react'
import { Link } from "react-router-dom";
//import Std from "../assets/Std.png"
import Home from "../assets/Home.gif"
import Stdudent from "../assets/Student.png"
import Room from "../assets/Room.png"
import Bday from "../assets/B.png"
import Fees from "../assets/Fees.png"

function SidebarAdv() {
  return (
    <div className='bg-slate-800 h-full w-16'>
      <div className='border-b-2'>
        <div className='hover:w-52'>
        <img src={Home} alt="home" className='icon'/>
        </div>
      </div>
      <div className='side-btn'>
        <img src={Stdudent} alt="home" className=''/>
      </div>
      <div className='side-btn'>
        <img src={Room} alt="home" className='icon hover:text-inherit'/>
      </div>
      <div className='side-btn'>
        <img src={Bday} alt="home" className='icon'/>
      </div>
      
    </div>
  )
}

export default SidebarAdv