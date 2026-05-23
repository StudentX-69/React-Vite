import React from 'react'
import Card from './assets/components/card'
const App = () => {
  return (
    <div className='Parent'> 
    <Card user = 'Abhay' age = {20}  img = 'https://images.unsplash.com/photo-1779226347538-ca1a725ae550?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D'/>
    <Card user = 'Aman' age = {21}  img = 'https://images.unsplash.com/photo-1773332598451-8a0a59941912?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D'/>
     </div>
  )
}

export default App
