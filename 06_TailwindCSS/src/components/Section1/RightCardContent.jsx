import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold rounded-full h-12 w-12 flex justify-center items-center'>{props.id}</h2>
        <div>
            <p className='text-lg leading-normal text-white mb-12 text-shadow-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati similique consectetur veniam. Deleniti vero aliquid obcaecati omnis! Asperiores, voluptatibus!</p>
        <button style={{backgroundColor:props.color}} className= 'text-white font-medium px-8 py-3 m-3 rounded-full'>{props.tag}</button>
        <button className= 'text-white font-medium px-3 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button> 
          <div>    
            </div>       
        </div>
       </div>
    </div>
  )
}

export default RightCardContent
