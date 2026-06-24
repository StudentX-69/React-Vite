import React, { useContext } from 'react'
import { PostDataContext, ThemeDataContext } from './Themecontext'

const Nav2 = () => {
  const Data = useContext(PostDataContext)
  const [theme] = useContext(ThemeDataContext)

  return (
    <div className='nav2'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>{Data}</li>
        <li>{theme}</li>
    </div>
  )
}

export default Nav2
