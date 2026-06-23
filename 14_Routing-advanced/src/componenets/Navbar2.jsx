import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate = useNavigate()
  return (
    <div className='bg-cyan-600'>
        <button onClick={()=>{navigate('/') }} className='font-medium bg-emerald-900 px-5 py-2 rounded m-2 cursor-pointer'>Return to Homepage</button>
      <button onClick={()=>{navigate(-1) }} className='font-medium bg-emerald-900 px-5 py-2 rounded m-2 cursor-pointer'>Back</button>
      
    </div>
  )
}

export default Navbar2
