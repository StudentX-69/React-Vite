import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  bg-cyan-700 px-8 py-4 justify-between'>
        <h2 className='text-2xl font-bold'>Sheriyans</h2>
        <div className='flex gap-8'>
            <a className='text-lg font-medium' href="/">Home</a>
            <a className='text-lg font-medium' href="/about">About</a>
            <a className='text-lg font-medium' href="/courses">Courses</a>
            <a className='text-lg font-medium' href="/product">Product</a>

        </div>
      
    </div>
  )
}

export default Navbar
