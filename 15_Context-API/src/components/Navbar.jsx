import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { PostDataContext, ThemeDataContext } from './Themecontext'


const Navbar = (props) => {
    const [theme] = useContext(ThemeDataContext)
    const Data = useContext(PostDataContext)

  return (
    <div className='nav'>
      <h2>{Data} {theme}</h2>
      <Nav2 />
      
    </div>
  )
}

export default Navbar
