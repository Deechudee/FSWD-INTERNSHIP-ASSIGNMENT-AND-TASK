import { useState } from 'react'
import './App.css'

function listApp(){

  const [task,setTask]=useState("Studyreact");

  return (
    <div className='app'>
      <div className='task'>
        <h1>Dynamic List App</h1>
        <form action="text"><h3>Enter task:{task}</h3></form>
        <button onClick={() => ("Complete assignment")}></button>
      </div>
    </div>
  )
}

export default listApp