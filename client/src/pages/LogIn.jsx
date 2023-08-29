import React from 'react'
import { Link } from 'react-router-dom';


function Login() {

    function handleSubmit(event) {
        event.preventDefault();
        // if (password !== confirmPassword) {
        //   toast.error("Please enter same passwords");
        // }
      }

  return (
    <div className='allpage flex'>
        <form onSubmit={handleSubmit} className='bg-orange-200 border-1 border-cyan-950 rounded-md max-w-full m-auto px-2 py-1'>
            <div className='font-semibold align-center max-w-full pl-40'>Log In</div>
            <div className='flex items-center justify-between m-4'>
                <div>Enter Username :</div>
                <input type="text" name='username' required className='txt-bx' placeholder='Username'  />
            </div>
            <div className='flex items-center justify-between m-4'>
                <div>Enter Password :</div>
                <input type="text" name='password' required className='txt-bx' placeholder='Password'  />
            </div>
            <div className='justify-between m-4'>
                <Link className='text-sm text-cyan-400 hover:underline'>Forgot Password?</Link>
                <button className='submit-btn'>Log In</button>
            </div>
        </form>
    </div>
  )
}

export default Login