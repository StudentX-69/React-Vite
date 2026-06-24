import React, { useContext } from 'react'
import { ThemeDataContext } from './Themecontext'

const Button = () => {
    const [theme,setTheme] = useContext(ThemeDataContext)
    const ChangeTheme = () =>{
       setTheme('Dark')
    }
  return (
    <div>
      <button onClick={ChangeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
