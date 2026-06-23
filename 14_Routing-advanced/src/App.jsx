import React from 'react'
import Navbar from './componenets/navbar'
import Footer from './componenets/Footer'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './componenets/Navbar2'

const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:courseId' element={<CourseDetail/>}/>
        <Route path='/product' element={<Product/>} > 
        <Route path='men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
