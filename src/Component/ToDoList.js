import React from 'react'
import { useSelector } from 'react-redux'
import ToDoCard from './ToDoCard'

const ToDoList = () => {
    const data=useSelector(state=>state.data)
  return (
    <div className='back'>
  
    <h2>My List To Do</h2>
    
    {
    data.map((el,i)=><ToDoCard task={el}/>)
    }
    </div>
  )
}

export default ToDoList