import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const  [userData, setUserData] = useState([])
  const getData = async () => {
    const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=100')
    setUserData(response.data)
    console.log(response.data)
  }
  useEffect(function(){
      getData()
    },[])

    const [index, setIndex] = useState(1)

   let printUserData = <h3 className='text-gray-400 text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute'>Loading...</h3>
    if(userData.length>0){
      printUserData = userData.map(function(elem,idx){
        return <div key={idx} className='bg-white p-4 rounded'>
          <img className='h-48 w-full object-contain' src={elem.image} alt={elem.title} />
        </div>
      })
    }
  return (
    <div className='bg-black min-h-screen text-white'>
      <h2 className='text-5xl bg-red-500 fixed'>{index}</h2>
      <button onClick={getData} className='bg-green-600 m-5 px-5 py-2 rounded text-white'>Get Data</button>
      
      <div className='grid grid-cols-4 gap-4 p-5'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center gap-6 p-4'>
        <button
        style={{opacity: index== 1 ? 0.6 : 1}}
          onClick={()=>{
            if(index>1){
          setIndex(index-1)}
        }
        }
         className='bg-amber-400 text-black px-4 py-2 rounded active:scale-95'>Prev</button>
        <button
         onClick={()=>{
          setIndex(index+1)
        }
        }
        className='bg-amber-400 text-black px-4 py-2 rounded active:scale-95'>Next</button>
      </div>
    </div>
  )
}

export default App
