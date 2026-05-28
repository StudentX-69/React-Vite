import React, { useState } from 'react'

const App = () => {

  // const [num, setnum] = useState(12)
  // const [Username, setUsername] = useState('Abhay')
  // const [num, setNum] = useState(0)
  // const [Num, setNum] = useState({user:'Abhay',age:20})
    const [num, setNum] = useState([10,20,30])

  //function ChangeNum(){
  //  setnum(30)  
  //  setUsername('Aman')
 // }
  // function increaseNum(){
  //   setNum(num+1)
  // }
  //  function decreaseNum(){
  //   setNum(num-1)
  // }
  // const btnClicked=()=>{
  //   console.log(Num)
  //   const newNum = {...Num};
  //   newNum.user = 'Aman'
    
  //   setNum(newNum)
  // }
  const Btnclicked = () => {
    const newNum = [...num];
    newNum.push(99)

    setNum(newNum)
  }
  return (
    <div >
      {/* <h1>Value of num is  {num} <br /> value of user is {Username}</h1>
      <button onClick={ChangeNum}>click</button> */}

       {/* <div>
        <h2>{num}</h2>
        <button onClick={increaseNum}>increase</button>
        <button onClick={decreaseNum}>decrease</button>
        </div>     */}

        {/* <h1>{Num.user},{Num.age}</h1>
        <button onClick={btnClicked}>click</button> */}

        <h1>{num}</h1>
        <button onClick={Btnclicked}>click</button>
    </div>

  )
}

export default App
