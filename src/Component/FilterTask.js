import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTask, handlefilterchange } from '../redux/actions'

const FilterTask = () => {
    const taskfilter=useSelector(state=>state.taskfilter)
    const dispatch=useDispatch()


  return (
    <div>

        <input   value={taskfilter} onChange={(e)=>dispatch(handlefilterchange(e.target.value))} type="text" name="
        " id="" />
    </div>
  )
}

export default FilterTask