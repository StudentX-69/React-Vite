import { CopySlash, Delete } from "lucide-react";
import { useState } from "react";
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [Details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=> {
   e.preventDefault();
   
   const copyTask = [...task];
   copyTask.push({title,Details})
   setTask(copyTask)
   console.log(copyTask)
   
   setTitle('')
   setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={ (e)=>{
        submitHandler(e)
      }} className="flex flex-col lg:w-1/2 items-start gap-4 p-10 ">
        <h1 className="text-4xl font-bold">Add Notes</h1>

        <input type="text"
         placeholder="Enter Notes Heading " 
         className="px-5 py-2  border-2 rounded w-full outlined-none" 
         value={title}
         onChange={(e)=>{
           setTitle(e.target.value)
         }}
         />

        <textarea type="text" 
        placeholder="Enter Details" 
        className=" flex items-start flex-row px-5 h-32 py-2 font-medium outlined-none border-2 rounded w-full"
        value={Details}
        onChange={(e)=>{
           setDetails(e.target.value)
         }}
        />

        <button className="bg-white font-medium text-black outlined-none px-5 py-2 rounded w-full">Add Note</button>
          </form>
          <div className=" lg:w-1/2 lg:border-l-2 p-10"> 
           <h1 className="text-4xl font-bold">Recent Notes</h1>
          <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
           {task.map(function(elem,idx){
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-2xl text-black p-4 bg-white">
              <div>
              <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
              <p className="mt-3 leading-tight text-xs font-medium text-gray-500">{elem.Details}</p>
              </div>
              <button onClick={()=>{deleteNote(idx)}} className="w-full bg-red-500 py-2 text-xs text-white font-bold rounded cursor-pointer active:scale-95">Delete</button>
            </div>
            
           })}
          </div>
          </div>      
    </div>
  )
}

export default App
