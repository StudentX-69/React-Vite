import React, { createContext, useState } from 'react'

export const ThemeDataContext = createContext()
export const PostDataContext = createContext()

const Themecontext = (props) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeDataContext.Provider value={[theme, setTheme]}>
      <PostDataContext.Provider value='Sheriyans'>
        {props.children}
      </PostDataContext.Provider>
    </ThemeDataContext.Provider>
  )
}

export default Themecontext
